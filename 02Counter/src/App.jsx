import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//  useState - change the state of the variable (inside dom)
  let [counter, setCounter] = useState(5)  // returns 2 things -- 1st=>value, 2nd=>method
// let counter = 3
const addValue=()=>{
  if(counter>=20){
    return
  }
  counter +=1
  setCounter(counter)
  console.log("Value added");
}
const subValue=()=>{
  if (counter<=0) {
    return
  }
  counter -=1
  setCounter(counter)
  console.log("Value subtracted");
}
  return (
    <>
    <h1>Counter</h1>
    <h2>Counter Value : {counter}</h2>

    <button onClick={addValue}>Increase {counter}</button>
    <button onClick={subValue}>Decrease {counter}</button>
    <p><i><b>Value restricted between 0 and 20</b></i></p>
    </>
  )
}

export default App
