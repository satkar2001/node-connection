import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const[username,setusername]= useState('')
      const[password,setpassword]= useState('')
  function login(event){
       event.preventDefault()
       var user={
         username:username,
         password:password
       }
       axios.post('/login',user)
       .then(res=>{alert(res.data)})
       .catch(err=>{console.log(err)})
  }
  return (
    <div className="App">
      <h1>hfiifhos</h1>
      <form action="">
        <input type="text " placeholder='username' value={username}
        onChange={(e)=>{setusername(e.target.value)}} />
        <br />
        <input type="text " placeholder='password' value={password}
        onChange={(e)=>{setpassword(e.target.value)}} />
        <br />
        <button onClick={login}>submit</button>
      </form>
    </div>
  );
}

export default App;
