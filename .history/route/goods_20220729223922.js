const express = require("express");
const { create,getAll, filterByLeave, filterByField, filterByFields, getJson } = require("../controller/goods.controller")
const data =require("../config/goods.json")
var fs = require('fs');

const router = express.Router();

//create good
//locahost:8081/create
router.post("/create",create)

//get all goods
//locahost:8081/allgoods
router.get("/allgoods",getAll)


//get goods by leave 1 or 0
//locahost:8081/allgoods/1 or 0
router.get("/:leave",filterByLeave)


//filter gods by field
// locahost:8081/allgoods?fielname=value
router.get("/",filterByField)



//test with json datasource

router.get('/hello', (req, res, next) => {

    var data;
    fs.readFile('../config/', 'utf8', function (err, data) {
      if (err) throw err;
      data = JSON.parse(data);
    });

})


router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    res.json(products[id])

})
module.exports = router ; 