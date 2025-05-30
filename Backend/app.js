const dotenv = require('dotenv');
dotenv.config();
const express=require('express');
const app=express();
const cors=require('cors');
app.use(cors());
const connectToDB = require('./db/db');
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
const cookieParser = require('cookie-parser');
app.use(cookieParser());

connectToDB();

app.get('/',(req,res)=>{
    res.send('Hello, World!');
});

app.use('/users', userRoutes);
app.use('/captains', captainRoutes);

module.exports=app;


