import { validationResult } from "express-validator"

const validationError=function (req,res,next) {
      const errors=validationResult(req)
        if (!errors.isEmpty()) {
              let result={}
              errors.array().forEach(error=>{
                 const {path,msg}=error
                 result[path]=msg
               })
              return  res.sendError(result,"Erreur de Validation")
      }
      next()
}
export {
  validationError 
}