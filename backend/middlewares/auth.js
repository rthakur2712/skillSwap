// here we are setting up a middleware, which needs to get the token from the header, verify the token and get the user id and pass it to the 
// next function which is gonna need the user id so it is added to req.userId

import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
dotenv.config();

const authMiddleware = async(req, res, next)=>{
  const token = req.headers.authorization?.split(" ")[1];
  try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("decoded string:", decoded);
    req.userId = decoded.id;
    next();
  }
  catch(err){
    return res.status(500).json({message:"Unauthorized access in middlewares:", err});
  }
}

export {authMiddleware};