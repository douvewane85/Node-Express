import express from 'express'
import compteRouter from './routes/compte.route.js'
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json' assert { type: 'json' };



const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/v1/comptes",compteRouter)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3002,()=>console.log("Listen sur le port 3002..."))