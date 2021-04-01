import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  const firstName=React.useRef();
  const onSubmit = (e)=>{
    e.preventDefault();
    //console.log(e.target.elements);
    console.log({firstName});
    firstName.current.value='';
    firstName.current.focus();
    //firstName.current.style.background='red';
    
    //const { 
          // target: [
          //   {value:firstName}, 
          //   {value:lastName}, 
          //   {value:email}, 
          //   {value:age}, 
          //   {value:pass},
          // ]}=e;
      // e.target.elements !!
      // target: {
      // elements:{
        // firstName, 
        // email, 
        // lastName, 
        // age, 
        // pass,
        // }
      // }  
    // }=e;

    // alert(JSON.stringify({
      // firstName:firstName.value, lastName:lastName.value, email:email.value, age:age.value, pass:pass.value
    // }, null, 2));
  }


  return (
    <div className="App">
      <h1> This is input!</h1>
      <form onSubmit={onSubmit}>
          <input ref={firstName} type='text' name='firstName' placeholder='enter your first name'/>
          <br />
          <br />
          <input type='text' name='lastName' placeholder='enter your last name' />
          <br />
          <br />
          <input type='email' name='email' placeholder='enter your email' />
          <br />
          <br />
          <input type='number' name='age' placeholder='enter your age'/>
          <br />
          <br />
          <input type='password' name='pass' placeholder='enter your password'/>
          <br />
          <br />
          <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
