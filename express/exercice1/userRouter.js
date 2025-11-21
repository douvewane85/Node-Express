import { Router } from "express";
import userService from "./userService.js";

const router = Router();

router.get("/api/v1/users",(req,res)=>{
     res.json(userService.getAllUsers());
})

router.get("/api/v1/users/:id",(req,res)=>{
  const user = userService.getUserById(req.params.id);
    if (user) 
        res.status(200).json(user);
    else 
        res.status(404).send('Utilisateur non trouvé');
})


router.delete("/api/v1/users/:id",(req,res)=>{
     const user = userService.getUserById(req.params.id);
    if (user) {
         userService.deleteUser(req.params.id)
        res.status(204).json({
            status:true,
            message:"Utilisateur suprime avec success"
        });
    }else {
       res.status(404).send('Utilisateur non trouvé');
    }
})


router.post("/api/v1/users",(req,res)=>{
        console.log(req.body);
        const newUser = userService.createUser(req.body);
        res.status(201).json(newUser);
})

export default router;