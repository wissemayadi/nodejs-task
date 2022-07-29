const mongoose = require("mongoose");

const goodsSchema= mongoose.Schema({
  
 
   serialNumber:{type: Number},
   company:{type:String},
   employee:{type:String},
   description:{type:String},
   leave:{type:Number}

  


})

module.exports =Goods= mongoose.model("goods",goodsSchema);