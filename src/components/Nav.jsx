import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

const Nav = () => {
    const [nav,setNav] = useState(true)

    function handleNav(){
        setNav(!nav)
    }
  return (
    <div className=' flex items-center justify-between h-24 w-max-[1240px] mx-auto text-white w-full p-4'>
        <h1 className='text-green-300 w-full text-6xl font-bold lg:pl-16 md:pl-8 ' style={{ textShadow: "0 0 1px #39ff14, 0 0 0px #39ff14, 0 0 4px #39ff14" }}> Portfolio. </h1>
        <ul className={nav? 'hidden md:flex': "hidden"}>
            <li className='p-4'><a href="#Home">Home</a></li>
            <li className='p-4'><a href="#Experience">Experience</a> </li>
            <li className='p-4'><a href="#Projects">Projects</a></li>
            <li className='p-4'><a href="#Skills">Skills</a></li>
            <li className='p-4'><a href="#Contact">Contact</a></li>
        </ul>
        <div className={nav?" block md:hidden": "block"} onClick={handleNav} >
            {!nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
        </div>
        <div className={!nav ? " fixed left-0 top-0 pt-4 h-full lg:w-[30%] md:w-[45%] w-[60%] border-r border-r-gray-500 bg-[#000300] ease-in-out duration-300" : "fixed left-[-100%] ease-out duration-100"}>
            <h1 className='text-green-300 w-full text-6xl font-bold pl-4'> KBS </h1>
            <ul className='p-4'>
                <li className='p-4 border-b border-b-gray-700 ' onClick={handleNav}><a href="#Home">Home</a></li>
                <li className='p-4 border-b border-b-gray-700' onClick={handleNav}><a href="#Experience">Experience</a></li>
                <li className='p-4 border-b border-b-gray-700' onClick={handleNav}><a href="#Projects">Projects</a></li>
                <li className='p-4 border-b border-b-gray-700' onClick={handleNav}><a href="#Skills">Skills</a></li>
                <li className='p-4' onClick={handleNav}><a href="#Contact">Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Nav