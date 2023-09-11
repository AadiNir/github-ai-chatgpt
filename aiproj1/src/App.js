import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import React from 'react';
import axios from 'axios';



function App() {

  const [ans,setans]=useState('');
  const [ques,setques]=useState('');
  const enter=async(e)=>{
    e.preventDefault();
    console.log(ques)
   
    try{
      const body = JSON.stringify({
        message:ques,
        name:"aadithya"
      });
      const config={
        headers:{
          "Content-Type":"application/json"
        }
      }
      const response = await axios.post('http://localhost:5000/completions',body,config);
      setans(response.data.choices[0].message.content);
    }
    catch(err){
      console.log(err);
    }


  }

  return (
    <form onSubmit={enter}>
      <input onChange={(e)=>setques(e.target.value)}></input>
      <button type='submit'>please</button>
      <h1>{ans}</h1>
    </form>
  );
}

export default App;
