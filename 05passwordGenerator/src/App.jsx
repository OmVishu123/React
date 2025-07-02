import { useState ,useEffect, useRef} from 'react'
import { useCallback } from 'react'
import './App.css'

function App() {
 let [count,counter] = useState(8)
  let [numAllowed, setNumAllowed] = useState(false)
  let [charAllowed, setCharAllowed] = useState(false)
  let [password , setPassword] = useState()

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed){ str += "0123456789"
      console.log("Num On");
      
    }
    if(charAllowed) {str+= "~!@#$%^&*?"
    console.log("char On");}

    for (let i = 1; i <=count; i++) {
      let char = str.charAt(Math.floor(Math.random()*str.length ))
        pass += char
    }
    setPassword(pass)
  }
    ,[count, numAllowed,charAllowed , setPassword]
);
// will execute on change in any given dependencies
useEffect(()=>{
  passwordGenerator()
},[count, numAllowed,charAllowed,passwordGenerator])


// ref hook
const passwordRef = useRef(null)

// copy to clipboard

const copyPasswordToClipBoard = useCallback(()=>{
  // indication to the copied text
  passwordRef.current?.select()
  // can also specify the range
  passwordRef.current?.setSelectionRange(0,32)
  // copy to clipboard
  window.navigator.clipboard.writeText(password)
},[password])

  return (
    <>
      <h1 className='text-3xl text-center m-4'>Password Generator</h1>
      <div className='flex flex-col bg-gradient-to-r from-blue-800 to-gray-400 p-5 rounded-lg shadow-xl w-200'>
      <form action="">
        <input id='password' 
        type="text"  
        className='border border-white rounded bg-white w-80 h-10 text-yellow-400' value={password} 
        placeholder='password' 
        readOnly
        ref={passwordRef}
         />
        <button type='button' className='bg-blue-500 text-white rounded-tr rounded-br px-4'
        onClick={copyPasswordToClipBoard}
         >Copy</button>
        <div className='flex justify-center p-5'>

          <input 
          type="range" 
          min="4" 
          max="32" 
          step="1" 
          name="len" 
          id="len" 
          value={count} 
          onChange={(e)=>{counter(e.target.value)}}/>

          <label htmlFor="" 
          className='px-3 text-yellow-500  text-xl' >Length ({count})</label>

          <input 
          type="checkbox" 
          name="number" 
          id="numbers" 
          defaultChecked={numAllowed}
          onClick={()=>{setNumAllowed((prev)=>!prev)}}/>

          <label htmlFor="numbers" className='px-3 text-yellow-500  text-xl'>Numbers</label>
          <input 
          type="checkbox" 
          name="char" 
          id="chars" 
          defaultChecked={charAllowed}
          onClick={()=>{setCharAllowed((prev)=>!prev)}}/>
          <label htmlFor="chars" className='px-3 text-yellow-500  text-xl' >Characters</label>

        </div>
      </form>
    </div>
    </>
  )
}

export default App
