import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import React from 'react'
// function MyApp(){
//   return(
//     <div>
//       <h1>Custom APP | Chai</h1>
//     </div>
//   )
// }


const anotherUser = 'chai aur react'
const reactElement = React.createElement(
  "a",
  {
    href:'https://Instagram.com',
    target: '_blank'
  },
  'click to open Instagram',
  anotherUser 
)

const anotherElement = React.createElement(
  'table',
  {
    style:{
      border:"2px solid black",
      margin: '2px',
      padding: '2px'
    },
  },
  React.createElement(
    'tbody', null,
    React.createElement(
      'tr', null, 
      React.createElement('td',{style:{border:"2px solid black"}},'1'),
      React.createElement('td',{style:{border:"2px solid black"}},'2')
    ),
    React.createElement(
      'tr', null, 
      React.createElement('td',{style:{border:"2px solid black"}},'3'),
      React.createElement('td',{style:{border:"2px solid black"}},'4')
    )
  )
)
createRoot(document.getElementById('root')).render(
   
anotherElement

)
