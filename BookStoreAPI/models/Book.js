const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Please enter book title'],
        trim:true,
        maxLength:[100,'Book title cannot exceed 100 characters']
    },
    Author:{
        type:String,
        required:[true,'Please enter book author'],
        trim:true,
        maxLength:[100,'Book author cannot exceed 100 characters']
    },
    year:{
        type:Number,
        required:[true,'Please enter book publication year'],
        min : [1000,'Year cannot be less than 1000'],
        max : [new Date().getFullYear(),'Year cannot be greater than current year']
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Book',bookSchema);

