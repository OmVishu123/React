import React from "react"
import Chai from "./chai"




//custom element
// will not work due to syntax
// const reactElement = {
//     type:'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click to visit google'
// }


// correct syntax

const reactElement = React.createElement(
  "a",
  {
    href:'https://Instagram.com',
    target: '_blank'
  },
  'click to open Instagram'
)


function App() {
  const username = "Charizard"
  return (
    <>
    <Chai/>
    <h1>Chai aur code {username}</h1>
    <p>Testing para</p>
    </>

    


    // reactElement

    // <div>
    //   <h1>This is the first tag</h1>
    //   <Chai/>
    //   reactElement
    // </div>
    

  )
}

export default App
