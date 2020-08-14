const express = require('express');
const { TeamMember } = require('./model');
var sqlite3 = require('sqlite3').verbose();
var bodyParser = require("body-parser");

//create database
// var db = new sqlite3.Database('teamsList', (err) => {
//     if (err){return console.error(err.message)};
//     console.log("CONNECTED TO IN-MEM SQLITE database.")
// });

var db = new sqlite3.Database('../database.sqlite3', sqlite3.OPEN_READWRITE, (err) => {
  if (err){return console.error(err.message)};
  console.log("CONNECTED TO GIVEN SQLITE database.")
});

db.serialize(() => {
  db.each(`SELECT  as id,
                  Name as name
           FROM playlists`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(row.id + "\t" + row.name);
  });
});
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/team', async (req, res, next) => {
  const team = await TeamMember.findAll();
  return res.json(team);
});

app.post('/team', async (req, res, next) => {
  console.log("post req!")
  const newTeamMember = new TeamMember({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      title: req.body.title,
      story: req.body.story,
      favoriteColor: req.body.favoriteColor,
      photoUrl: req.body.photoUrl
  });
  try{
    const savedTeamMember = await newTeamMember.save();
    res.json(savedTeamMember);
  }catch(err){
      res.json({message: err})
  }
;});

module.exports = app;
