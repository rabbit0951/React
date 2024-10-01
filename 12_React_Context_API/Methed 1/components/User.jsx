import React, { useContext ,useState} from 'react'
import UserContext from '../src/context/UserContext.js'
import Header from './Header.jsx';

function User() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [city, setCity] = useState("");
    const {setuserData} = useContext(UserContext);
    const [submit,setsubmit] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setsubmit(true)
        setuserData({name,age,city})

    }
    
  return (
       <>
       {submit==true? <Header/>: null }
      <input type="text" 
      placeholder={name} 
      onChange={(e)=>setName(e.target.value)}/>
    
    
      <input type="text" 
      placeholder={age} 
      onChange={(e)=>setAge(e.target.value)}/>
   

      <input type="text" 
      placeholder={city} 
      onChange={(e)=>setCity(e.target.value)}/>
      <button onClick={(e)=>handleSubmit(e)}>Submit</button>
</>
  )
}

export default User
