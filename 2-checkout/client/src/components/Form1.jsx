import React from 'react';

const Form1 = ({handleSubmit, handleChange, inputs}) => {

  return (
    <form onSubmit={handleSubmit}>
      <label>Name
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
      </label><br></br>
      <label>Email
        <input
          type="text"
          name="email"
          placeholder="example@gmail.com"
          onChange={handleChange}
        />
      </label><br></br>
      <label>Password
        <input
          type="text"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          />
      </label><br></br>
      <input type="submit" value="Submit"/>
    </form>
  )
}

export default Form1;