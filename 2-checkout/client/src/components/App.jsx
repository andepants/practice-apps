import React, { useState } from 'react';
import Form1 from '../components/Form1.jsx';
import axios from 'axios';

const App = () => {

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const email = event.target.email;
    const password = event.target.password;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value, [email]: value, [password]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('this is the event on submit', event);
    console.log('the inputs are :', inputs);
  }

  const postSubmission = () => {
    axios.post('/form', {
      inputs
    }).then(response => {
      console.log('APP.jsx POST success response', response);
    }).catch(error => {
      console.log('APP.jsx POST ERROR :', error)
    })
  }

  return (
    <div>
      <p>Hello, World!</p>
      <p>
        <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
      </p>
      <Form1 handleSubmit={handleSubmit} handleChange={handleChange} inputs={inputs}/>
    </div>
  )
};

export default App;