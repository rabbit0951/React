import { useState } from "react";
import "./App.css"

function App() {
let [value,setValue] = useState(0);
function Add(){setValue(++value);}
function Sub(){if(value!=0) setValue(--value);}
function Reset(){setValue(0);}



  return (
    <div className="container">
    <h1 className="counter-screen">Counter Value : {value} </h1>
    <div className="button-container">
    <button onClick={Add}>Add value</button>
    <button onClick={Sub}>Sub value</button>
    <button onClick={Reset}>Reset</button>
    </div>
 
    
    </div>
  )
}

export default App
