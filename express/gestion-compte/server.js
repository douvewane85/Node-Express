import express from 'express'
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json' assert { type: 'json' };
import compteRouter from './routes/compte.route.js'
import { errorClientMiddleware, errorServerMiddleware } from './middlewares/errors.middleware.js'
import responseMiddleware from './middlewares/response.middleware.js'
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(responseMiddleware)
app.use("/api/v1/comptes",compteRouter)

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use(errorClientMiddleware);
app.use(errorServerMiddleware);



app.listen(3002,()=>console.log("Listen sur le port 3002..."))