const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
main().catch(err => console.log('mongo error', err));

async function main() {
  await mongoose.connect('mongodb://localhost:3000/test');
}

// 2. Set up any schema and models needed by the app
const glossarySchema = new mongoose.Schema({
  word: String,
  def: String
});

const Glossary = mongoose.model('Glossary', glossarySchema);
const avo = new Glossary({word: 'avocado', def: 'a delicious healthy treat'})

// 3. Export the models
export default Glossary;

// 4. Import the models into any modules that need them
