import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Header() {
  return (
   <>
     <div className='flex justify-between items-center py-4 '>
        <div className='text-3xl font-sans font-bold pl-12 '>
           <h1>Logo.</h1>
        </div>
        <div className='text-xl  pr-12 md:block hidden'>
           <Link className='p-4' to="">Home</Link>
           <Link className='p-4' to="/services">Services</Link>
           <Link className='p-4' to="/about">About</Link>
           <Link className='p-4' to="/contact">Contact</Link>
        </div>
       
        <FontAwesomeIcon icon="fa-solid fa-bars-staggered" />
        
        
        
     </div><hr />
   </>
  )
}
