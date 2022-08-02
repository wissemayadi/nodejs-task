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


//get all goods 
 exports.getAll=(req, res) => {
 
    Goods.find()
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
  

   exports.filter=((req,res)=>{


   
   })
        
    

    
        exports.filterByField = (req, res) => {   
            
          // const filterType = req.query.serialNumber;  
          const filtered= req.query.company;
          
          Goods.find({company: filtered}, function(err, goods){     
              if(err){       
                  console.log(err)     
              } else {       
                  res.json(goods);     
              }       
          }) 
      }; 
     
        
        exports.getSerial = async (req, res) => {
          try {
            const serial = await Goods.findOne(req.params.serialNumber);
        
            res.status(200).json({
              status: 'success',
              data: { serial }
            });
          } catch (err) {
            res.status(404).json({
              status: 'fail',
              message: err
            });
          }
        };
         
