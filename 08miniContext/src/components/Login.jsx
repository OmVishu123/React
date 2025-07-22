import React, {useState , useContext} from 'react'
import UserContext from '../context/UserContext';
import 'animate.css';
function Login(){
    const [username,setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)  // accessing the setUser using useContext

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username,password}) // pass data to the userContext
    }
    return(
        <div className='flex flex-col justify-center items-center bg-gradient-to-r from-green-700 to-black h-70 w-100 rounded-xl shadow-xl animate__animated animate__bounce animate__faster'>
            <h2 className='text-3xl m-4 font-bold text-white animate__animated animate__fadeIn animate__slower'>Login</h2>
            <input type="text" className='m-4 w-80 p-2 border border-gray-300 rounded hover:border-green-500 animate__animated animate__bounce animate__faster' placeholder='username' value={username} onChange={(e)=>{
                setUsername(e.target.value)
            }} />
            <input type="password" className='m-4 w-80 p-2 border border-white-700 rounded hover:border-green-500  animate__animated animate__bounce animate__faster' placeholder='password' value={password} onChange={(e)=>{
                setPassword(e.target.value)
            }}/>
            <button className='w-80 m-4 p-2 bg-gray-600 hover:border-green-600 text-white font-bold rounded hover:from-black hover:to-green-700 animate__animated animate__bounce animate__faster' onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export default Login;