const express = require('express');
const cors = require('cors');
const Router = require('./Router/Exprouter'); // Ensure the correct path
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors()); // Middleware to handle CORS

app.use( Router); 

require('dotenv').config();

const PORT = process.env.PORT || 5555;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("MongoDB is connected");
    })
    .catch((error) => {
        console.log(error);
    });


