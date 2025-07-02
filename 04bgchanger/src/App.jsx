import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
const [bgColor, setBgColor] = useState('#000')

const changeBG = (e)=>{
 const bgClass = e.target.className.split(' ')[0]
  const color = bgClass.split('-')[1]
  setBgColor(color)
}

  return (

    <div className='  h-screen w-screen transition-all duration-300 items-center ' style={{backgroundColor: bgColor}}>
     <div className='flex gap-2 bg-gradient-to-r from-black to-blue-700 p-4 rounded-xl border border-gradient-to-r from-black to-blue-500 absolute bottom-4 left-0 right-0 m-auto w-fit'>
      <button className='bg-red-500' style={{backgroundColor: "red"}} onClick={changeBG}>Red</button>
     <button className='bg-blue-500' style={{backgroundColor: "blue"}} onClick={changeBG}>Blue</button>
     <button className='bg-green-500' style={{backgroundColor: "green"}} onClick={changeBG}>Green</button>
     <button className='bg-yellow-500' style={{backgroundColor: "yellow"}} onClick={changeBG}>Yellow</button>
     <button className='bg-purple-500' style={{backgroundColor: "purple"}} onClick={changeBG}>Purple</button>
     <button className='bg-pink-500' style={{backgroundColor: "pink"}} onClick={changeBG}>Pink</button>
      </div>
    
    </div>

    
    
  )
}

export default App
