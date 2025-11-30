import { comptes, transactions } from "../data.js";

class TransactionService {
    getAllWithCompte() {
       transactions.map(t => {
          const compte = comptes.find(c => c.id === t.compteId);
          t['compte'] = compte ? compte.numero : null;
       });
       return transactions;
    }
    getAll() {
       return transactions;
    }
    save(transaction) {
        transaction.id = transactions.length > 0 ? Math.max(...transactions.map(t => t.id)) + 1 : 1;
        transaction.date=new Date().toISOString().split('T')[0];
        transactions.push(transaction);
        return transaction;
    }
    getById(id) {
        // Implémentation pour récupérer une transaction par ID
        return transactions.find(t => t.id === parseInt(id));
    }
}
export default new TransactionService();