import React, { useState } from 'react'
import AVScan from './AVScan';

const Project = () => {
  const [isAVScanOpen,setIsAVScanOpen] = useState(false)
  const [isSSPOpen, setIsSSPOpen] = useState(false)
  const [isNPSSOpen, setIsNPSSOpen] = useState(false)

  //AVSCAN
  const AVSCAN_Topic = 'Digital AV File Scan'
  const AVSCAN_Description = 'As a safeguard for industries against virus-infected files, I was responsible for scanning and detecting viruses in user uploads, ensuring a safe and secure environment. My role was critical in maintaining system integrity and protecting against malware threats, providing peace of mind for users, and contributing to the overall security of digital content management.'
  const AVSCAN_Tools = ' Node js, Express, ClamAV, MySQL, Javascript, Crypto, GCP';
  const AVSCAN_myRole = 'Implemented support for advanced file formats by extending the virus scanning engine from basic types (IMG, TXT, XLS, PNG) to PDF, DOC/DOCX , password-protected PDF, password-protected DOC/DOCX , and ZIP, improving backend capabilities and secure file handling.';

  //SSP
  const SSP_Topic = 'Safety & Security Protocol';
  const SSP_Description =  'A robust system that efficiently allocated phone numbers to car dashboards in emergencies or upon requests for assistance. Leveraging AWS services, the system ensured rapid and reliable number allocation within 2 seconds, enhancing safety and response effectiveness';
  const SSP_Tools = 'Node.js, AWS API Gateway, Lambda, SQS, Redis, CloudFormation, CloudWatch, BedRock.';
  const SSP_myRole = 'Developed a car safety dashboard application that automatically initiates SOS calls during emergencies, capturing location and contact details for rapid response. Implemented high-speed contact management with Redis, and used Node.js with AWS to ensure low latency, scalability, and reliable call handling.';

  //NPSS
  const NPSS_Topic = 'National Payment System Strategy';
  const NPSS_Description = 'National Payment Security System (NPSS) – Banking & Digital Payments Application, UAE. NPSS is a real-time digital payment and settlement system implemented in the United Arab Emirates, similar to Google Pay in India. It enables secure fund transfers, merchant payments, and peer-to-peer transactions through a unified platform. The system is designed to ensure high availability, transaction security, and compliance with banking standards';
  const NPSS_Tools = 'Nest.js, Node.js, NX MonoRepo, Kafka, Redis, Postgres SQL.';
  const NPSS_myRole = 'Contributed to maintaining and enhancing the NPSS platform by implementing new features and resolving bugs. Added support for bulk/multiple transactions, improving the system’s efficiency and user experience.';

  const handleProject=(project)=>{
    
    console.log("Project",project);
    if(project === "AVScan")  setIsAVScanOpen(true)
    if(project === "SSP")  setIsSSPOpen(true)
    if(project === "NPSS")  setIsNPSSOpen(true)

  }
  return (
    <div id='Projects' className='w-full lg:h-screen h-full bg-gray-800 text-white'>
      <div className=' h-[15%] w-[100%] m-1 mx-auto flex items-center justify-center bg-gray-900 rounded-2xl'>
        <h1 className='text-4xl font-extrabold text-center text-white p-6'>Projects</h1>
      </div> 

      <div className=" w-full h-[80%] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 p-6 text-gray-300 ">
        <div id='AVScan' className='flex flex-col items-center rounded-2xl  p-5 bg-gray-900 border-2 border-blue-500 hover:shadow-lg hover:shadow-green-500/50 hover:scale-105 duration-200 '>
          <div className='flex  items-center border-b  w-full p-4'>
            <h1 className='lg:w-[130px] w-[100px] font-extrabold text-start '>Name</h1>
            <b className="p-4">:</b>
            <h1 className='font-medium text-start'>Digital AV File scan</h1>
          </div>
          <div className='flex  items-center border-b w-full p-4'>
            <h1 className='lg:w-[175px] md:w-[300px] w-[110px] font-extrabold text-start '>Tech Used</h1>
            <b className="p-4">:</b>
            <h1 className='font-medium text-start'>Node.js, Express.js, MySQL, ClamAV, Crypto,JavaScript, GCP.</h1>
          </div>
          <div className='flex  items-center  w-full px-4 pt-4'>
            <h1 className='md:w-[125px] w-[100px] font-extrabold text-start '>Description</h1>
            <b className="p-4">:</b>
            <h1 className='font-medium text-start'>safeguard for industries against virus-infected files</h1>
          </div>
          <div className='md:pt-8'>
            <button className='text-center md:p-4 p-2 bg-green-600 rounded-2xl w-[150px] font-bold hover:bg-blue-500'
            onClick={()=>handleProject("AVScan")}>Explore</button>
          </div>
        </div>
        <div id='SSP' className='flex flex-col items-center rounded-2xl  p-5 bg-gray-900 border-2 border-blue-500 hover:shadow-lg hover:shadow-green-500/50 hover:scale-105 duration-200 '>
          <div className='flex  items-center border-b  w-full p-4'>
            <h1 className='lg:w-[130px] w-[100px] font-extrabold text-start '>Name</h1>
            <b className="p-4">:</b>
            <h1 className='font-medium text-start'>Safety & Security Protocol</h1>
          </div>
          <div className='flex  items-center border-b w-full p-4'>
            <h1 className='lg:w-[175px] md:w-[300px] w-[110px] font-extrabold text-start '>Tech Used</h1>
            <b className="p-4">:</b>
            <h1 className='font-medium text-start'>Node.js, AWS API Gateway, Lambda, SQS, Redis, CloudFormation, CloudWatch, BedRock.</h1>
          </div>
          <div className='flex  items-center  w-full px-4 pt-4'>
            <h1 className='md:w-[125px] w-[100px] font-extrabold text-start '>Description</h1>
            <b className="p-4">:</b>
            <h1 className='font-medium text-start'>Developed a car safety dashboard application that automatically initiates SOS calls</h1>
          </div>
          <div className='md:pt-8'>
            <button className='text-center md:p-4 p-2 bg-green-600 rounded-2xl w-[150px] font-bold hover:bg-blue-500'
            onClick={()=>handleProject("SSP")}>Explore</button>
          </div>
        </div>
        <div id='NPSS' className='flex flex-col items-center rounded-2xl  p-5 bg-gray-900 border-2 border-blue-500 hover:shadow-lg hover:shadow-green-500/50 hover:scale-105 duration-200 '>
          <div className='flex  items-center border-b  w-full p-4'>
            <h1 className='lg:w-[130px] w-[100px] font-extrabold text-start '>Name</h1>
            <b className="p-4">:</b>
            <h1 className='font-medium text-start'>National Payment System Strategy</h1>
          </div>
          <div className='flex  items-center border-b w-full p-4'>
            <h1 className='lg:w-[175px] md:w-[300px] w-[110px] font-extrabold text-start '>Tech Used</h1>
            <b className="p-4">:</b>
            <h1 className='font-medium text-start'>Nest.js, Node.js, NX MonoRepo, Kafka, Redis, Postgres SQL.</h1>
          </div>
          <div className='flex  items-center  w-full px-4 pt-4'>
            <h1 className='md:w-[125px] w-[100px] font-extrabold text-start '>Description</h1>
            <b className="p-4">:</b>
            <h1 className='font-medium text-start'>NPSS is a real-time digital payment and settlement system implemented in the UAE.</h1>
          </div>
          <div className='md:pt-8'>
            <button className='text-center md:p-4 p-2 bg-green-600 rounded-2xl w-[150px] font-bold hover:bg-blue-500'
            onClick={()=>handleProject("NPSS")}>Explore</button>
          </div>
        </div>
      </div>
      <div>
        {isAVScanOpen && (
              <AVScan 
                  isOpen={isAVScanOpen} 
                  onClose={() => setIsAVScanOpen(false)} 
                  Topic = {AVSCAN_Topic}
                  Description={AVSCAN_Description}
                  Tools={AVSCAN_Tools}
                  myRole={AVSCAN_myRole}
              />
        )}
        {isSSPOpen && (
              <AVScan 
                  isOpen={isSSPOpen} 
                  onClose={() => setIsSSPOpen(false)} 
                  Topic = {SSP_Topic}
                  Description={SSP_Description}
                  Tools={SSP_Tools}
                  myRole={SSP_myRole}
              />
          )}
        {isNPSSOpen && (
              <AVScan 
                  isOpen={isNPSSOpen} 
                  onClose={() => setIsNPSSOpen(false)} 
                  Topic = {NPSS_Topic}
                  Description={NPSS_Description}
                  Tools={NPSS_Tools}
                  myRole={NPSS_myRole}
              />
          )}
      </div>
        
    </div>
  )
}

export default Project