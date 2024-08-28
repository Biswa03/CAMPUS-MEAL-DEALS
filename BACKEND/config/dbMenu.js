const mongoose = require('mongoose');
require('dotenv').config();

console.log("MONGO_URI:", process.env.MONGO_MENU_URI);

async function connectAndFetchData() {
    try {
        const mongoUri = process.env.MONGO_MENU_URI;
        
        if (!mongoUri) {
            console.log('MONGO_URI is not defined in .env file');
        } 
        // Connecting to MongoDB
        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
 
        const db = mongoose.connection.db;
        console.log("MongoDB connected:", db.databaseName);

        // Accessing the "menu-items" collection
        const menuData = db.collection("menu-items");

        // Fetching all documents from the "menu-items" collection
        const data = await menuData.find({}).toArray();

        // The fetched data
        if (data.length === 0) {
            console.log('No documents found in the "menu-items" collection.');
        } else {
            console.log('Fetched data from "menu-items":', data);
        } 
 
    } catch (error) {
        console.error('DB connection or data fetching failed:', error);
    }
} 
connectAndFetchData();
 
module.exports = { connectAndFetchData }; 
