import ApiResponse from "./ApiResponse.js";

// Middleware pour les réponses success et error
const responseMiddleware = (req, res, next) => {
    res.sendSuccess = (data, message = "Succès", statusCode = 200) => {
        res.status(statusCode).json(new ApiResponse(statusCode, data, message));
    };
    
    res.sendError = (message = "Erreur", statusCode = 400, data = null) => {
        res.status(statusCode).json(new ApiResponse(statusCode, data, message));
    };
    
    next();
};

// Middleware pour les erreurs 404
const notFoundMiddleware = (req, res, next) => {
    res.sendError("Route non trouvée", 404);
};

// Middleware pour les erreurs globales
const errorMiddleware = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Une erreur serveur s'est produite";
    
    res.sendError(message, statusCode);
};

export { responseMiddleware, notFoundMiddleware, errorMiddleware };
