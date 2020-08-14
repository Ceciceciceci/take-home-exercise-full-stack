const express = require('express');
const { TeamMember } = require('./model');
// var db = require("./database.js")
var bodyParser = require("body-parser");

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
