const mongoose=require("mongoose");
// mongodb://mongo:27017/docker-node-mongo
// mongodb+srv://wissem:wissem@cluster0.moamn.mongodb.net/task2
const connectDB = async () => {
    try {
        //connexion to container mongodb 
        await mongoose.connect('mongodb://mongo:27017/docker-node-mongo',{
            useNewUrlParser: true,
             useUnifiedTopology: true
        })
        //if ok !
        console.log("Data base connected")
    } catch (error) {
        //else error!
        console.log("Data base connection failed", error)
    }
}

module.exports=connectDB