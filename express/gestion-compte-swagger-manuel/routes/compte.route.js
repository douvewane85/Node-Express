import { Router } from "express";
import compteController from "../controllers/compte.controller.js";

const compteRouter=new Router();
compteRouter.get("/", compteController.index); ;
compteRouter.post("/", compteController.create);
compteRouter.get("/:numero/solde", compteController.show);
// Définir les routes pour la gestion des comptes
export default compteRouter;