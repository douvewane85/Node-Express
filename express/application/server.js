import express from 'express'
import UserRouter from './routes/users.routes.js';
import { errorMiddleware, notFoundMiddleware, responseMiddleware } from './middlewares/response.middleware.js';

import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json' assert { type: 'json' };
const app=express()
// Middleware pour parser le body des requêtes (JSON et form-urlencoded)
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    // Middleware pour les réponses success et error
app.use(responseMiddleware);
app.use("/api/v1/users", UserRouter);

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Middleware pour les erreurs 404 et globales
app.use(notFoundMiddleware);
app.use(errorMiddleware);
app.listen(3001,()=>console.log("Listen sur le port 3001..."));