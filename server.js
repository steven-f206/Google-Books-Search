const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
const axios = require('axios');
const app = express();

// Config
require('dotenv/config');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to Mongo DB
mongoose.connect(process.env.MONGODB_URI,{useUnifiedTopology: true, useNewUrlParser: true});

// Define API routes here

/*  POST REQUEST */
app.post('/api/books', async (req, res) => {
    let searchQuery = req.body.searching;
    const googleConfig = process.env.GOOGLE_BOOKS;
    let response = await axios(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${googleConfig}`);
    let data = await response;
    res.send(data.data);
});

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
