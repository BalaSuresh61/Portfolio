import React, { useState } from 'react'
import { AiOutlineSend, AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail, AiOutlineFilePdf } from 'react-icons/ai';
const Contact = () => {
  const [name,setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [missingField, setMissingField] = useState()
  const [valid, setValid] = useState(true);

  const to = encodeURIComponent("kbsbala61@gmail.com");
  const subject = encodeURIComponent("Hello");
  const body = encodeURIComponent("Message body here");

  const handleSend = async()=>{
    if(!name || name.trim() ==='') return setMissingField('Name')
    if(!message || name.trim() === '') return setMissingField('Message')
    if(email && email.trim()!=''){
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return setValid(false)
      }else{
        setValid(true)
      }
    }

    console.log("Name :",name)
    // console.log("Email :",email)
    console.log("Message :",message)
    const mailMessage = `Message from Porfolio. \n\n\n\t ${name} Send You a Feedback. \nMessage is: ${message} ${email ?`\n\n\n Reach ${name} with ${email}`:''} ` 
    sendMessage(mailMessage)
    setName('')
    setEmail('')
    setMessage('')
    setMissingField()
  }
  const sendMessage = async (message) => {
    // const res = await fetch('http://localhost:3001/send-email', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ message })
    // });

    const res =await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });

    const data = await res.json();
    console.log(data);
  };
  return (
    <div id='Contact' className='bg-gray-800 p-8 text-white  w-full min-h-screen'>
        <h1 className='text-4xl font-extrabold text-green-400 lg:mb-6  lg:pb-6 text-center'>Contact</h1>

        <div className='grid lg:grid-cols-3 grid-cols-1 w-full  gap-8 pt-6 '>
          <div className='md:col-span-2 bg-gray-900 rounded-3xl pl-6 p-6'>
            <h1 className=' p-3 text-3xl font-bold'>FeedBack</h1>
            <div className=' p-2 '>
              <h1 className='p-2 font-bold'> Your Name *</h1>
              <input type='text' placeholder='Enter Your Name' className='bg-white rounded-2xl w-[90%] p-2 text-black outline-0' value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className=' p-2 '>
              <h1 className='p-2 font-bold'> Your Email</h1>
              <input type='email' placeholder='Enter Your Email' className='bg-white rounded-2xl w-[90%] p-2 text-black outline-0' value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className='items-center p-2'>
              <h1 className='p-2 font-bold'> Your Message *</h1>
              <input type="text" placeholder='Enter Your Message' className='bg-white rounded-2xl w-[90%] p-2 text-black outline-0' value={message} onChange={(e)=>setMessage(e.target.value)} />
            </div>
            <div className=' w-full flex flex-col justify-center items-center pt-4'>
              {valid ? 
              <p className={missingField ? ' text-red-400' : 'hidden'}> {missingField} is Required</p> 
              : <p className=' text-red-400'> Enter Valid Email</p>}
              <button className='flex p-3 px-4 items-center justify-center border-2 rounded-2xl' 
              onClick={handleSend}> 
                <h1 className='px-4'>Send</h1>
                <AiOutlineSend className='h-5 w-5 '/>

              </button>
            </div>
          </div>
          <div className='bg-gray-900 rounded-3xl p-6 pl-6 '>
            <div className='bg-gray-900 rounded-3xl p-6 flex flex-col justify-center'>
              <ul className=''>
                
                <li className='p-4 text-2xl font-bold flex text-center items-center hover:text-blue-600'><AiOutlineLinkedin className='h-6 w-6 m-2'/><a href="https://www.linkedin.com/in/k-bala-suresh-4a4623241/"> LinkedIn</a></li>
                <li className='p-4 text-2xl font-bold flex text-center items-center hover:text-blue-600'><AiOutlineGithub className='h-6 w-6 m-2'/><a href="https://github.com/BalaSuresh61">GitHub</a> </li>
                <li className='p-4 text-2xl font-bold flex text-center items-center hover:text-blue-600'><AiOutlineMail className='h-6 w-6 m-2'/><a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`}>G-Mail</a></li>
                <li className='p-4 text-2xl font-bold flex text-center items-center hover:text-blue-600'><AiOutlineFilePdf className='h-6 w-6 m-2'/><a href="/BalaSuresh_Resume.pdf" download>Resume</a></li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact