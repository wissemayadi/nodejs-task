const express = require("express");

//controllers functions
const { create,
        getAll, 
        filterByLeave,
        filterByField,
        updateGoods, 
        deleteGood,
        getByCompany,
        getById,
        registerByUser
    } = require("../controller/goods.controller")


const router = express.Router();



//create good
//http://locahost:3000/create

router.post("/create",create)


//create good by user
//http://locahost:3000/api/goodByUser

router.post("/goodByUser",registerByUser)


//get all goods
//http://locahost:3000/allgoods

router.get("/allgoods",getAll)


//get goods by leave 1 or 0
//http://locahost:3000/1 or 0

router.get("/:leave",filterByLeave)


//filter gods by field
// http://locahost:3000?fielname=value

router.get("/",filterByField)

//update a goods
//http://locahost:3000/api/updateGood/:id

router.put("/updateGood/:id",updateGoods)


//delete one good
//http://locahost:3000/api/deleteGood/:id

router.delete("/deleteGood/:id",deleteGood)


//get one good by id
// http://locahost:3000/api/good/:id

router.get("/good/:id",getById)


//get one good by company
//locahost:3000/api/goods/:id

router.get("/goods/:company",getByCompany)




module.exports = router ; 