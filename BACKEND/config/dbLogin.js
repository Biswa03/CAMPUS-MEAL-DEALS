const mongoose = require('mongoose');
require('dotenv').config();

console.log(process.env.PORT)
async function connectAuthDB() {
    
console.log(process.env.PORT)
    try {
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        
        const db = mongoose.connection.db;
        console.log("MongoDB connected to Auth database:", db.databaseName);

    } catch (error) {
        console.error('Auth DB connection failed:', error);
    }
}

// Calling the async function to connect to the Auth database
connectAuthDB();

// Defining the User schema
const userSchema = new mongoose.Schema({
    collegeId: {
        type: String,
        required: true,
        unique: true,
    },
    email: { 
        type: String,
        required: true,
        unique: true,
    }, 
    password: {
        type: String,
        required: true
    }
});

// Creating the User model
const User = mongoose.model("User", userSchema);

module.exports = { connectAuthDB, User};
