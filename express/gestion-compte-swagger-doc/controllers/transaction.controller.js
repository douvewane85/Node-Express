import transactionService from "../services/transaction.service.js";





const index = (req, res) => {
   const transactions = transactionService.getAllWithCompte();
   return res.status(200).json(new ResponseFormat(200, transactions, "Liste des Transactions récupérée avec succès"));
}
const create = (req, res) => {
   const transaction = req.body;
   const newTransaction = transactionService.save(transaction);
   return res.status(201).json(new ResponseFormat(201, newTransaction, "Transaction créée avec succès"));
}

export default {
   index,
    create
};