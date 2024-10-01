import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const CurrencyInfo = useCurrencyInfo("bat")
  console.log(CurrencyInfo)


    return (
     <h1>Hello</h1>
    )
  }

export default App
