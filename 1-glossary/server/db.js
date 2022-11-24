const mongoose = require("mongoose");


// 1. Use mongoose to establish a connection to MongoDB
//really important
mongoose.connect('mongodb://localhost:27017/glossary')
  .then(() => {
    console.log('connected');
  }).catch(() => {
    console.log('error in connecting to mongoose');
  })
// main().catch(err => console.log('mongo error', err));

// async function main() {
//   await mongoose.connect('mongodb://localhost:3000/test');
// }

// 2. Set up any schema and models needed by the app
const glossarySchema = new mongoose.Schema({
  word: String,
  def: String
});

const Glossary = mongoose.model('Glossary', glossarySchema);
//const avo = new Glossary({word: 'avocado', def: 'a delicious healthy treat'})

let save = (words) => {
  if(Array.isArray(words)) {
    return Promise.all(words.map(word => {
      const word1 = new Glossary(word);
      return word1.save();
    }))
  } else {
    //inherits all the properties from the model glossary
    //returns that as a promise
    const word = new Glossary(words);
    return word.save();
  }
}

// 3. Export the models
module.exports.Glossary = Glossary;
module.exports.save = save;
// 4. Import the models into any modules that need them
