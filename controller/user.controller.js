const User =require("../model/user")

//controller functions 


exports.createUser = function (req, res) {
    // validate request
  
    if (
      !req.body.username||
      !req.body.email ||
      !req.body.password 
      
    ) {
      return res.status(400).send({
        success: false,
        message: "Please enter data",
      });
    }
  
    // create a goods
    let user = new User({
        username : req.body.username,
        email: req.body.email ,
        password : req.body.password,
        
      
    });
  
    // save goods in the database.
  user
      .save()
      .then((data) => {
        res.send({
          success: true,
          message: "user successfully created",
          data: data,
        });
      })
      .catch((err) => {
        res.status(500).send({
          success: false,
          message:
            err.message || "Some error occurred while creating the user.",
        });
      });
  };


  //get all users
 exports.getAllUsers=(req, res) => {
 
    User.find()
      .then((users) => res.send(users))
      .catch((err) => res.send(err));
  };


//get user by id 

exports.getUserById=(req, res)=> {
  const id = req.params.id;
  User.findById(id)
    .then((user) => {
      res.status(200).json({
        success: true,
        message: `user on ${user.id}`,
        Users: user,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: 'This user does not exist',
        error: err.message,
      });
   });
}
  
//update user by id 

exports.updateUser=(req,res,next)=>{
  const id = req.params.id;
  const updateObject = req.body;
  User.findOneAndUpdate({ _id:id }, { $set:updateObject })
    .exec()
    .then(() => {
      res.status(200).json({
        success: true,
        message: 'user updated successfully!!',
        updatedUser: updateObject,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: 'Server error. Please try again.'
      });
    });
}



