
import express from 'express'
import userRouter from "./userRouter.js";
import { responseMiddleware, notFoundMiddleware, errorMiddleware } from "./middleware.js";
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json' assert { type: 'json' };

const app=express()
// Middleware pour parser le body des requêtes (JSON et form-urlencoded)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware pour les réponses success et error
app.use(responseMiddleware);

app.use("/api/v1/users", userRouter);

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Middleware pour les erreurs 404 et globales
app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.listen(3000,()=>console.log("Listen sur le port 3000..."));