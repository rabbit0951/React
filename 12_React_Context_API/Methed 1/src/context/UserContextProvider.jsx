import React, { useState } from 'react'
import UserContext from './UserContext'

function UserContextProvider({children}) {
  const [userData,setuserData] = useState("");  
  console.log(children)
  return (
    <UserContext.Provider value = {{userData,setuserData}} >
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
