import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0);
  let myOBj = {
    userName:'Shah',
    lastName:'Shk'
  }
  let Arr = [2,3,4]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4' >Tailwind test</h1>
      <Card name="Shahnaw" btnText="Click me" detail={myOBj}></Card>
      <Card name="SHK" btnText="View"></Card>

    </>
  )
}

export default App
