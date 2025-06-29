import React from "react";


function Card({username="Unknown User"}) {
    console.log(username);
     // Default value if username is not provided
   
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg'>
     <h1 className="text-4xl font-bold bg-gradient-to-r from-black to-blue-400 rounded-lg p-3">Tailwind Tutorial</h1>
    <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 p-4 m-4">
    <div>
    <img className="size-48 shadow-xl rounded-md" alt="loading image" src="https://www.pexels.com/photo/serene-night-sky-over-countryside-with-stars-31632909/" />
    </div>
  <div className="flex flex-col md:items-start ">
    <span className="text-2xl font-medium">{username}</span> 

    <span className="font-medium text-sky-500">The Anti-Patterns</span>
    <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div>
</div>
  );
}

export default Card;
