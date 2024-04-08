import React, { useState} from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Contact() {
    function getData(event){
       event.preventDefault()   
    }
    function inputData(e){
        const data = e.target.value;
        if (data.length<3) {
            setError(true)
        } else {
            setError(false)
        }
    }
    function secondData(e){
        const data = e.target.value;
        if (data.length<3) {
            setUserErr(true)
        } else {
            setUserErr(false)
        }
    }
    const [error, setError] = useState(false)
    const [color, setColor] = useState('red')
    const [userErr, setUserErr] = useState(false)
  return (
    <>
    <form onSubmit={getData}>
      <div className=' w-[80%] flex h-[468px] ml-[180px] pt-[35px]'>
        <div className=' w-[40%] h-[400px] ml-[100px]'>
          <div className='flex'>
           <p className='text-[12px] font-bold ml-2 mt-1' >Enter Your Name</p>
           {error?  <p className=' ml-2 mt-1 font-bold text-[12px]' style={{color: color}}>Invalid Input</p>:""}
          </div>
           <input type="text" onChange={inputData} className='border-[1px] ml-2 mt-2 w-full border-black rounded-md'/><br />
           <div className='flex'>
           <p className='text-[12px] font-bold ml-2 mt-1' >Enter Your Email</p>
           {userErr?  <p className=' ml-2 mt-1 font-bold text-[12px]' style={{color: color}}>Invalid Input</p>:""}
           </div>
           <input type="email" onChange={secondData} className='border-[1px] ml-2 w-full border-black rounded-md mt-2'/><br />
           <p className='text-[12px] font-bold ml-2 mt-1'>Enter Discription</p>
           <input  className='  h-[200px] ml-2 w-full border-[1px] border-black my-2 rounded-md'/><br />
           <button type='submit' className='rounded-md font-bold bg-gray-400 px-3 py-1 ml-2 hover:bg-gray-600'>Submit</button>
        </div>
        <div className=' h-[400px] w-[40%]'>
          <div className='flex'>
            <FaFacebook className='ml-5 mt-12 text-2xl'/>
            <p className='mt-12 ml-3 font-bold text-[13px]'>Khizarazam</p>
          </div>
          <div className='flex'>
            <FaEnvelope className='ml-5 mt-12 text-2xl'/>
            <p className='mt-12 ml-3 font-bold text-[13px]'>Khizarazam143@gmail.com</p>
          </div>
          <div className='flex'>
            <FaGithub className='ml-5  mt-12 text-2xl'/>
            <p className='mt-12 ml-3 font-bold text-[13px]'>Khizarazam/github.com</p>
          </div>
          <div className='flex'>
            <FaInstagram className='ml-5 mt-12 text-2xl'/>
            <p className='mt-12 ml-3 font-bold text-[13px]'>__Khizar_143</p>
          </div>
        </div>
       </div>
      </form>
    </>
  )
}
