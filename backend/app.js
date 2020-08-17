const express = require('express');
const { TeamMember } = require('./model');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require("body-parser");
const cors = require('cors');
const path = require('path');
const dbPath = path.resolve(__dirname, 'database.sqlite3');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var db = new sqlite3.Database(dbPath, (err) => {
  if (err){return console.error(err.message)};
  console.log("CONNECTED TO SQLITE database.")
});

//HTTP CALLS
app.get('/team', async (req, res, next) => {
  const team = await TeamMember.findAll();
  return res.json(team);
});

//POST request to send data 
app.post('/team', async (req, res, next) => {
  console.log("post req!");
  const newTeamMember = new TeamMember({
      firstName: req.body.dataFinal.firstName,
      lastName: req.body.dataFinal.lastName,
      title: req.body.dataFinal.title,
      story: req.body.dataFinal.story,
      favoriteColor: req.body.dataFinal.favoriteColor,
      photoUrl: req.body.dataFinal.photoUrl
  });
  try{
    const savedTeamMember = await newTeamMember.save();
    res.json(savedTeamMember);
    db.close();
  }catch(err){
    res.json({message: err});
  }
});

module.exports = app;
