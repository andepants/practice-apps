import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WordBank from '../components/WordBank.jsx'

let exGlossary = [
  {word: 'avocado', def: 'a delicious healthy treat'},
  {word: 'scrumptios', def: 'something delicious'},
  {word: 'graze', def: 'to raid the pantry over a long period of time'}
]

const App = () => {

  const [wordBank, setWordBank] = useState(exGlossary);

  useEffect(() => {
    console.log('hello');
    axios.get('/words')
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log('err', err);
      })
  }, [])


  return (
    <div>
      <h1>Glossary</h1>
      <WordBank wordBank={wordBank}/>
    </div>
    //document.getElementById("root")
  );
}

export default App;