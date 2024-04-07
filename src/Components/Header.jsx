import React from 'react';
import { Link } from 'react-router-dom';
import { FaAlignJustify } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';

export default function Header() {
   const [toggle, setToggle] = useState(false)

   const handleToggle = () => [
      setToggle(!toggle)
   ]
  return (
    <>
      <div className="flex justify-between items-center py-4 ">
        <div className="text-3xl font-sans font-bold pl-12 text-[#0f172a]">
          <h1>Logo.</h1>
        </div>

        <div className="text-lg font-bold pr-12 md:block hidden">
          <Link className="p-4 hover:text-[#1e2d4f]" to="">
            Home
          </Link>
          <Link className="p-4 hover:text-[#1e2d4f]" to="/services">
            Services
          </Link>
          <Link className="p-4 hover:text-[#1e2d4f]" to="/about">
            About
          </Link>
          <Link className="p-4 hover:text-[#1e2d4f]" to="/contact">
            Contact
          </Link>
        </div>
        <div className='mr-12 md:hidden block'>
          <FaAlignJustify className={`${toggle ? 'hidden' : 'block'}`} onClick={handleToggle}/>
          <AiOutlineClose className={`${toggle ? 'block' : 'hidden'}`} onClick={handleToggle}/>
        </div>
      </div><hr />
 
      <div className={` absolute md:hidden p-5 h-screen w-full bg-black text-white duration-300 text-center ${toggle ? 'right-0' : 'right-[-100%]'}`}>
         <ul>
            <li className='p-7 hover:text-[#1e2d4f]'><Link to="">Home</Link></li>
            <li className='p-7 hover:text-[#1e2d4f]'><Link to="/services">Services</Link></li>
            <li className='p-7 hover:text-[#1e2d4f]'><Link to="/about">About</Link></li>
            <li className='p-7 hover:text-[#1e2d4f]'><Link to="/contact">Contact</Link></li>
         </ul>
      </div>
</>
  );
}
