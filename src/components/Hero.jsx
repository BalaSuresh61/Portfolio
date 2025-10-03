import React,{useRef,useEffect} from 'react'
import Typed from "typed.js";
const Hero = () => {
    const el = useRef(null);

    useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["JavaScript", "Node.js", "Nest.js", "Express", "NX"],
      typeSpeed: 40,
      backSpeed: 50,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <div id='Home' className='text-white'>
        <div className="m-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center items-center">
            <h1 className='lg:text-6xl md:text-5xl text-4xl font-extrabold py-2 bg-gradient-to-r from-green-100 to-green-800 bg-clip-text text-transparent'>Bala Suresh.K</h1>
            <p className='lg:text-4xl md:text-3xl text-2xl font-medium'> Software Developer</p>
            <div className='flex text-center justify-center items-center'>
                <p className='lg:text-2xl md:text-xl text-md font-bold p-2'>Experience In <span ref={el} className='text-gray-500 font-bold'></span> </p>
                    
            </div>
            <p className='w-[70%] h-fit font-semibold  text-gray-600 leading-relaxed'>Backend Developer with 2+ years of experience in Node.js and NestJS. I build scalable microservices, payment systems, and event-driven apps, with hands-on experience in AWS & GCP. I focus on writing clean, maintainable code.</p>

        </div>
    </div>
  )
}

export default Hero