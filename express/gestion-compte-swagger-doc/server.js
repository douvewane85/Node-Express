import express from 'express'
import swaggerUi from 'swagger-ui-express';
import compteRouter from './routes/compte.route.js'
import swaggerSpec from './swagger.config.js';
import transactionRouter from './routes/transaction.route.js';
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api/v1/comptes",compteRouter)
app.use("/api/v1/transactions",transactionRouter)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.listen(3002,()=>console.log("Listen sur le port 3002..."))