const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://TodoDB:AC3vXQhgFHGtehXf@cluster0.dnw37y6.mongodb.net/?retryWrites=true&w=majority";


MONGODB_URL =uri;

exports.ToDoDataBase = ()=>
{
    mongoose.connect(MONGODB_URL,{
        useNewUrlParser: true,
    useUnifiedTopology: true,
    }).then(
        console.log("Connection to MongoDB Successfull!")
    ).catch((error) =>{

        console.log(error);
        console.log("Connection to MongoDB Failed!");
        process.exit(1);
    })
}