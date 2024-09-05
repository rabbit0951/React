import { useCallback, useState } from 'react'
import "./App.css"

function App() {
  const [length, setLength] = useState(0)
  const [num,setNum] = useState(false)
  const [char,setChar] = useState(false)
  
  

  return (
   <div className='flex justify-center items-center'>
   <h1 className='text-3xl text-red-700 fond-bold underline  '
   >Hello</h1>
   </div>
  )
}

export default App
