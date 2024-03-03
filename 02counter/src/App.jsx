import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
function App() {

    // let counter = 5
    let [counter , setCounter] = useState(0)
    const addValue = () => {
      // if(counter == 20){setCounter(counter)} 
      // else{setCounter(counter+1)}


      // setCounter(counter == 20 ? counter : counter + 1);


      for(let i = 0; i < 1; i++){
        if(counter != 20){
            counter++;
        }
        setCounter(counter);
    }
    

    }
    const removeValue = () => {
       // if(counter == 0){setCounter(0)} 
      // else{setCounter(counter-1)}

      // setCounter(counter == 0 ? counter : counter - 1);

      for(let i = 0; i < 1; i++){
        if(counter!= 0){
            counter--;
        }
        setCounter(counter);
    }

    }
  return (
    <>
      <h1>Ayan Maity</h1>
      <h2>Counter value : {counter}</h2>
      <button
      onClick={addValue}>Add Value</button>
      <br />
      <button
      onClick={removeValue}>Decrease Value</button>
    </>
  )
}

export default App
