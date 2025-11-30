import ResponseFormat from "../core/response.format.js";

// Middleware pour les réponses success et error
const responseMiddleware = (req, res, next) => {
    res.sendSuccess = (data, message = "Succès", statusCode = 200) => {
        res.status(statusCode).json(new ResponseFormat(statusCode, data, message));
    };
    
    res.sendError = (message = "Erreur", statusCode = 400, data = null) => {
        res.status(statusCode).json(new ResponseFormat(statusCode, data, message));
    };
    
    next();
};

// Middleware pour les erreurs 404
const notFoundMiddleware = (req, res, next) => {
    res.status(404).json(new ResponseFormat(404, null, "Route non trouvée"));
};

// Middleware pour les erreurs globales
const errorMiddleware = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Une erreur serveur s'est produite";
    
    res.status(statusCode).json(new ResponseFormat(statusCode, null, message));
};

export { responseMiddleware, notFoundMiddleware, errorMiddleware };