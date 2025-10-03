import React from "react";
import {
  AiOutlineSolution,
  AiOutlineProject,
  AiOutlineClockCircle,
  AiOutlineLink,
} from "react-icons/ai";
import { FaLink } from "react-icons/fa";

const Work = () => {
  return (
    <div id="Experience" className=" w-full lg:h-screen h-full rounded-2xl bg-gradient-to-r from-green-900  to-green-800 text-white">
      <div className="md:h-[20%] h-[15%] w-full flex items-center justify-center rounded-2xl">
        <h1 className="text-4xl font-extrabold shadow-xl w-full text-center py-10  mb-6">
          Work Experience
        </h1>
      </div>
      <div className="md:h-[80%] h-full w-[100%] md:flex  lg:justify-evenly md:justify-around flex lg:flex-row flex-col gap-10  items-center  py-10 ">
        <div className="lg:w-[40%] md:w-[60%] w-[85%] text-center py-4  shadow-2xl shadow-green-600 rounded-2xl hover:scale-105 duration-300 ">
          <h1 className="font-bold text-2xl  hover:scale-110 duration-300 hover:text-blue-400">
            <a href="https://www.althisolutions.com/">Althi Solutions</a>
          </h1>
          <div className=" ">
            <div className="flex items-center  pt-12 py-6 md:text-xl border-b border-gray-300">
              <AiOutlineSolution className=" w-6 h-6 text-green-600 m-2 text-center ml-4" />
              <h1 className="md:w-[100px] w-[60px] font-extrabold text-start ">
                Role
              </h1>
              <p className="p-4">
                <b>:</b>
              </p>
              <h1 className="font-bold text-start">Backend Developer</h1>
            </div>
            <div className="flex items-center  py-6 md:text-xl border-b border-gray-300">
              <AiOutlineProject className="w-6 h-6 text-blue-600 m-2 text-center ml-4" />
              <h1 className="md:w-[100px] w-[60px] font-extrabold text-start">
                Project
              </h1>
              <p className="p-4">
                <b>:</b>
              </p>
              <div>
                <div className="flex items-center">
                  <AiOutlineLink className="text-[20px] text-gray-600 mr-1 text-center" />
                  <h1 className="font-bold font-s  text-start hover:text-blue-400 ">
                    
                    <a href="#AVScan">Digital AV File Scan,</a>
                  </h1>
                </div>
                <div className="flex items-center">
                  <AiOutlineLink className="text-[20px] text-gray-600 mr-1 text-center" />
                  <h1 className="font-bold font-s text-start hover:text-blue-400 ">
                    <a href="#SSP"> Safety & Security Protocol</a>
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex items-center py-6 md:text-xl ">
              <AiOutlineClockCircle className="w-6 h-6 text-gray-600 m-2 text-center ml-4" />
              <h1 className="md:w-[100px] w-[60px] font-extrabold text-start">
                Duration
              </h1>
              <p className="p-4">
                <b>:</b>
              </p>
              <h1 className="font-bold text-start"> Jun-2023 to Dec-2024</h1>
            </div>
          </div>
        </div>
        <div className="lg:w-[40%] md:w-[60%] w-[85%] text-center md:py-4 pt-5  shadow-2xl shadow-green-600 rounded-2xl hover:scale-105 duration-300 ">
          <h1 className="font-bold text-2xl hover:scale-110 duration-300 hover:text-blue-400">
            <a href="https://www.gsstvl.com/">Global Software Solutions</a>
          </h1>
          <div className="">
            <div className="flex items-center  pt-12 py-6 md:text-xl border-b border-gray-300">
              <AiOutlineSolution className=" w-6 h-6 text-green-600 m-2 text-center" />
              <h1 className="md:w-[100px] w-[60px] font-extrabold text-start pl-1">
                Role
              </h1>
              <p className="p-4">
                <b>:</b>
              </p>
              <h1 className="font-bold text-start">Junior Software Engineer</h1>
            </div>
            <div className="flex items-center  py-6 md:text-xl border-b border-gray-300">
              <AiOutlineProject className="w-6 h-6 text-blue-600 m-2 text-center" />
              <h1 className="md:w-[100px] w-[60px] font-extrabold text-start pl-1">
                Project
              </h1>
              <p className="p-4">
                <b>:</b>
              </p>
              <div className="flex items-center">
                <AiOutlineLink className="text-[20px] text-gray-600 mr-1 text-center" />
                <h1 className="font-bold font-s text-start hover:text-blue-400">
                  <a href="#NPSS">National Payment System Strategy</a>
                  
                </h1>
              </div>
            </div>
            <div className="flex items-center py-6 md:text-xl ">
              <AiOutlineClockCircle className="w-6 h-6 text-gray-600 m-2 text-center" />
              <h1 className="md:w-[100px] w-[60px] font-extrabold text-start pl-1">
                Duration
              </h1>
              <p className="p-4">
                <b>:</b>
              </p>
              <h1 className="font-bold text-start"> Jan-2025 to Present</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
