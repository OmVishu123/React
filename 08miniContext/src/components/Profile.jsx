import React,{useContext} from 'react'
import 'animate.css';
import UserContext from '../context/UserContext';
function Profile() {
    const {user} = useContext(UserContext)

    if(!user) return (
        <div className='bg-red-500 m-4 p-4 rounded-xl text-white text-xl text-center border animate__animated animate__bounce animate__faster'>
            Please Login!
        </div>
    )
    return <div   style={{ animationDuration: '0.5s' }} className='bg-gradient-to-r from-black to-green-700 m-4 p-4 rounded-xl text-white text-xl text-center  animate__animated animate__fadeIn animate__slower'>Welcome {user.username} </div>
}
export default Profile;