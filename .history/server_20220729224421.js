const express= require("express")
const goods = require("./route/goods")
require('dotenv').config({path:'./config/.env'})
const connectDB= require('./config/connectDB');

const app=express();
 



app.use(express.json());
//goods router

//api goods
app.use("/",goods)



//conne
connectDB();

app.listen(process.env.PORT,(err)=>{
    err 
    ? console.log(err)
    : console.log(`the server is running on ${process.env.PORT}`);
})