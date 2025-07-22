import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
export default function Github() {

    const data = useLoaderData()
    // const [data ,setData] = useState("")
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/OmVishu123')
    //     .then(res=>res.json())
    //     .then(data =>{
    //         console.log(data);
            
    //         setData(data)

    //     })
    // },[])
    return(
        <div className="flex flex-col p-4 justify-center  m-4 bg-gray-600  text-black text-2xl bg-gradient-to-r from-blue-500 to-white rounded-lg shadow-xl">
       <div className="flex items-center justify-center m-4 ">
        <img src={data.avatar_url} className="h-30 w-30  rounded-full" alt="Git Picture" />
        </div>
         Github Followers: {data.followers}

        </div>
    )
}


export const githubInfoLoader = async() =>{
      const res = await fetch('https://api.github.com/users/OmVishu123')
      return res.json()
}