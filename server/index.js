import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js';
import profileRoute from './routes/profile.js';
import friendRoute from './routes/friend.js';

const app = express();

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:"true"}));


app.use(cors());

app.use('/api/auth',authRoute);
app.use('/api/profile',profileRoute);
app.use('/api/profile/friend',friendRoute);




app.get('/',(req,res)=>{
    res.status(200).json("Hello");
});

const PORT = 2000;

mongoose.connect("mongodb+srv://socialnetwork:159753@cluster0.l6hfemu.mongodb.net/?retryWrites=true&w=majority",
    {useNewUrlParser:true,useUnifiedTopology:true}).then(()=>
        app.listen(PORT,()=>console.log("Connnected")))
        .catch((error)=>console.log(error.message));