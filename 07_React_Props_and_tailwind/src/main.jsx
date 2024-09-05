import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Card from './Card.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Card username="Garv"/>
    <Card username="Hello" arry={[12,12,23,34,33,1,1,1,11,1]}/>
  </StrictMode>,
)
