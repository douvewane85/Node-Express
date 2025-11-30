import { validationResult } from "express-validator";
import compteService from "../services/compte.service.js";
import ResponseFormat from "../utils/response.format.js";

const index =(req, res) => {
  
  const {type,page,size}= req.query;

   const comptes= compteService.getAll(type,page,size);
   return res.sendSucces( comptes,"Liste des comptes récupérée avec succès");
}
const create=(req, res) => {
   
   const compte=req.body;
   const newCompte=compteService.save(compte);
   return res.sendSucces( newCompte, "Compte créé avec succès",201);
}
const show= (req, res) => {
   
     const numero=req.params.numero;
     const compte=compteService.getByNumero(numero);
     if(compte!==null){
        return res.sendSucces(
         {
         solde: compte.solde,
         titulaire: compte.titulaire,
         numero: compte.numero,
         id: compte.id
        }, 
        `Solde ${compte.solde} récupéré avec succès`)
        
     }else{
        return res.sendError(null, "Compte non trouvé")

     }
     
}
export default {
   index,
    create,
    show
};