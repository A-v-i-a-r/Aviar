const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config;

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//DB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewURIParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongoose DB connection established successfully");
})

//Launch
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})
