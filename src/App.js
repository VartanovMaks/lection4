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
    // можем вставить очистку формы после заполнения
    setUserData({
      firstName:'',
    lastName:'',
    email:'',
    age:'',
    pass:'',
    })
  }
  
  const updateUserData=(e)=>{
    const {target:{value, name} } = e
    if(name==='firstName' && value.split(' ').length > 1){
      setUserData({...userData,[name]:value, lastName:''})

      return
    }
    //Здесь можно сделать проверки данных
    if (name === 'age' && Number(value) >= 99){
      return
    }

    setUserData({...userData,[name]:value})
  }
  
  return (
    <div className="App">
      <h1> This is input!</h1>            {/* e.target.value !!*/}
          <input 
            value={userData.firstName} 
            onChange={updateUserData} 
            type='text' 
            name='firstName' 
            placeholder='enter your first name'
          />
          <br />                              
          <br />
          <input 
            value={userData.lastName} 
            onChange={updateUserData} 
            type='text' 
            name='lastName' 
            placeholder='enter your last name' 
          />
          <br />
          <br />
          <input 
            value={userData.email} 
            onChange={updateUserData} 
            type='email' 
            name='email' 
            placeholder='enter your email' 
          />
          <br />
          <br />
          <input 
            value={userData.age} 
            onChange={updateUserData} 
            type='number' 
            name='age' 
            placeholder='enter your age'/>
          <br />
          <br />
          <input 
            value={userData.pass} 
            onChange={updateUserData} 
            type='password' 
            name='pass' 
            placeholder='enter your password'
          />
          <br />
          <br />
          <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
