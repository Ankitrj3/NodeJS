const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ankitrobinranjan:<Password>@cluster0.tcisv.mongodb.net/')
.then(()=>{
    console.log("Conneted to MongoDB");
}).catch((err)=>{
    console.log(err);
})

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    isActive: Boolean,
    tags: [String],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// create user model
const User = mongoose.model('User', userSchema);

// create user
async function createUser(){
    try{
    // 1st way to create user
    //    const newUser = await User.create({
    //     name: "Ankit",
    //     age: 21,
    //     email: "ankit@gmail.com",
    //     isActive: true,
    //     tags: ["developer", "frontend", "backend","designer"]
    //    });
    // 2nd way to create user
    // const newUser = new User({
    //     name: "JoneDoe",
    //     age: 24,
    //     email: "johnDeo12@gmail.com",
    //     isActive: true,
    //     tags: ["developer", "frontend", "backend","designer"]
    //    });
    //     await newUser.save();
    //     console.log(newUser, "User created successfully");

    // get all users
        // const getUsers = await User.find({});
        // console.log(getUsers,"All users");

    // get user whose isActive is false
        // const getActiveUser = await User.find({isActive: false});
        // console.log(getActiveUser, "Not an Active user");
    
    // get user whose age is less than 24
        // const getAgeUser = await User.find({age: {$lt: 24}});
        // console.log(getAgeUser, "User whose age is less than 24");
    
    // get one user whose age is greater than 21
        // const getOneUser = await User.findOne({age: {$gt:21}});
        // console.log(getOneUser, "User whose age is greater than 21");

    // get user by id
    // const getLastCReatedUser = await User.findById(newUser._id);
    // console.log(getLastCReatedUser, "Last created user");

    // get user by id
    // const getUser = await User.findById("67a74929095927f1a81019df");
    // console.log(getUser, "User by id");

    // selected fields
    // const getUserSelectedFields = await User.find().select("name email -_id");// -_id means exclude id
    // console.log(getUserSelectedFields, "Selected fields");
    
     //limit the User
    // const getLimitedUser = await User.find().limit(3).skip(1).select("name email -_id");//skip means skip the first user
    // console.log(getLimitedUser, "Limited user");

    // sort the User
    // const getSortedUser = await User.find().sort({age: -1}).select("name age -_id"); // 1 means ascending order and -1 means descending order
    // console.log(getSortedUser, "Sorted user");

    //count documents
    // const countUser = await User.find().countDocuments({isActive:true});
    // console.log(countUser, "Count user");
    // const countUser1 = await User.find().countDocuments({isActive:false});
    // console.log(countUser1, "Count user");

    //deleted user
    // const deletedUser = new User({
    //     name: "ANkit",
    //     age: 12,
    //     email: "msafa@gmail.com",
    //     isActive: true,
    //     tags: ["developer", "frontend", "backend","designer"]
    // }); 
    // const saveDeletedUser = await deletedUser.save();
    // console.log(saveDeletedUser, "User created successfully");

        //delete user
    // const deleteUser = await User.findByIdAndDelete(saveDeletedUser._id);
    // console.log(deleteUser, "User deleted successfully");
 
    //update user
    const updateUser = new User({
        name: "ANkit",
        age: 12,
        email: "update@gmail.com",
        isActive: true,
        tags: ["developer", "frontend", "backend","designer"]
    });
    const saveUpdateUser = await updateUser.save();
    console.log(saveUpdateUser, "User created successfully");

    const update = await User.findByIdAndUpdate(saveUpdateUser._id,{
        $set: {
            name:"Rahul",
            age: 14,
            email:"updatedemail@gamil.com",
            isActive: false
        },
        $push: {
            tags: "updated tag"
        },
    },{new: true});//new: true means return updated document
    console.log(update, "User updated successfully");

    }catch(err){
        console.log(err);
    } finally{
        await mongoose.connection.close();
    }  
}
createUser();