const express= require("express")
//the root that contains all endpoints of goods!
const goods = require("./route/goods")
//requiring the path of .env 
require('dotenv').config({path:'./.env'})

// the connection between the server and database must be called inside the server file!!
const connectDB= require('./config/connectDB');

const app=express();
 


app.use(express.json());


//api goods
app.use("/",goods)

//database connexion
connectDB();


// running the server
app.listen(process.env.PORT,(err)=>{
    err 
    ? console.log(err)
    : console.log(`the server is running on ${process.env.PORT}`);
})