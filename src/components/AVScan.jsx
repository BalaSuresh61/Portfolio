import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const AVScan = ({ isOpen, onClose , Topic, Description, Tools, myRole}) => {
    if (!isOpen) {
        return null; 
    }
    
    return (
        <div className='fixed inset-0 bg-transparent flex  items-center justify-center z-50'>
            <button onClick={onClose} 
            className='fixed top-0 right-0 p-3 bg-black text-white hover:text-red-500 hover:bg-gray-100 rounded-full transition-all duration-300 z-50 
                    
                    // Base (Mobile): Push 1rem down and 1rem left
                    translate-x-[-2rem] translate-y-[1rem] 
                    
                    // Small Screen (sm): Push 2rem down and 2rem left
                    sm:translate-x-[-6rem] sm:translate-y-[4rem] 

                    // Mideum Screen (sm): Push 2rem down and 2rem left
                    md:translate-x-[-12rem] md:translate-y-[6rem] 
                    
                    // Large Screen (lg): Push 4rem down and 4rem left
                    lg:translate-x-[-20rem] lg:translate-y-[9rem]'                
                    aria-label="Close"> 
                <AiOutlineClose size={'24'} /> </button>
            <div className=' bg-white p-8 rounded-lg lg:w-[60%] md:w-[70%] sm:w-[80%] w-[90%] overflow-scroll no-scrollbar sm:h-fit h-full  text-black text-xl'>
            
                <h2 className='text-2xl font-bold text-center p-3'>{Topic}</h2>
                <div>
                    <h1 className='font-bold py-2'>Discription:</h1>
                    <p className=''>&nbsp; &nbsp; &nbsp; &nbsp;{Description}</p>
                </div>
                <div>
                    <h1 className='font-bold py-2'> Technologies used:</h1>
                    <p className=''>&nbsp; &nbsp; &nbsp; &nbsp;{Tools}</p>
                </div>
                <div>
                    <h1 className='font-bold py-2'> My Role:</h1>
                    <p className=''>&nbsp; &nbsp; &nbsp; &nbsp;{myRole}</p>
                </div>

            </div>
            
        </div>
    );
};

export default AVScan;