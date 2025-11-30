import ResponseFormat from "../utils/response.format.js";

const responseMiddleware=function (req,res,next) {
    res.sendSucces=function (data,message,statusCode=200) {
          res.status(statusCode).json(new ResponseFormat(statusCode, data, message));  
    }

     res.sendError=function (errors,message="",statusCode=404) {
          res.status(statusCode).json(new ResponseFormat(statusCode, errors, message));  
    }
    next()
}

export  default  responseMiddleware;