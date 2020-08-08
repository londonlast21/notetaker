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


// GET HTML route paths
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "mainPage", "index.html"));
});
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});
app.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/data/db.json"))
});
app.get

// GET api route
app.get("/notes", (req, res) => {
    let results = notes;
    res.json(results);
});



// POST api route
app.post("/api/notes", (req, res) => {
    //set new id for each created note
    req.body.id = notes.length.toString() {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
})


// listen for server
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
  