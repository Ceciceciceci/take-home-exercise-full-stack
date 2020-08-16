const express = require('express');
const { TeamMember } = require('./model');
var sqlite3 = require('sqlite3').verbose();
const bodyParser = require("body-parser");
const cors = require('cors');
const path = require('path')
const dbPath = path.resolve(__dirname, 'database.sqlite3')
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var db = new sqlite3.Database(dbPath, (err) => {
  if (err){return console.error(err.message)};
  console.log("CONNECTED TO GIVEN SQLITE database.")
});

//HTTP CALLS
app.get('/team', async (req, res, next) => {
  const team = await TeamMember.findAll();
  return res.json(team);
});

app.post('/team', async (req, res, next) => {
  // res.header("Access-Control-Allow-Origin", "*"); //enable cors
  console.log("post req!");
  // console.log(req);
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
    // console.log(res);
    // const newTeamMemberData = (Object.values(newTeamMember.dataValues)).splice(1, newTeamMemberData.length);
    // console.log(newTeamMemberData.splice(1, newTeamMemberData.length));
    // insertRows(newTeamMemberData);
    // const sql = "`INSERT INTO TeamMembers(firstName, lastName, title, story, favoriteColor, photoUrl)" +
    //             "VALUES (`" +  + ')'    
    // db.run(`INSERT INTO TeamMembers VALUES(?)`, newTeamMemberData, function(err){
    //   if (err) {
    //     return console.log(err.message);
    //   }
    //   // get the last insert id
    //   console.log(`A row has been inserted with rowid ${this.lastID}`);
    // });

    db.close();
  }catch(err){
      res.json({message: err})
  }
;});

module.exports = app;
