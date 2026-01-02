'use client'
import React, { useState, useEffect } from "react";

const Nav = () => {

     const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      setTime(`${hours} ${minutes}`);
    };

    updateTime(); // set immediately
    const interval = setInterval(updateTime, 1000); // update every second

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className='w-full h-fit fixed top-0 left-0 flex z-50 px-7 py-6 justify-between'>
        <p className='Font2 text-[#4A2214] text-[1.2rem]'>LUSANO</p>
        <p className='Font2 text-[#4A2214] text-[1.2rem]'><span className="text-[#B4A49B] mr-3">{time}</span> Los Angeles</p>
    </div>
  )
}

export default Nav