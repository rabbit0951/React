import { useState } from 'react'
import UserContextProvider from "./context/UserContextProvider.jsx"
import Card from "../components/Card.jsx"
function App() {


  return (
  <UserContextProvider>
   <Card/>
  </UserContextProvider>
  )
}

export default App
