const fs = require('fs');
const path = require('path');
const express = require('express');
//const routes = require("./routes");


// create the express server
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.static('public'));
// parse incoming string or array data
app.use(express.urlencoded({extended: true}));
// parse incoming JSON data
app.use(express.json());
// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);


// add route to note data
app.get('/api/db', (req, res) => {
    res.json(notes);
  
});

// listen for server
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
  