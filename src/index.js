require("dotenv").config()
const mongoose = require("mongoose")
const app = require("./app")
mongoose.set('strictQuery', true)

const main =  ()=>{
    mongoose.connect(`mongodb://project:project1999@ac-5l7ljnk-shard-00-00.hltetz1.mongodb.net:27017,ac-5l7ljnk-shard-00-01.hltetz1.mongodb.net:27017,ac-5l7ljnk-shard-00-02.hltetz1.mongodb.net:27017/?ssl=true&replicaSet=atlas-10p80y-shard-0&authSource=admin&retryWrites=true&w=majority`,
    {useNewUrlParser:true, useUnifiedTopology: true
    }) 
    .then(()=>{
        console.log("db connected");
        app.listen(5000,()=>console.log(`listening 5000`))
    }).catch((e)=>{
console.log(e.message);
    })
    
}

main()