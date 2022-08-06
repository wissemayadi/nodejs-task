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


  //get all goods 
 exports.getAllUsers=(req, res) => {
 
    User.find()
      .then((goods) => res.send(goods))
      .catch((err) => res.send(err));
  };