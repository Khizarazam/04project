
import { FaArrowAltCircleUp } from "react-icons/fa";


 function Top() {
    function scrollToTop(){
       window.scrollTo({
         top: 0,
         behavior: 'smooth'
       })  
    }
  return (
    <>
      <button className=' absolute top-[930px] right-4 text-4xl' onClick={scrollToTop}><FaArrowAltCircleUp /></button>
    </>
  )
}

export default Top;