import { useState,useCallback,useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length,setLength]=useState(8);
  const [numAllow,setNumAllow]=useState(false);
  const [charAllow,setCharAllow]=useState(false);
  const [password,setPassword] = useState("");

  //useRef Hook
  const passwordRef = useRef(null);
  const passwordGenerator= useCallback(()=>{
    let pass = "";
    let str = " ABCDEFGHIKLMNOPQRSTVXYZabcdefghiklmnopqrstvxyz";

    if(numAllow) str += "0123456789"
    if(charAllow) str += "!@#$%^&*(){}?><"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }

    setPassword(pass)
  },[length,numAllow,charAllow,setPassword])

  const copyPassToClickBoard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])

useEffect(()=>{
  passwordGenerator()
},[length,numAllow,charAllow,passwordGenerator])


  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-orange-500'>
    <h1 className='text-center text-white my-3'>Password Generator</h1>

    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text"
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder='Password'
      readOnly
      ref={passwordRef} />
      <button
       className='outline-none bg-blue-700 text-white px-3 py-0,5 shrink-0'
       onClick={copyPassToClickBoard}
      >copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=> {setLength(e.target.value)}}
        />
        <label>Length:{length}</label>
      </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numAllow}
          id='numberInput'
          onChange={()=>{
            setNumAllow((prev)=> !prev)
          }} />
          <label htmlFor="numberInput">Numbers</label>

        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={charAllow}
          id='charInput'
          onChange={()=>{
            setCharAllow((prev)=> !prev)
          }} />
          <label htmlFor="charInput">Character</label>

        </div>

    </div>
    </div>
    
    </>
  )
}

export default App
