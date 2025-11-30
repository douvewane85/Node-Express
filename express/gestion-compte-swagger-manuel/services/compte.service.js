import { comptes } from "../data.js";

class CompteService {
	  getAll() {
       return comptes
    }
    save(compte) {
        compte.id = comptes.length > 0 ? Math.max(...comptes.map(c => c.id)) + 1 : 1;
        compte.createAt=new Date();
        compte.numero=`Cpte-${String(compte.id).padStart(3, '0')}`;
        comptes.push(compte);
        return compte;
    }
    getByNumero(numero) {
        return comptes.find(c => c.numero === numero);
    }
    
}

export default new CompteService();