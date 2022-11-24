import React from "react";

const WordBank = ({wordBank}) => {
  //console.log('this is wordBank inside wordBank', (wordBank));
  return (
    <div>
      {wordBank.map((word, index) => {
        return <li key={index}><b>{word.word + ': '}</b> {word.def + ' '}
          <button>Remove</button>
        </li>
      })}
    </div>
  );
};

export default WordBank;