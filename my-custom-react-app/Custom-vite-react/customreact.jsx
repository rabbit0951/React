import React from "react";
import ReactDOM from "react-dom"
import App from "./src/App.jsx"
  
function Hello(){
return(<h1>Hello from Hello function from customreact.jsx</h1>)
} 
const custom_element = React.createElement("h1",null,"hello from custom_element from  customreact.jsx ")
const a = <h1> Hello world </h1>

const root = ReactDOM.createRoot(document.getElementById("custom-react"))
.render(
   
// a    
custom_element
// Hello()
//    <>
//    <App/>
//    </>

)