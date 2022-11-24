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
  //console.log('glossary.find() aaaaa is ', Glossary.find());
  Glossary.find()
    .then(data => {
      console.log('the data isaaaaa', data);
      res.send(data);
    }).catch(err => {
      res.status(400).send('error in server side get', err);
    })
  //res.send('The Get is working');
})

app.delete('/words', (req, res) => {
  Glossary.deleteOne(req.body)
    .then(response => {
      res.send('Got a DELETE request at /words' + req.body);
    }).catch(err => {
      res.send('got an error in delete');
    })
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


//https://stackoverflow.com/questions/22278761/mongoose-difference-between-save-and-using-update
//save vs update explanation ^^
app.patch('/words', (req, res) => {
  //Glossary.update(Glossary.find({'word':'testingOne'}), {_id: '637fedc20a68b5cfe3f7d15d', word: 'testingOne', def: 'new def', __v: 0})
  Glossary.update(Glossary.find({"word": req.body.word}), req.body)
    .then(response => {
      res.send('/words PATCH worked' + req.body);
    }).catch(error => {
      res.send('/words PATCH ERROR');
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
