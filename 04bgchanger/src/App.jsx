import { useState } from "react"

function App() {
  const [color, setColor] = useState("black")

  return (
   <div className="w-full h-screen duration-200"
   style={{backgroundColor : color}}>
      <div className="flex fixed flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center shadow-lg gap-3  bg-white py-2 px-3 rounded-3xl">
          <button 
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
          style={{backgroundColor:"red"}}
          >Red</button>
          <button 
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
          style={{backgroundColor:"green"}}
          >Green</button>
          <button 
          onClick={() => setColor("yellowgreen")}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
          style={{backgroundColor:"yellowgreen"}}
          >Yellowgreen</button>
          <button 
          onClick={() => setColor("orange")}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
          style={{backgroundColor:"orange"}}
          >Orange</button>
          <button 
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
          style={{backgroundColor:"blue"}}
          >Blue</button>
        </div>

      </div>
   </div>
  )
}

export default App
