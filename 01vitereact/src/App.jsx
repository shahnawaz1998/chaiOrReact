import { useState } from 'react'

import './App.css'
import Chai from './chai'


function App() {
  const [count, setCount] = useState(0);
  
  function adValue(){
    if(count<20){
      setCount(count + 1);
    }
  };

  function removeValue(){
    if(count>0){
      setCount(count-1);
    }
  }

  return (
    <>
    <h2>Count {count}</h2>
    <button onClick={adValue} >Add</button>
    <button onClick={removeValue} >Remove</button>
    </>
  )
}

export default App
