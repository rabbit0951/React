import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoContextProvider } from './context/todoContext'

function App() {
  const [todos, setTodos] = useState([])
  const addTodo=(todo)=>{return null}
  const deleteTodo=(id)=>{return null}
  const updatedTodo=(id,todo)=>{return null}
  const toggleComplete=(id)=>{return null}

console.log(TodoContextProvider)
  return (
    <TodoContextProvider value={{todos,toggleComplete,deleteTodo,addTodo,updatedTodo}}>
    <h1 className='underline text-red-700 text-3xl line-through'>Hello world</h1>
    </TodoContextProvider>
  )
}

export default App
