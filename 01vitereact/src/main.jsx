import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// react element by programer . it will not work
// const reactElement ={
//   type : 'a',
//   props :{

//       href : "https://google.com",
//       target : "_blank"
//   },
//   children : "Click me to visit google"
// }

const newElement = "i am happy"

//react element creation according to react format
const reactElement = React.createElement(
  'a',
  {
    href:'https://google.com' , target : "_blank"
  } ,
  'click me to visti google'
  , newElement // ---> evaluated expression

)


const anotherElement = (
  <a href="https://www.google.com" target="_blank">visit google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
    // <App />

    // anotherElement
    reactElement
)
