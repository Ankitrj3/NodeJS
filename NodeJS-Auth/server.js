require("dotenv").config();
const express = require('express');
const app = express();
const PORT = 3000;
const authRoutes = require('./routes/auth-routes');
const homeRoutes = require('./routes/home-routes');
const adminRoutes = require('./routes/admin-routes');
const connectToDB = require('./database/db');
connectToDB();
//
app.use(express.json());
// routes
app.use('/api/auth', authRoutes);
app.use('/api/home', homeRoutes);
app.use('/api/admin', adminRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});
