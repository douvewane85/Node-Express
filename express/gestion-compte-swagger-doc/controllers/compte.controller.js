import { validationResult } from "express-validator";
import compteService from "../services/compte.service.js";
import ResponseFormat from "../utils/response.format.js";

const index =(req, res) => {
   const comptes= compteService.getAll();
   return res.status(200).json(new ResponseFormat(200, comptes, "Liste des comptes récupérée avec succès"));
}
const create=(req, res) => {
  const errors= validationResult(req);
   if(!errors.isEmpty()){
      return res.status(400).json(new ResponseFormat(400, null, "Données de compte invalides", errors.array()));
   }
   const compte=req.body;
   const newCompte=compteService.save(compte);
   return res.status(201).json(new ResponseFormat(201, newCompte, "Compte créé avec succès"));
}
const show= (req, res) => {
     const errors=  validationResult(req);
       if(!errors.isEmpty()){ 
            return res.status(400).json(new ResponseFormat(400, null, "Numéro de compte invalide", errors.array()));
      }
     const numero=req.params.numero;
     const compte=compteService.getByNumero(numero);
     if(compte!==null){
        return res.status(200).json(new ResponseFormat(200, 
         {
         solde: compte.solde,
         titulaire: compte.titulaire,
         numero: compte.numero,
         id: compte.id
        }, 
        `Solde ${compte.solde} récupéré avec succès`))
        
     }else{
        return res.status(404).json(new ResponseFormat(404, null, "Compte non trouvé"));
     }
     
}
export default {
   index,
    create,
    show
};