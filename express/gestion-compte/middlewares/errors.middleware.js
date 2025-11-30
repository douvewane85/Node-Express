import ResponseFormat from "../utils/response.format.js";

const errorClientMiddleware=function(req,res,next) {
           res.status(404).json(new ResponseFormat(404, null,`Erreur client avec le code ${codeErreur}` ));
           next()
}

const errorServerMiddleware=function(err,req,res,next) {
     const codeErreur=err.statusCode||500;
       console.log(`Erreur server avec le code ${codeErreur}`);
     if(codeErreur>=500  ){
          return res.status(codeErreur).json(new ResponseFormat(codeErreur, null,`Exception` ));
     }
    next()
}
export {errorClientMiddleware,errorServerMiddleware}

