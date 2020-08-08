const fs = require('fs');
const path = require('path');
const express = require('express');
const { notes } = require ('./data/db');


// create the express server
const app = express();
const PORT = process.env.PORT || 3001;

const mainPage = path.join(__dirname, "/public");



app.use(express.static('public'));
// parse incoming string or array data
app.use(express.urlencoded({extended: true}));
// parse incoming JSON data
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "mainPage", "index.html"));
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/data/db.json"));
});




// listen for server
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
  