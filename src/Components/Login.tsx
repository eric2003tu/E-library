import React, { useState } from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaGoogle } from 'react-icons/fa';
import { FaApple } from "react-icons/fa";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import log from '../assets/log.png';
import { MdOutlineEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

const Login:React.FC = () => {

  const [email,setEmail] = useState<string>('')
  const [password,setPassord] = useState<string>('')
  const [shown, setShown] = useState<boolean>(false)
  const [remember, setRemember] = useState<boolean>(false)
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 bg-white justify-items-center p-3 h-screen w-full'>

      {/* Left division */}

      <div
  className="w-full   bg-contain bg-center rounded-md"
  style={{ backgroundImage: `url(${log})` }}
>
  {/* Overlay */}
  <div className="w-full h-full bg-blue-600/13 p-3 flex flex-col justify-between">
    
    {/* Header */}
    <div className="text-left">
      <Link to='/' className="text-[30px] text-white font-bold">Back Home</Link>
    </div>

    {/* Footer / Bottom Content */}
    <div className="text-left z-0 bg-white w-full px-7 pb-3 rounded-md">
      <h1 className='text-[#000C4A] text-[24px] font-bold'>Login to esplore more</h1>
      <p className='text-[#000C4A] h-auto self-center'>Explore our Library's features to discover, borrow, or rent more books and catalogs from Fiction to non-fiction novels, W've got you covered.</p>
      
    </div>

  </div>
</div>


      {/* Right Division */}

      <div className='grid grid-cols-1 w-full px-10 text-center  pt-2'>
        <form className='flex flex-col gap-2'>
        <h1 className='text-[#000C4A] text-[35px] font-bold '>Welcome Back!</h1>
        <div className='relative'>
        <label htmlFor='Email' className='grid justify-self-start text-gray-500 text-[17px]'>Email</label>
        <input type='email' name='Email' placeholder='example@gmail.com' value={email} onChange={(e)=>{
          setEmail(e.target.value)
        }} className='w-full text-[#000C4A] p-3 border focus:outline-none focus:ring-1 focus:ring-blue-500 border-blue-500 rounded-md'/>
        <MdOutlineEmail size={25} className='absolute top-10 right-2 text-gray-700'/>
        </div>
        <div className='relative'>
        <label htmlFor='Password' className='grid justify-self-start text-gray-500 text-[17px]'>Password</label>
        <input type={!shown ? 'password' : 'text'} name='password' placeholder='Type your password here' value={password} onChange={(e)=>{
          setPassord(e.target.value)
        }} className='w-full text-[#000C4A] p-3 border focus:outline-none focus:ring-1 focus:ring-blue-500 border-blue-500 rounded-md'/>
        <button type='button' className='absolute top-10 right-2 text-gray-700'> 
          { !shown ? 
        <IoEyeOffOutline size={25} onClick={()=>{
          if(!shown && password.length > 0) setShown(true)
        }}/>
       : <IoEyeOutline size={25} onClick={()=>{
        if(shown && password.length > 0) setShown(false)
      }}/>
          }
        </button>
        </div>
        <div className='grid grid-cols-2 w-full'>
          <div className='flex flex-row gap-1.5'>
          <input type="checkbox" name='remember'  onChange={()=>{
            setRemember(true)
          }} className='w-5'/>
          <p className='text-[#000C4A] text-[18px]'>Remember me</p>
          </div>
          <Link to='/login' className='text-blue-600 text-[18px] justify-self-end right-0 text-end hover:text-blue-400 transition'>Forgot password</Link>
        </div>
        <button type='submit' className='w-full bg-blue-400 p-1 text-white font-bold text-[24px] rounded-md hover:bg-blue-500 transition cursor-pointer'>Login</button>
        <div className='flex flex-row w-full gap-1 mb-5'>
          <hr className='text-[#000C4A] w-[47%] mt-4'/>
          <p>or</p>
          <hr className='text-[#000C4A] w-[47%] mt-4'/>
        </div>
        <div className='w-full justify-items-center flex flex-row gap-3 border-[1.5px] border-gray-400 p-2 rounded-md'>
          <Link to='/login' className='grid text-blue-500 w-fit mt-1 hover:text-blue-400 transition'>
          <FaFacebook size={25} /></Link>
          <div className='grid justify-self-center justify-items-center'>
          <Link to='/login' className='text-[#000C4A] text-[20px]'>Continue with Facebook</Link>
          </div>

        </div>
        <div className='w-full justify-items-center flex flex-row gap-3 border-[1.5px] border-gray-400 p-2 rounded-md'>
        <Link to='/login' className='grid text-blue-500 w-fit mt-1 hover:text-blue-400 transition'>
  <FaGoogle size={25} className=" text-red-400" />

</Link>
          <div className='grid justify-self-center justify-items-center'>
          <Link to='/login' className='text-[#000C4A] text-[20px]'>Continue with Google</Link>
          </div>

        </div>
        <div className='w-full justify-items-center flex flex-row gap-3 border-[1.5px] border-gray-400 p-2 rounded-md'>
          <Link to='/login' className='grid text-blue-500 w-fit mt-1 hover:text-blue-400 transition'>
          <FaApple size={25} className='text-black' /></Link>
          <div className='grid justify-self-center justify-items-center'>
          <Link to='/login' className='text-[#000C4A] text-[20px]'>Continue with Apple</Link>
          </div>

        </div>
        <h1 className='text-gray-500 text-[20px] '>Don't have an account? <Link to='/signup' className='text-blue-600 hover:text-blue-500 transition'>Signup</Link></h1>
        </form>
      </div> 

    </div>
  )
}

export default Login
