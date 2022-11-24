require("dotenv").config();
const express = require("express");
const path = require("path");
const { Glossary, save } = require('../server/db.js')

const app = express();

// Serves up all static and generated assets in ../client/dist.
//IMPORTANT, get comfortable, exactly what it's doing
///connection bettwen front end and backend
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

app.get('/words', (req, res) => {
  res.send('The Get is working');
})
app.post('/words', (req, res) => {
  //Glossary.collection.insertOne({word: 'hello', def: 'def test'}) other way to save to db
  //save({word: 'hello', def: 'def test'})
  //save([{word: 'hellfffo', hello: 'asdfasdf', def: 'def tefffffst'}, {word: 'hellffo', def: 'def tffest'}, {word: 'helfflo', def: 'defffff tesdt'}]) recommended way to save to db
  save(req.body)
    .then(response => {
      console.log(response);
       res.send('(server)The Post is working' + req.body);
    }).catch(error => {
      res.send('(server)error in post on server side');
    })
})

/****
 *
 *
 * Other routes here....
 *
 *
 */

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
