// here we will write the routes which and the functions to which they will be redirected
import express from 'express'
import {signIn, signUp} from '../controllers/authController.js'
const app = express();

const router = express.Router();
router.post('/signup',signUp);
router.post('/signin',signIn);

export default router;