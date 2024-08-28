// const bcrypt = require('bcryptjs');
// const User = require('../models/User');

// const router = express.Router();
const bcrypt = require("bcrypt");
// backend/routes/auth.js
const express = require('express');
const router = express.Router();
const {User} = require('../config/dbLogin.js'); 
// const db=require("../config/dbLogin")

// Login Route
router.post('/login', async (req, res) => {
    const { collegeId, password } = req.body;
  
    try { // Find the user by collegeId
        const user = await User.findOne({ collegeId:collegeId });
        if(user){ console.log('User found:', user);  }
        else {
            return res.status(400).json({ message: "Invalid email or password." });
        }
  
        // Compare the hashed password with the provided password
        console.log(password, user.password);
        // const isPasswordValid = await bcrypt.compare(password, user.password);
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
                console.error('Error comparing passwords:', err);
                return res.status(500).json({ message: "Internal server error." });
            }

            if (!isMatch) {
                console.log('Invalid password');
                return res.status(400).json({ message: "Invalid email or password." });
            }
            // Passwords match, proceed with the login
             console.log('Password is valid');
        });

    
  
        res.status(200).json({ collegeId: user.collegeId });
    } catch (error) {
        res.status(500).json({ message: "Login failed. Please try again later." });
    }
  });  
  
// Signup Route
router.post('/signup', async (req, res) => {
    const { collegeId, email, password } = req.body;
    console.log(collegeId, email, password);
    try {
        // Check if the email or college ID already exists
        const existingUser = await User.findOne({ $or: [{ email }, { collegeId }] });
        if (existingUser) {
            return res.status(400).json({ message: "Email or College ID already exists. Please log in." });
        }
  
        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(password, 10);
  
        // Create a new user
        const newUser = new User({
            collegeId,
            email,
            password: hashedPassword,
        });
  
        await newUser.save();
        res.status(201).json({ message: "User created successfully." });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Signup failed. Please try again later." });
    }
  });
  

module.exports = router;


// router.post('/signup', async (req, res) => {
//     const { collegeId, email, password } = req.body;

//     try {
//         let user = await User.findOne({ collegeId });

//         if (user) {
//             return res.status(400).json({ msg: 'User already exists' });
//         }

//         user = new User({ collegeId, email, password });

//         const salt = await bcrypt.genSalt(10);
//         user.password = await bcrypt.hash(password, salt);

//         await user.save();

//         res.status(201).json({ msg: 'User registered successfully' });
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server error');
//     }
// });

// router.post('/login', async (req, res) => {
//     const { collegeId, password } = req.body;

//     try {
//         const user = await User.findOne({ collegeId });

//         if (!user) {
//             return res.status(400).json({ msg: 'Invalid credentials' });
//         }

//         const isMatch = await bcrypt.compare(password, user.password);

//         if (!isMatch) {
//             return res.status(400).json({ msg: 'Invalid credentials' });
//         }

//         res.json({ collegeId: user.collegeId });
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server error');
//     }
// });

// module.exports = router;

