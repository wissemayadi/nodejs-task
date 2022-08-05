const Goods=require("../model/goods")





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
        leave:req.body.leave
      
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



 exports.getAll=(req, res) => {
 
    Goods.find()
      .then((goods) => res.send(goods))
      .catch((err) => res.send(err));
  };

  
 
 
   
      
  

  exports.filterByLeave=("/:leave",(req,res)=>{
    
        let { leave } = req.params;
        
        Goods.find({ leave })
          .then((goods) => res.send(goods))
          .catch((err) => res.send(err));
      });
  

   
     
          // exports.filterByFields=("/",(req,res)=>{
          //   const filtered={}
          //   let query = req.query.company;
          //       Object.keys(Goods).forEach((key)=>{
          //           var good= Goods[key]
          //           if(good==query){
          //               filtered[key]=good
          //           }
          //       })
          //     res.json(filtered)
          //     });
     
        exports.filterByField = (req, res) => {   
            
            const filterType = req.query.serialNumber;  
            const filtered= req.query.company;
            
            Goods.find({serialNumber: filterType}, function(err, goods){     
                if(err){       
                    console.log(err)     
                } else {       
                    res.json(goods);     
                }       
            }) 
        }; 