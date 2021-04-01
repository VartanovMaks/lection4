import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  const firstName=React.useRef();
  const lastName=React.useRef();
  const email=React.useRef();
  const age=React.useRef();
  const password=React.useRef();
  
  const onSubmit = (e)=>{
    e.preventDefault();

    alert(JSON.stringify({
      firstName:firstName.current.value, 
      lastName:lastName.current.value, 
      email:email.current.value, 
      age:age.current.value, 
      password:password.current.value,
    }, null, 2));
  
// очищаем поля ввода
    firstName.current.value=''; 
    lastName.current.value=''; 
    email.current.value=''; 
    age.current.value='';
    password.current.value='';
  }
  return (
    <div className="App">
      <h1> This is input!</h1>
      <form onSubmit={onSubmit}>
          <input ref={firstName} type='text' name='firstName' placeholder='enter your first name'/>
          <br />
          <br />
          <input ref={lastName}type='text' name='lastName' placeholder='enter your last name' />
          <br />
          <br />
          <input ref={email}type='email' name='email' placeholder='enter your email' />
          <br />
          <br />
          <input ref={age}type='number' name='age' placeholder='enter your age'/>
          <br />
          <br />
          <input ref={password}type='password' name='pass' placeholder='enter your password'/>
          <br />
          <br />
          <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
