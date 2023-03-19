import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js';
import profileRoute from './routes/profile.js';
import friendRoute from './routes/friend.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:"true"}));


app.use(cors());

app.use('/api/auth',authRoute);
app.use('/api/profile',profileRoute);
app.use('/api/profile/friend',friendRoute);




app.get('/',(req,res)=>{
    res.status(200).json("Hello");
});

const PORT = process.env.PORT || 2000;

mongoose.connect(process.env.CONNECTION_URL,
    {useNewUrlParser:true,useUnifiedTopology:true}).then(()=>
        app.listen(PORT,()=>console.log("Connnected")))
        .catch((error)=>console.log(error.message));