const mongoose = require('mongoose');
const connectDB = async()=>{
    try{
        await mongoose.connect(
            "mongodb+srv://ankitrobinranjan:15aGG15%40@cluster0.tcisv.mongodb.net/"
        );
        console.log("MongoDB connection successfull");
    }catch(err){
        console.log("MongoDB connection failed Error->",err);
    }
}

module.exports = connectDB;