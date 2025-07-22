import React from "react";
import { useParams } from "react-router-dom";
function User(){
    const {userid} = useParams()
    return(


        <div className=" flex flex-col my-4  justify-center text-center text-white rounded-lg align-middle bg-gradient-to-r from-blue-700 to-pink-700 h-20 w-full text-2xl">
            User: {userid}
        </div>
   
    )
}
export default User;