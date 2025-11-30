import { Router } from "express";
import compteController from "../controllers/compte.controller.js";
import { body, param } from "express-validator";




const compteRouter=new Router();
/**
 * @openapi
 * components:
 *   schemas:
 *     Compte:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         numero:
 *           type: string
 *         titulaire:
 *           type: string
 *         solde:
 *           type: number
 *           format: float
 *       example:
 *         id: 1
 *         numero: "FR761234567890"
 *         titulaire: "Alice Dupont"
 *         solde: 1200.5
 *
 *     CompteInput:
 *       type: object
 *       properties:
 *         titulaire:
 *           type: string
 *         solde:
 *           type: number
 *       required:
 *         - titulaire
 *         - solde
 *       example:
 *         titulaire: "Alice Dupont"
 *         solde: 0
 *
 *     SoldeResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         numero:
 *           type: string
 *         titulaire:
 *           type: string
 *         solde:
 *           type: number
 *       example:
 *         id: 1
 *         numero: "FR761234567890"
 *         titulaire: "Alice Dupont"
 *         solde: 1200.5
 *
 *     ApiResponse:
 *       type: object
 *       properties:
 *         statusCode:
 *           type: integer
 *         success:
 *           type: boolean
 *         message:
 *           type: string
 *         data:
 *           oneOf:
 *             - type: object
 *             - type: array
 *             - nullable: true
 *       example:
 *         statusCode: 200
 *         success: true
 *         message: "Liste des comptes récupérée avec succès"
 *         data:
 *           - id: 1
 *             numero: "FR761234567890"
 *             titulaire: "Alice Dupont"
 *             solde: 1200.5
 */


/**
 * @openapi
 * /api/v1/comptes:
 *   get:
 *     tags:
 *       - Comptes
 *     summary: Liste des comptes
 *     description: Récupère la liste complète des comptes.
 *     responses:
 *       200:
 *         description: Liste renvoyée avec succès (wrapper ApiResponse)
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 */
compteRouter.get("/", compteController.index); 

/**
 * @openapi
 * /api/v1/comptes:
 *   post:
 *     tags:
 *       - Comptes
 *     summary: Créer un compte
 *     description: Crée un nouveau compte. .
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CompteInput'
 *     responses:
 *       201:
 *         description: Compte créé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       400:
 *         description: Requête invalide
 */
compteRouter.post("/",[
    body("titulaire").isString().notEmpty().withMessage("Le titulaire du compte est requis et doit être une chaîne de caractères."),
    body("solde").isFloat({ min: 10000 }).withMessage("Le solde du compte doit être un nombre positif.")
], compteController.create);

/**
 * @openapi
 * /api/v1/comptes/{numero}/solde:
 *   get:
 *     tags:
 *     - Comptes
 *     summary: Récupérer le solde d'un compte
 *     description: Récupère le solde du compte identifié par son numéro.
 *     parameters:
 *       - in: path
 *         name: numero
 *         required: true
 *         schema:
 *           type: string
 *         description: Le numéro du compte.
 *     responses:
 *       200:
 *         description: Solde récupéré avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       404:
 *         description: Compte non trouvé
 */
compteRouter.get("/:numero/solde",[
    param("numero").isString().notEmpty().withMessage("Le numéro du compte est requis et doit être une chaîne de caractères.")
] ,compteController.show);
// Définir les routes pour la gestion des comptes
export default compteRouter;