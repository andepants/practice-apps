import React, { useEffect, useState } from 'react';
import Search from '../components/Search.jsx';
import axios from 'axios';
import WordBank from '../components/WordBank.jsx';
import AddWord from '../components/AddWord.jsx';
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';

let exGlossary = [
  {word: 'avocado', def: 'a delicious healthy treat'},
  {word: 'scrumptios', def: 'something delicious'},
  {word: 'graze', def: 'to raid the pantry over a long period of time'}
]

const App = () => {

  const [wordBank, setWordBank] = useState(exGlossary);
  const [filteredWordBank, setfilteredWordBank] = useState(wordBank);

  useEffect(() => {
    getAllWords();
  }, [])

  const getAllWords = () => {
    axios.get('/words')
      .then(res => {
        //console.log(res.data);
        setWordBank(res.data);
        setfilteredWordBank(res.data);
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
      getAllWords();
    }).catch(error => {
       console.log('(App) error in post request', error);
    })
  }

  const deleteWord = (deleteWord) => {
    console.log('word will be deleted: ', deleteWord._id);
    axios.delete('/words', {
      _id: deleteWord._id
    }).then(response => {
        console.log('we got the response in delete', response);
        getAllWords();
      }).catch(error => {
        console.log('we got an error in delete', error);
      })
  }

  const editWord = (word1) => {
    const newDef = window.prompt('NEW DEFINITION')
    axios.patch('/words', {
      def: newDef,
      word: word1.word,
      __v: word1.__v,
      _id: word1._id
    }).then(response => {
      console.log('successful edit', response);
      getAllWords();
    }).catch(error => {
      console.log('we did not edit correctly', error);
    })
  }

  const filterGlossary = (input) => {
    let filteredGlossary = [];
    for (let i = 0; i < wordBank.length; i++) {
      if (wordBank[i].word.includes(input)) {
        filteredGlossary.push(wordBank[i]);
      }
    }
    setfilteredWordBank(filteredGlossary);
  }


  return (
    <div>
      <h1>Glossary</h1>
      <h6>Search Glossary</h6>
      <Search filterGlossary={filterGlossary}/>
      <br></br>
      <h6>Add New Word</h6>
      <AddWord postAddWord={postAddWord}/>
      <WordBank
        wordBank={wordBank}
        deleteWord={deleteWord}
        editWord={editWord}
        filteredWordBank={filteredWordBank}
        />
    </div>
  );
}

export default App;