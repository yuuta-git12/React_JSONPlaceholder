import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  
  const onClickUsers = () =>{
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res);
      // console.log(res.data[0]);
      }).catch((err) => console.log(err));
  };

  const onClickUsers1 = () => {
    axios.get("https://jsonplaceholder.typicode.com/users/3").then((res) => {
      console.log(res);
      }).catch((err) => console.log(err));
  };

  return (
    <>
      <div className='APP'>
        <button onClick={onClickUsers}>users</button>
        <button onClick={onClickUsers1}>id=1のusers</button>
      </div>
        
    </>
  )
}

export default App
