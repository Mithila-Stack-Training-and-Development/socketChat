import { asyncHandler } from '../utilities/ayncHandler.js';
import { errorHandler } from '../utilities/errorHandler.js';
import jwt from 'jsonwebtoken'

export const isAuthenticated = asyncHandler(async (req, res, next) => {

    const token = req.cookies.token || req.headers['authorization']?.replace("Bearer ","");
    if(!token){
        return next(new errorHandler("Invalid token",400))
    }
    const tokenData = jwt.verify(token, process.env.JWT_SECRET)//Decrept id of user
    console.log(tokenData)
    req.user = tokenData
    next();
  });