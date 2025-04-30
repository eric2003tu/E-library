import React, {useState } from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaGoogle } from 'react-icons/fa';
import { FaApple } from "react-icons/fa";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import hero from '../assets/hero.jpg';
import { MdOutlineEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { FaPhone } from "react-icons/fa6";

const Signup:React.FC = () => {
const [email,setEmail] = useState<string>('')
  const [password,setPassord] = useState<string>('')
  const [shown, setShown] = useState<boolean>(false)
  const [confShown, setConfShown] = useState<boolean>(false)
  const [Fname, setFname] = useState<string>('')
  const [Lname, setLname] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [confPassword, setconfPassword] = useState<string>('')
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 bg-white justify-items-center p-3 h-screen w-full'>

      {/* Left division */}

      <div
  className="w-full   bg-contain bg-center rounded-md"
  style={{ backgroundImage: `url(${hero})` }}
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

      <div className='grid grid-cols-1 w-full px-10 text-center lg:overflow-y-auto'>
        <form className='flex flex-col gap-2'>
        <h1 className='text-[#000C4A] text-[35px] font-bold '>Welcome Back!</h1>
        <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 w-full'>
        <div className='relative'>
        <label htmlFor='First Name' className='grid justify-self-start text-gray-500 text-[17px]'>First Name</label>
        <input type='text' name='First Name' placeholder='Enter First Name' value={Fname} onChange={(e)=>{
          setFname(e.target.value)
        }} className='w-full text-[#000C4A] p-3 border focus:outline-none focus:ring-1 focus:ring-blue-500 border-blue-500 rounded-md'/>
        <FaUser size={25} className='absolute top-10 right-2 text-gray-700'/>
        </div>
        <div className='relative'>
        <label htmlFor='Last Name' className='grid justify-self-start text-gray-500 text-[17px]'>Last Name</label>
        <input type='text' name='Last name' placeholder='Enter Last name' value={Lname} onChange={(e)=>{
          setLname(e.target.value)
        }} className='w-full text-[#000C4A] p-3 border focus:outline-none focus:ring-1 focus:ring-blue-500 border-blue-500 rounded-md'/>
        <button type='button' className='absolute top-10 right-2 text-gray-700'>  
        <FaUser size={25} onClick={()=>{
          if(!shown && password.length > 0) setShown(true)
        }}/>
        </button>
        </div>
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 w-full'>
        <div className='relative'>
        <label htmlFor='Email' className='grid justify-self-start text-gray-500 text-[17px]'>Email</label>
        <input type='email' name='Email' placeholder='example@gmail.com' value={email} onChange={(e)=>{
          setEmail(e.target.value)
        }} className='w-full text-[#000C4A] p-3 border focus:outline-none focus:ring-1 focus:ring-blue-500 border-blue-500 rounded-md'/>
        <MdOutlineEmail size={25} className='absolute top-10 right-2 text-gray-700'/>
        </div>
        <div className='relative'>
        <label htmlFor='Phone' className='grid justify-self-start text-gray-500 text-[17px]'>Phone Number</label>
        <input type='tel'name='Phone' placeholder='Phone number' value={phone} onChange={(e)=>{
          setPhone(e.target.value)
        }} className='w-full text-[#000C4A] p-3 border focus:outline-none focus:ring-1 focus:ring-blue-500 border-blue-500 rounded-md'/>
        <button type='button' className='absolute top-10 right-2 text-gray-700'> 
        <FaPhone size={25}/>
        </button>
        </div>
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 w-full'>
        <div className='relative'>
        <label htmlFor='Password' className='grid justify-self-start text-gray-500 text-[17px]'>Password</label>
        <input type={!shown ? 'password' : 'text'} name='password' placeholder='Type your password' value={password} onChange={(e)=>{
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
        <div className='relative'>
        <label htmlFor='confirm Password' className='grid justify-self-start text-gray-500 text-[17px]'>confirm Password</label>
        <input type={!confShown ? 'password' : 'text'} name='confirm password' placeholder='Re-type your password' value={confPassword} onChange={(e)=>{
          setconfPassword(e.target.value)
        }} className='w-full text-[#000C4A] p-3 border focus:outline-none focus:ring-1 focus:ring-blue-500 border-blue-500 rounded-md'/>
        <button type='button' className='absolute top-10 right-2 text-gray-700'> 
          { !confShown ? 
        <IoEyeOffOutline size={25} onClick={()=>{
          if(!confShown && confPassword.length > 0) setConfShown(true)
        }}/>
       : <IoEyeOutline size={25} onClick={()=>{
        if(confShown && confPassword.length > 0) setConfShown(false)
      }}/>
          }
        </button>
        </div>
        </div>

        <button type='submit' className='w-full bg-blue-400 p-1 text-white font-bold text-[24px] rounded-md hover:bg-blue-500 transition cursor-pointer'>Sign Up</button>
        <div className='flex flex-row w-full gap-1 mb-5'>
          <hr className='text-[#000C4A] w-[47%] mt-4'/>
          <p>or</p>
          <hr className='text-[#000C4A] w-[47%] mt-4'/>
        </div>
        <div className='w-full justify-items-center flex flex-row gap-3 border-[1.5px] border-gray-400 p-2 rounded-md'>
          <Link to='/login' className='grid text-blue-500 w-fit mt-1 hover:text-blue-400 transition'>
          <FaFacebook size={25} /></Link>
          <div className='grid justify-self-center justify-items-center'>
          <Link to='/signup' className='text-[#000C4A] text-[20px]'>Continue with Facebook</Link>
          </div>

        </div>
        <div className='w-full justify-items-center flex flex-row gap-3 border-[1.5px] border-gray-400 p-2 rounded-md'>
        <Link to='/login' className='grid text-blue-500 w-fit mt-1 hover:text-blue-400 transition'>
  <FaGoogle size={25} className=" text-red-400" />

</Link>
          <div className='grid justify-self-center justify-items-center'>
          <Link to='/signup' className='text-[#000C4A] text-[20px]'>Continue with Google</Link>
          </div>

        </div>
        <div className='w-full justify-items-center flex flex-row gap-3 border-[1.5px] border-gray-400 p-2 rounded-md'>
          <Link to='/login' className='grid text-blue-500 w-fit mt-1 hover:text-blue-400 transition'>
          <FaApple size={25} className='text-black' /></Link>
          <div className='grid justify-self-center justify-items-center'>
          <Link to='/signup' className='text-[#000C4A] text-[20px]'>Continue with Apple</Link>
          </div>

        </div>
        <h1 className='text-gray-500 text-[20px] '>Already have an account? <Link to='/login' className='text-blue-600 hover:text-blue-500 transition'>Login</Link></h1>
        </form>
      </div> 

    </div>
  )
}

export default Signup
