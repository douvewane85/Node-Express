
import express from 'express'
import userRouter from "./userRouter.js";
const app=express()
// Middleware pour parser le body des requêtes (JSON et form-urlencoded)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/v1/users", userRouter);

app.listen(3000,()=>console.log("Listen sur le port 3000..."));