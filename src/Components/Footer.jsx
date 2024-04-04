import React from 'react'
import { AiFillCopyrightCircle } from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <div className='bg-[#0F172A]  w-full text-white text-center'>
           <p className='p-4'>Copyright {new Date().getFullYear()}</p>
      </div>   
    </>
  )
}
