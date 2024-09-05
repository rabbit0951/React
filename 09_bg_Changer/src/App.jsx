import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [color,setColor]=useState("White")


  return (
  <div  className="container" style={{backgroundColor:color}}>
   <div className='button-container'>
   <button style={{backgroundColor:"pink"}} onClick={()=>{setColor("pink")}}>Pink</button>
   <button style={{backgroundColor:"blue"}} onClick={()=>{setColor("blue")}}>Blue</button>
   <button style={{backgroundColor:"green"}} onClick={()=>{setColor("green")}}>Green</button>
   <button style={{backgroundColor:"red"}} onClick={()=>{setColor("red")}}>Red</button>
   <button style={{backgroundColor:"orange"}} onClick={()=>{setColor("orange")}}>Orange</button>
   <button style={{backgroundColor:"grey"}} onClick={()=>{setColor("grey")}}>Grey</button>
    
   </div>
   
  </div>
  )
}

export default App
