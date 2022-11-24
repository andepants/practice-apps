import React from "react";
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';

const WordBank = ({wordBank, deleteWord, editWord, filteredWordBank}) => {
  //console.log('this is wordBank inside wordBank', (wordBank));
  return (
    <div>
      {filteredWordBank.map((word, index) => {
        return <li key={index}><b>{word.word + ': '}</b> {word.def + ' '}
          <button onClick={() => deleteWord(word)}>Remove</button>
          <button onClick={() => editWord(word)}>Edit</button>
        </li>
      })}
    </div>
  );
};

export default WordBank;