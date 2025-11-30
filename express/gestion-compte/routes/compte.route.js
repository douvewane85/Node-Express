import { Router } from "express";
import compteController from "../controllers/compte.controller.js";
import { body, param, query } from "express-validator";
import { validationError } from "../middlewares/validation.middleware.js";

const compteRouter=new Router();
compteRouter.get("/",[
   query("type").optional().isString().withMessage("Le type doit etre une chaine"),
   query("page").optional().isInt({min:1}).withMessage("La page  doit etre un entier positif"),
   query("size").optional().isInt({min:2}).withMessage("La size doit etre un entier >=2"),
],   validationError, compteController.index); ;
compteRouter.post("/",[
       body("titulaire").isString().notEmpty().withMessage("Le titulaire doit etre une chaine"),
       body("solde").isFloat({min:10000}).withMessage("Le solde doit etre un reel >=10000"),
       body("type").isString().notEmpty().withMessage("Le type doit etre une chaine"),
],validationError, compteController.create);
compteRouter.get("/:numero/solde",[
      param("numero").isString().withMessage("Le numero est obligatoire et doit etre une chaine"),
], validationError, compteController.show);
// Définir les routes pour la gestion des comptes
export default compteRouter;