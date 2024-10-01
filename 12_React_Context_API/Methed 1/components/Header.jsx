import React,{useContext} from 'react'
import UserContext from '../src/context/UserContext.js'

function Header() {
    const {userData}= useContext(UserContext)
  return (
    <h1>
      I am {userData?.name} and iam {userData?.age} years old
    </h1>
  )
}

export default Header
