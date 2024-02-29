
import Chai  from "./chai"

const username = "i am happy"

function App() {

  return (
  // <>      ---> called as fragment 
  <>
  {/* varible should be written in curly braces and {username} ---> is called as evaluated expression(interview question) */}
  
  <h1>Ayan Maity(vite){username}</h1>  
   <Chai/>
   </>
  )
}

export default App
