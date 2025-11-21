import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";


 class FileStore{
       #filePath;
        constructor() {
            
             const __filename = fileURLToPath(import.meta.url);
             const __dirname = path.dirname(path.dirname(__filename));
             this.#filePath = path.join(__dirname,"data", "data.json");
        }
        read(key = undefined) {
            try {
                if (!fs.existsSync(this.#filePath)) return null;
                   const data = fs.readFileSync(this.#filePath, "utf-8");
                   const parsed = JSON.parse(data);
                   return key == null ? parsed : parsed[key];
            } catch (error) {
                console.error("Erreur lecture fichier :", error.message);
                return null;
            }
        }

        write(data){
           try {
              const dir = path.dirname(this.#filePath);
              fs.mkdirSync(dir, { recursive: true });
              fs.writeFileSync(this.#filePath, JSON.stringify(data, null, 2), "utf8");
               return true;
            } catch (error) {
              console.error("Erreur écriture fichier :", error.message);
               return false;
          }
        }
 }

 export default new  FileStore();
 