import React, {useState} from 'react';
import './App.css';

function App() {
  // const [firstName,setFirstName]=useState('');
  // const [lastName,setLastName]=useState('');
  // const [email,setEmail]=useState('');
  // const [age,setAge]=useState('');
  // const [pass,setPass]=useState('');
  // вместо кучи отдельных стейтов сделаем один объект

  const [userData, setUserData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    age:'',
    pass:'',
  })


  const handleSubmit = ()=>{
    alert(JSON.stringify({userData},null, 2))
  }

  const updateUserData=(field, value)=>{
    setUserData({...userData,[field]:value})
  }
  
  return (
    <div className="App">
      <h1> This is input!</h1>            {/* e.target.value !!*/}
          <input value={userData.firstName} onChange={({target:{value}})=> updateUserData('firstName', value)} type='text' name='firstName' placeholder='enter your first name'/>
          <br />                              
          <br />
          <input value={userData.lastName} onChange={({target:{value}})=> updateUserData('lastName', value)} type='text' name='lastName' placeholder='enter your last name' />
          <br />
          <br />
          <input value={userData.email} onChange={({target:{value}})=> updateUserData('email', value)} type='email' name='email' placeholder='enter your email' />
          <br />
          <br />
          <input value={userData.age} onChange={({target:{value}})=> updateUserData('age', value)} type='number' name='age' placeholder='enter your age'/>
          <br />
          <br />
          <input value={userData.pass} onChange={({target:{value}})=> updateUserData('pass', value)} type='password' name='pass' placeholder='enter your password'/>
          <br />
          <br />
          <button onClick={handleSubmit}>Submit</button>
          {/* <input value={firstName} onChange={({target:{value}})=> setFirstName(value)} type='text' name='firstName' placeholder='enter your first name'/>
          <br />                              
          <br />
          <input value={lastName} onChange={({target:{value}})=> setLastName(value)} type='text' name='lastName' placeholder='enter your last name' />
          <br />
          <br />
          <input value={email} onChange={({target:{value}})=> setEmail(value)} type='email' name='email' placeholder='enter your email' />
          <br />
          <br />
          <input value={age} onChange={({target:{value}})=> setAge(value)} type='number' name='age' placeholder='enter your age'/>
          <br />
          <br />
          <input value={pass} onChange={({target:{value}})=> setPass(value)} type='password' name='pass' placeholder='enter your password'/>
          <br />
          <br />
          <button onClick={handleSubmit}>Submit</button> */}
    </div>
  );
}

export default App;
