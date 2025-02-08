require('dotenv').config();
const express = require('express');
const bookRoutes = require('./Routes/bookRoutes');
const cors = require("cors");

const app =  express();
const port = process.env.PORT || 5000;

//connect to database
const connectDB = require('./Database/db');
connectDB();

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use('/api/books',bookRoutes);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})


