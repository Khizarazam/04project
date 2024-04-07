import React, { useState} from 'react'

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
      <div className='  w-[80%] h-[468px] ml-[120px] pt-[35px]'>
        <div className=' w-[80%] h-[400px] ml-[100px] border-2 border-black'>
          <div className='flex'>
           <p className='text-[12px] ml-2 mt-1' >Enter Your Name</p>
           {error?  <p className=' ml-2 mt-1 text-[12px]' style={{color: color}}>Invalid Input</p>:""}
          </div>
           <input type="text" onChange={inputData} className='border-[1px] ml-2 mt-2 w-[40%] border-black rounded-md'/><br />
           <div className='flex'>
           <p className='text-[12px] ml-2 mt-1' >Enter Your Email</p>
           {userErr?  <p className=' ml-2 mt-1 text-[12px]' style={{color: color}}>Invalid Input</p>:""}
           </div>
           <input type="email" onChange={secondData} className='border-[1px] ml-2 w-[40%] border-black rounded-md mt-2'/><br />
           <p className='text-[12px] ml-2 mt-1'>Enter Discription</p>
           <input  className='  h-[200px] ml-2 w-[40%] border-[1px] border-black my-2 rounded-md'/><br />
           <button type='submit' className='rounded-md bg-gray-400 px-3 py-1 ml-2 hover:bg-gray-600'>Submit</button>
        </div>
       </div>
      </form>
    </>
  )
}
