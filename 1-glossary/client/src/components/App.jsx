import React, { useEffect } from 'react';
import axios from 'axios';


const App = () => {

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
      <p>Hello, gggWorld!</p>
    </div>
    //document.getElementById("root")
  );
}

export default App;