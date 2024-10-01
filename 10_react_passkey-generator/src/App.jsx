import { useCallback, useEffect, useState,useRef } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState(0);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [length, setLength] = useState(10);
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABBCDEFGHIJKLMNOPQRSTUVWXYZ";
    let char = "!@#$%^&*()_+~";
    let num = "1234567890";
    if (number == true) str += num;
    if (character == true) str += char;
    for (let i = 0; i <= length; i++) {
      const index = Math.floor(Math.random() * str.length + 1);
      pass += str[index - 1];
      if (i == length) {
        setPassword(pass);
      }
    }
  }, [length, number, character]);

  useEffect(() => {
    generatePassword();
  }, [length, number, character]);

  const  passwordRef = useRef(null)
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
    
  },[password])

 

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          Copy
        </button>
      </div>
       
     
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={number}
            id="numberInput"
            onChange={() => {
              setNumber((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={character}
            id="characterInput"
            onChange={() => {
              setCharacter((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
