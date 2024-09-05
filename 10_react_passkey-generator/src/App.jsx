import { useCallback, useEffect, useState } from 'react'
import "./App.css"

function App() {
  const [password,setPassword] = useState(0)
  const [length, setLength] = useState(10)
  const [number,setNumber] = useState(true)
  const [character,setCharacter] = useState(true)
  
  const generatePassword = useCallback(()=>{
  
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABBCDEFGHIJKLMNOPQRSTUVWXYZ"
    let char ="!@#$%^&*()_+~"
    let num = "1234567890"
   
    if(number==true) str += num;
    if(character==true) str += char;
    console.log(str.length)
    console.log(str[0])

    for(let i = 0 ; i<length;i++){
      const index = Math.floor((Math.random()*str.length) +1)
     
      if(str[index]===undefined){console.log("Hello");}
      pass += str[index-1];
      setPassword(pass); 
    }
  
  
  },[setLength,setNumber,setCharacter])
  
  useEffect(()=>{
    generatePassword()
  },[setLength,setNumber,setCharacter])
// function start(){
//   generatePassword()
// }
  return (
   <div className='flex justify-center items-center'>
   <h1 className='text-3xl text-red-700 fond-bold underline  '
   >{password}</h1>
   {/* <button onClick={start}>start</button> */}
   </div>
  )
}

export default App
