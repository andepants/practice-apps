import React from "react";

const AddWord = ({ postAddWord }) => {
  return (
    <div>
      <input
        id='word'
        type='text'
        placeholder='New Word'
      />
      <br></br>
      <input
        id='def'
        type='text'
        placeholder='New Word Definition'
      />
      <br></br>
      <button
        onClick={() => postAddWord(document.getElementById('word').value, document.getElementById('def').value)}>Add Word + Def
      </button>
    </div>
  );
};

export default AddWord;