import express from 'express';
import { signIn, signUp } from '../controller/auth.js';


const router = express.Router();

router.post('/signIn',signIn);
router.post('/signUp',signUp);
router.post('/test',(req,res)=>{res.status(200).json("Testing")});


export default router;