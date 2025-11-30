import { Router } from "express";
import transactionController from "../controllers/transaction.controller.js";


const transactionRouter=new Router();
transactionRouter.post("/transactions",transactionController.create); 
transactionRouter.get("/transactions",transactionController.index);

export default transactionRouter;
