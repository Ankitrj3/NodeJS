const mongoose = require("mongoose");
const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register Controller
const registerUser = async (req, res) => {
    try {
        // Extract user info
        const { username, email, password, role } = req.body;

        // Check if user already exists
        const checkExistingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (checkExistingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists with this email or username. Please login."
            });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            role: role || "user"
        });

        // Save user to DB
        await newUser.save();

        return res.status(201).json({
            success: true,
            message: "User created successfully"
        });

    } catch (err) {
        console.error(err.message);
        return res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};

// Login Controller
const loginUser = async (req, res) => {
    try {
        // Extract user info
        const { username, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not found"
            });
        }

        // Check if password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials"
            });
        }

        // Create user token
        const accessToken = jwt.sign(
            {
                userId: user._id,
                username: user.username,
                role: user.role
            },
            process.env.JWT_SECRET_KEY || JWT_SECRET_KEY,
            { expiresIn: "15m" }
        );

        return res.status(200).json({
            success: true,
            message: "User logged in successfully",
            accessToken
        });

    } catch (err) {
        console.error(err.message);
        return res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};

module.exports = { registerUser, loginUser };
