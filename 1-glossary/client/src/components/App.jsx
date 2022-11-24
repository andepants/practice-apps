import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WordBank from '../components/WordBank.jsx'
import AddWord from '../components/AddWord.jsx'

let exGlossary = [
  {word: 'avocado', def: 'a delicious healthy treat'},
  {word: 'scrumptios', def: 'something delicious'},
  {word: 'graze', def: 'to raid the pantry over a long period of time'}
]

const App = () => {

  const [wordBank, setWordBank] = useState(exGlossary);

  useEffect(() => {
    getAllWords();
  }, [])

  const getAllWords = () => {
    axios.get('/words')
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log('err', err);
      })
  }

  const postAddWord = (newWord, newDef) => {
    console.log('inside postAddWord', newWord, newDef)
    axios.post('/words', {
      word: newWord,
      def: newDef
    }).then(response => {
      console.log('(App) sent over post request', response);
    }).catch(error => {
       console.log('(App) error in post request', error);
    })
  }


  return (
    <div>
      <h1>Glossary</h1>
      <AddWord postAddWord={postAddWord}/>
      <WordBank wordBank={wordBank}/>
    </div>
    //document.getElementById("root")
  );
}

export default App;