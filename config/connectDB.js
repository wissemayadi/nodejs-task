const mongoose=require("mongoose");
// mongodb://mongo:27017/docker-node-mongo (if you are using docker compose service  )
// mongodb+srv://wissem:wissem@cluster0.moamn.mongodb.net/task2 (if you are using the cloud mongodb or mongodb local)


const connectDB = async () => {
    try {
        //connexion to container mongodb or mongodb data base you have the choice!!
        await mongoose.connect('mongodb://mongo:27017/docker-node-mongo',{
            useNewUrlParser: true,
             useUnifiedTopology: true
        })
        
        console.log("Data base connected")
    } catch (error) {
        
        console.log("Data base connection failed", error)
    }
}

module.exports=connectDB