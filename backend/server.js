// here we need express and the routes which we will redirect to the routes section
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authroutes from './routes/auth.js'
import userroutes from './routes/user.js'
dotenv.config();

const app = express();
app.use(express.json()); // parse json body

app.use('/api/auth',authroutes);
app.use('/skills',userroutes); // redirect all the auth requests to authroutes

mongoose.connect(process.env.MONGODB_URL)
  .then(
    ()=>{console.log('Successfully connected to the db')
    app.listen(3000,()=>console.log('Server running on PORT 3000'))}
  )
  .catch((err)=>console.log('Error occured while connecting to the db',err));
