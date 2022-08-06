const mongoose = require("mongoose");
const user = require("../model/user");
const goodsSchema= mongoose.Schema({
  
 
   serialNumber:{type: Number},
   company:{type:String},
   employee:{type:String},
   description:{type:String},
   leave:{type:Number},
   userId:[ {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users"
    }]

  


})

module.exports =Goods= mongoose.model("goods",goodsSchema);