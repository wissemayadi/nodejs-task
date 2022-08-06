const express= require("express")


//controller function
const{createUser, getAllUsers}= require("../controller/user.controller")


const router = express.Router();

router.post("/create",createUser)
router.get("/allusers",getAllUsers)



module.exports=router;