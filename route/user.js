const express= require("express")


//controller function
const{createUser}= require("../controller/user.controller")


const router = express.Router();

router.post("/create",createUser)




module.exports=router;