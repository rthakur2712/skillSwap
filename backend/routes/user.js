// here we will write the routes which and the functions to which they will be redirected
import express from 'express'
import { showSkills, updateSkills } from '../controllers/skillController.js';
import { authMiddleware } from '../middlewares/auth.js';
const app = express();

const router = express.Router();
router.patch('/updateSkills',authMiddleware,updateSkills);
router.get('/showSkills',showSkills);

export default router;