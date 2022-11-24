import React from 'react';

const Search = ({filterGlossary}) => {

  return (
    <div>
      <input onChange={(e) => filterGlossary(e.target.value)}/>
    </div>
  );
};

export default Search;