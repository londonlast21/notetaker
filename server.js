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
    res.sendFile(path.join(__dirname, "/public/index.html"));
});
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});
app.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/data/db.json"))
});
app.get("/api/notes/:id", function(req, res) {
    let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    res.json(savedNotes[Number(req.params.id)]);
});

// GET api route
app.get("/notes", (req, res) => {
    let results = notes;
    res.json(results);
});



// POST api route
app.post("/api/notes", (req, res) => {
    let savedNotes = JSON.parse(fs.readFileSync("./data/db.json", "utf-8"))
    let newNote = req.body;
    let newID = (savedNotes.length).toString();
    newNote.id = newID;
    savedNotes.push(newNote);

    fs.writeFileSync("./data/db.json", JSON.stringify(savedNotes));
    console.log("Note saved");
    res.json(savedNotes);
});


// listen for server
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
  