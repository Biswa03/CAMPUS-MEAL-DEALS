const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

require('dotenv').config();

const bcrypt = require("bcrypt"); // To hash and compare passwords
const User = require("./config/dbLogin.js"); // Importing the User model
// const {connectAndFetchData} = require("./config/dbMenu.js"); // Importing the User model
  

//build
const path = require('path');


// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors()) 

//build, static files access
app.use(express.static(path.join(__dirname, '../frontend/build')));



// Routes 
app.use('/api/auth', require('./routes/auth.js'));

//build , routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

// app.use('/api/coupons', require('./routes/coupon'));
const authRoutes = require('./routes/auth.js');
app.use('/api/auth', authRoutes);


app.post("api/auth/signup", async (req, res) => {
  const { collegeId, email, password } = req.body;
  console.log(collegeId, email, password);
  try {
      const existingUser = await User.findOne({ $or: [{ email }, { collegeId }] });
      if (existingUser) {
          return res.status(400).json({ message: "Email or College ID already exists. Please log in." });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
          collegeId,
          email,
          password: hashedPassword,
      });

      await newUser.save();
      res.status(201).json({ message: "User created successfully." });
  } catch (error) {
      res.status(500).json({ message: "Signup failed. Please try again later." });
  }
}); 
  
// Login Route
app.post("api/auth/login", async (req, res) => { 
  const { collegeId, password } = req.body;  

  try { // Find the user by collegeId
      const user = await User.findOne({ collegeId:collegeId });
      if(user){ console.log('User found:', user);  }
      
      if (!user) {
          return res.status(400).json({ message: "Invalid email or password." });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
          return res.status(400).json({ message: "Invalid email or password." });
      }

      res.status(200).json({ collegeId: user.collegeId });
  } catch (error) {
      res.status(500).json({ message: "Login failed. Please try again later." });
  }
});  

// connectAndFetchData();

// Server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});  