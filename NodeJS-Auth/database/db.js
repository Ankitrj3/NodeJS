const mongoose = require('mongoose');
const connectDB = async ()=>{
try{
   await mongoose.connect('mongodb+srv://ankitrobinranjan:15aGG15%40@cluster0.tcisv.mongodb.net/')
   console.log('MongoDB connected');
}catch(err){
    console.error(err.message);
    process.exit(1);
}
}
module.exports = connectDB;