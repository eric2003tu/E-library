import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { MdLibraryBooks } from "react-icons/md";
import { TbMicroscope } from "react-icons/tb";
import { RiBearSmileLine } from "react-icons/ri";
import { FaSearch } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import hero from '../assets/hero.jpg';
import other from '../assets/other.jpg'







const Home:React.FC = () => { 
  const [menu,setMenu] = useState<boolean>(false)
  return (
    <div className=' justify-items-center gap-0 h-full '>
      <nav className='grid bg-blue-400  top-0 sticky px-4 py-4 h-fit w-full'>
      <p className='text-white font-bold text-[22px] cursor-pointer hover:text-green-300 transition'>Home</p>
      <ul className='hidden sm:hidden md:flex lg:flex flex-row justify-self-end text-white font-bold gap-8 mt-[-30px] text-[22px]'>
        <li className='grid cursor-pointer hover:text-green-300 transition'>Our services</li>
        <li className='cursor-pointer hover:text-green-300 transition'><Link to='/login'>Login</Link> </li>
        <li className='cursor-pointer hover:text-green-300 transition'>Register</li>
      </ul>
      <h1 className='grid sm:grid md:hidden lg:hidden  cursor-pointer hover:text-green-300 transition justify-end mt-[-30px] text-[23px] text-white' onClick={function(){
          if(!menu)setMenu(true)
          else setMenu(false)
        }}>Menu</h1>
  <ul className={
  menu
    ? 'absolute right-0 top-17 grid grid-cols-1 sm:grid md:hidden lg:hidden gap-4 bg-blue-300 p-6 text-white font-bold text-xl shadow-xl rounded-l-lg '
    : 'hidden'
}>
        <li className='grid cursor-pointer hover:text-green-300 hover:bg-white px-5 py-2 transition'>Our services</li>
        <li className='cursor-pointer hover:text-green-300 transition hover:bg-white px-5 py-2'><Link to='/login'>Login</Link></li>
        <li className='cursor-pointer hover:text-green-300 transition hover:bg-white px-5 py-2'>Register</li>
      </ul>
      </nav>
      {/* Main Division */}
      <div className='w-full h-98 bg-cover bg-center grid grid-cols-1 justify-items-center' style={{backgroundImage: `url(${other})`}}>
        <div className=' bg-gray-900/45 w-full justify-items-center text-center py-6'>
        <h1 className='text-white font-bold leading-12 text-[50px] '>Unlock a World of<br/>Knowledge</h1>
        <p className='text-[18px] font-light text-white leading-6 my-6'>Explore books, attend events, and <br/>connect with the community</p>
        <div className=" w-full flex justify-center">
        <div className="max-w-3xl  mb-3">
            <input
              type="text"
              name="search"
              placeholder="Search for a book..."
              className="w-full bg-white px-5 py-3 pl-9 pr-12 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch
              size={20}
              className="ml-1 mt-[-33px] text-gray-500 hover:text-gray-700 cursor-pointer"
            />
          </div>
          
          </div>
          <div className='grid grid-cols-2 gap-3 my-4 justify-self-center justify-items-center'>
            <Link to='/' className='bg-blue-400 hover:bg-blue-500 transition  text-white text-center py-1 px-5 rounded-md text-[24px]'>Browse Now</Link>
            <Link to='/' className=' border text-white text-center font-light  px-5 rounded-md text-[24px]'>Join Now</Link>
          </div>
        </div>
      </div>
      <div className='max-w-2xl mx-auto gap-15 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-4'>
        <img src={hero} alt='others' className='hidden sm:hidden md:flex lg:flex w-full object-contain rounded-md'/>
        <div className=' max-w-2xl mx-auto text-center'>
          <h1 className='text-[24px] font-bold'>About City Library</h1>
          <p className='mt-5 mb-7'>Providing knowledge and community services for over 50 years</p>
          <Link to='/' className=' text-blue-500 text-center py-1 px-5 border rounded-md text-[24px]'>Learn More</Link>
        </div>
      </div>
      <div className='grid grid-cols-1 py-4 justify-items-center'>
        <h1 className='text-[33px] font-bold '>Our Collections</h1>
        <div className='grid w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-self-center sm:gap-2 md:gap-4 lg:gap-9 py-3'>
          <div className='flex flex-row  w-full justify-self-center gap-3 shadow-lg p-2'>
            <div className='w-fit bg-blue-700 p-2 h-fit rounded-lg justify-items-center'>
              <MdLibraryBooks size={40} className='text-white self-center'/>
            </div>
            <div className='max-w-2xl mx-auto'>
            <h1 className='text-[24px] font-bold text-[#000C4A]'>Fiction</h1>
            <p className='text-[17px] text-[#000C4A]'>Novels and<br/> stories from<br/> various genres</p>
            </div>
          </div>
          <div className='grid grid-cols-[0.6fr_2.5fr] w-full justify-self-center gap-3 shadow-lg p-2'>
            <div className='w-fit  p-2 h-fit rounded-lg justify-items-center'>
              <TbMicroscope size={45} className='text-blue-700 self-center'/>
            </div>
            <div className='max-w-2xl mx-auto'>
            <h1 className='text-[24px] font-bold text-[#000C4A]'>Science</h1>
            <p className='text-[17px] text-[#000C4A]'>Resources on<br/> scientific topics<br/> and research</p>
            </div>
          </div>
          <div className='grid grid-cols-[0.6fr_2.5fr] w-full justify-self-center gap-3 shadow-lg p-2'>
            <div className='w-fit bg-orange-700 p-2 h-fit rounded-lg justify-items-center'>
              <RiBearSmileLine size={40} className='text-white self-center'/>
            </div>
            <div className='max-w-2xl mx-auto'>
            <h1 className='text-[24px] font-bold text-[#000C4A]'>Children's Books</h1>
            <p className='text-[17px] text-[#000C4A]'>Interactive<br/> stories for kids</p>
            </div>
          </div>
          <div className='hidden sm:hidden md:grid lg:hidden grid-cols-[0.6fr_2.5fr] w-full justify-self-center gap-3 shadow-lg p-2'>
            <div className='w-fit bg-orange-700 p-2 h-fit rounded-lg justify-items-center'>
              <RiBearSmileLine size={40} className='text-white self-center'/>
            </div>
            <div className='max-w-2xl mx-auto'>
            <h1 className='text-[24px] font-bold text-[#000C4A]'>Children's Books</h1>
            <p className='text-[17px] text-[#000C4A]'>Interactive<br/> stories for kids</p>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 py-4 justify-items-center'>
          <h1 className='text-[33px] font-bold '>Upcoming Events</h1>
          <div className='grid w-full sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-self-center gap-10 py-3'>
            <div className='grid grid-cols-1 gap-1 shadow-lg px-15 py-3'>
              <p className='text-[14px]'>Apr 15</p>
            <h1 className='text-[24px] font-bold text-[#000C4A]'>Author Talk</h1>
            <p className='text-[17px] text-[#000C4A]'>A discussion with a<br/> featured writer</p>
            <Link to='/' className='bg-blue-400 hover:bg-blue-500 transition  text-center text-[20px] text-white py-2 rounded-md'>Register</Link>
            </div>
            <div className='grid grid-cols-1 gap-1 shadow-lg px-15 py-3'>
              <p className='text-[14px]'>May 5</p>
            <h1 className='text-[24px] font-bold text-[#000C4A]'>Book Fair</h1>
            <p className='text-[17px] text-[#000C4A]'>Explore new used <br/> books</p>
            <Link to='/' className='bg-blue-400 hover:bg-blue-500 transition  text-center text-[20px] text-white py-2 rounded-md'>Register</Link>
            </div>
            <div className='hidden sm:hidden md:grid lg:hidden grid-cols-1  gap-1 shadow-lg px-15 py-3'>
              <p className='text-[14px]'>May 5</p>
            <h1 className='text-[24px] font-bold text-[#000C4A]'>Book Fair</h1>
            <p className='text-[17px] text-[#000C4A]'>Explore new used <br/> books</p>
            <Link to='/' className='bg-blue-400 hover:bg-blue-500 transition  text-center text-[20px] text-white py-2 rounded-md'>Register</Link>
            </div>
            <div className='grid grid-cols-1 gap-1 shadow-lg px-15 py-3'>
              <p className='text-[14px]'>June 20</p>
            <h1 className='text-[24px] font-bold text-[#000C4A]'>Children's story hour</h1>
            <p className='text-[17px] text-[#000C4A]'>Interactive stories for<br/> kids</p>
            <Link to='/' className='bg-blue-400 hover:bg-blue-500 transition  text-center text-[20px] text-white py-2 rounded-md '>Register</Link>
            </div>
          </div>
          
        </div>
      </div>

      <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 w-full'>
        {/* Left nav */}

        <div className='w-full  justify-items-start flex flex-col px-8 py-4'>
        <h1 className='text-[40px] font-bold text-[#000C4A] '>
          E-library
        </h1>
        <p className='text-[#000C4A] font-light leading-4 text-[13px]'>Your all-in-one source of reading<br/> and non-reading materials</p>
        <div className='flex flex-row py-8 '>
          <p className='text-[18px] text-[#000C4A]'>
            We are a big Library services providers team and our target is to bring you beside all books for either educational purposes, research, or leisure. do not hesitate to check this out if you are looking for a serious source of information.
          </p>
        </div>
        <Link to='/login' className='bg-blue-400 hover:bg-blue-500 transition text-[24px] text-white font-bold text-center py-3 w-1/2 rounded-md mb-4'>Start reading</Link>
        
        </div>
        <div className='grid grid-cols-2 justify-items-center  gap-3 w-full  px-6 pt-3'> 

          {/* right card */}
          
        <div className='w-full border border-green-600 grid grid-cols-1 gap-2  sm:px-4 md:px-3 lg:px-6 bg-white'>
        <p className='text-[15px] text-[#000C4A] self-center'>Explore more about us, Here you can change your future by ataining a full-package of all you wish, do not change your destination cause this is the opportuninty you have been chasing for so long time
        
        </p>
        <Link to='/' className='grid text-[24px] text-green-600 justify-start  font-bold text-center rounded-md'>Explore now</Link>
        </div>
        <div className='w-full border border-green-600 grid grid-cols-1 gap-2   sm:px-7 md:px-7 lg:px-6  bg-white'>
        <p className='text-[15px] text-[#000C4A] self-center'>Explore more about us, Here you can change your future by ataining a full-package of all you wish, do not change your destination cause this is the opportuninty you have been chasing for so long time

        </p>
        <Link to='/' className='grid text-[24px] text-green-600 justify-start  font-bold text-center rounded-md'>Explore now</Link>
        </div>
        </div>
      </div>
      <div className='grid justify-self-center grid-cols-1 justify-items-center w-full pt-4 px-4'>
        <h1 className='grid text-[40px] font-bold text-[#000C4A] justify-self-start'>Trending Books</h1>
        <hr className='bg-blue-400 w-1/8 h-1 justify-self-start'/>

        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1.5 w-full py-3'>
          <div className='grid w-full gap-3.5 border border-green-700 justify-items-center rounded-sm p-8 pb-2 bg-[#444467] text-white'>
          <h1 className='grid justify-self-start text-[24px] font-bold text-white '>The dark light</h1>
          <p>This book was written for educational purpose, It's available free of charge. For any othe info please create a free         account to continue and browse more trending books.

          </p>
          <Link to='/login' className='grid justify-self-start text-[24px]  bg-green-600 text-white font-bold rounded-md px-5'>Browse now
          </Link>
          </div>
          <div className='grid w-full gap-3.5 border border-green-700 justify-items-center rounded-sm p-8 pb-2 bg-[#444467] text-white'>
          <h1 className='grid justify-self-start text-[24px] font-bold text-white '>The dark light</h1>
          <p>This book was written for educational purpose, It's available free of charge. For any othe info please create a free         account to continue and browse more trending books.

          </p>
          <Link to='/login' className='grid justify-self-start text-[24px]  bg-green-600 text-white font-bold rounded-md px-5'>Browse now
          </Link>
          </div>
          <div className='grid w-full gap-3.5 border border-green-700 justify-items-center rounded-sm p-8 pb-2 bg-[#444467] text-white'>
          <h1 className='grid justify-self-start text-[24px] font-bold text-white '>The dark light</h1>
          <p>This book was written for educational purpose, It's available free of charge. For any othe info please create a free         account to continue and browse more trending books.

          </p>
          <Link to='/login' className='grid justify-self-start text-[24px]  bg-green-600 text-white font-bold rounded-md px-5'>Browse now
          </Link>
          </div>
          <div className='grid w-full gap-3.5 border border-green-700 justify-items-center rounded-sm p-8 pb-2 bg-[#444467] text-white'>
          <h1 className='grid justify-self-start text-[24px] font-bold text-white '>The dark light</h1>
          <p>This book was written for educational purpose, It's available free of charge. For any othe info please create a free         account to continue and browse more trending books.

          </p>
          <Link to='/login' className='grid justify-self-start text-[24px]  bg-green-600 text-white font-bold rounded-md px-5'>Browse now
          </Link>
          </div>
        </div>
      </div>
      {/* Bottom division */}

    </div>
  )
}

export default Home
