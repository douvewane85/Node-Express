import { comptes } from "../data.js";

class CompteService {
	  getAll(type=null,page=1,size=2) {
        let  comptesFilter=comptes;
        if (type!=null) {
             comptesFilter=  comptesFilter.filter(cpte=>cpte.type==type);
        }
        const pageNum=parseInt(page)||1
        const sizeNum=parseInt(size)||2
        const startIndex=(pageNum-1)*sizeNum
        const endIndex= startIndex+sizeNum
       const comptesPagined= comptesFilter.slice(startIndex,endIndex)
       return {
          comptes: comptesPagined,
          pagination:{
           currentPage:pageNum,
           pageSize:sizeNum,
           totalItems:comptesFilter.length,
           totalPages:Math.ceil(comptesFilter.length/sizeNum)
        }
       }
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