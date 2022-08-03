const express = require("express");
const { create,getAll, filterByLeave, filterByField,filter} = require("../controller/goods.controller")

const data=require("../config/data.json")


const router = express.Router();



//create good
//locahost:3000/create
router.post("/create",create)




//get all goods
//locahost:3000/allgoods
router.get("/allgoods",getAll)


//get goods by leave 1 or 0
//locahost:3000/1 or 0
router.get("/:leave",filterByLeave)


//filter gods by field
// locahost:3000?fielname=value
router.get("/",filterByField)



 




module.exports = router ; 