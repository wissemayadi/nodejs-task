const express= require("express")


//controller function
const{createUser, getAllUsers, getUserById, updateUser}= require("../controller/user.controller")


const router = express.Router();



//@route POST http://locahost:3000/api/user/create
//@desc create a user
//@access Public

router.post("/create",createUser)

//@route GET http://locahost:3000/api/user/allusers
//@desc get all users
//@access Public

router.get("/allusers",getAllUsers)

//@route GET http://locahost:3000/api/user/:id
//@desc get user by id
//@access Public

router.get("/:id",getUserById)


//@route PUT http://locahost:3000/api/user/:id
//@desc update user by id
//@access Public

router.put("/:id",updateUser)

module.exports=router;