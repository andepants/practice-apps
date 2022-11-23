import React from "react";

const AddWord = () => {
  return (
    <div>
      <input
        type='text'
      />
      <button
        onClick={() => console.log('addwordd button click')}>Add Word
      </button>
    </div>
  );
};

export default AddWord;