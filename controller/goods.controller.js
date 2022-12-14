const Goods=require("../model/goods")
const User = require("../model/user")




exports.create = function (req, res) {
    // validate request
  
    if (
      !req.body.serialNumber||
      !req.body.company ||
      !req.body.employee ||
      !req.body.description ||
      !req.body.leave 
       
    ) {
      return res.status(400).send({
        success: false,
        message: "Please enter data",
      });
    }
  
    // create a goods
    let goods = new Goods({
        serialNumber : req.body.serialNumber,
        company: req.body.company ,
        employee : req.body.employee ,
        description :req.body.description ,
        leave:req.body.leave,
        
      
    });
  
    // save goods in the database.
   goods
      .save()
      .then((data) => {
        res.send({
          success: true,
          message: "goods successfully created",
          data: data,
        });
      })
      .catch((err) => {
        res.status(500).send({
          success: false,
          message:
            err.message || "Some error occurred while creating the goods.",
        });
      });
  };


  //register good assigned to a user

  exports.registerByUser=async(req,res)=>{

    try{
      const user =await User.findById(req.body.userId)
      const newGood=new Goods ({
        serialNumber : req.body.serialNumber,
        company: req.body.company ,
        employee : req.body.employee ,
        description :req.body.description ,
        leave:req.body.leave,
        userId:req.body.userId
    
      })
      const good =await newGood.save();
      res.json(good);
    }catch(err){
    console.log(err.message);
    res.status(500).send("error to add");
    }
  }

//get all goods 
 exports.getAll=(req, res) => {
 
    Goods.find().populate("userId")
      .then((goods) => res.send(goods))
      .catch((err) => res.send(err));
  };

  //filter by leave
  exports.filterByLeave=("/:leave",(req,res)=>{
       // passing leave in params
        let { leave } = req.params;
        
        // searching leave in the database
        Goods.find({ leave })
          .then((goods) => res.send(goods))
          .catch((err) => res.send(err));
      });
  
    //search by field 
 exports.filterByField = (req, res) => {   
            
        const {id,company,serialNumber,leave,description}=req.query
       Goods.find(req.query).then((goods) => res.send(goods))
       .catch((err) => res.send(err));
       
      }; 
     


      //update goods
  exports.updateGoods=(req,res,next)=>{
        const id = req.params.id;
        const updateObject = req.body;
        Goods.findOneAndUpdate({ _id:id }, { $set:updateObject })
          .exec()
          .then(() => {
            res.status(200).json({
              success: true,
              message: 'Goods is updated',
              updatedGood: updateObject,
            });
          })
          .catch((err) => {
            res.status(500).json({
              success: false,
              message: 'Server error. Please try again.'
            });
          });
      }
      
  //delete one good
  exports.deleteGood=(req, res)=> {
        const id = req.params.id;
        Goods.findByIdAndRemove(id)
          .exec()
          .then(()=> res.status(204).json({
            success: true,
          }))
          .catch((err) => res.status(500).json({
            success: false,
          }));
      }

       
  // get one good by id 
exports.getById=(req, res)=> {
  const id = req.params.id;
  Goods.findById(id)
    .then((good) => {
      res.status(200).json({
        success: true,
        message: `goood on ${good.id}`,
        Good: good,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: 'This good does not exist',
        error: err.message,
      });
   });
}
  

  // get all goods by company name
  exports.getByCompany=(req, res)=> {
    const company = req.params.company;
    Goods.find({company})
      .then((good) => {
        res.status(200).json({
          success: true,
          message: `all goods in company : ${company}`,
          Good: good,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: `This good does not exist ${company}`,
          error: err.message,
        });
     });
  }

         
  



