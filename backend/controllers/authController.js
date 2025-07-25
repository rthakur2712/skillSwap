import User from "../models/User.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const signUp = async(req,res)=>{
  const {name,email,password} = req.body;
  // check if already exists then redirect to signin, else 
  try{

    const existing = await User.findOne({email});
    if( existing ){
      res.status(400).json({message:"Email already exists"})
    }
    //not existing then we have to hash the password and store the values, then redirect to either signin or home page
    const hashedPassword = await bcrypt.hash(password,10);
    const user = await User.create({name, email, password:hashedPassword});
    const token = jwt.sign({id:user._id},process.env.JWT_SECRET, {expiresIn:'1d'});
    res.status(201).json({user,token});
  }
  catch(err){
    res.status(500).json({message:"Signup failed",error:err});
  }
}

const signIn = async(req,res)=>{
  const {email, password} = req.body;
  try{
    const user = await User.findOne({email});
    if( !user ){
      res.status(500).json({message:"No such user exists!! Try signup"});
    }
    
    const hashedPassword = await bcrypt.hash(password,10);
    console.log("hashedPass: ",hashedPassword);
    console.log("db_pass: ",user.password);
      
    if( bcrypt.compare(hashedPassword, user.password) ){
      const token = jwt.sign({id:user._id},process.env.JWT_SECRET, {expiresIn:'1d'});
      res.status(201).json({user,token});
    }
    else{
      res.status(500).json({message:"Email or password don't match"});
    }
  }
  catch(err){
    res.status(500).json({message:"Error while signin: ", err});
  }
}

export {signIn, signUp};