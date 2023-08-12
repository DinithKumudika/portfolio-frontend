import React, { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"

const SectionHeading = ({ title }) => {
     useEffect(()=>{
          AOS.init()
          AOS.refresh()
     }, []);

     return (
          <div className="text-white " data-aos="fade-up">
               <h2>{title.toUpperCase()}</h2>
          </div>
     ) 
}

export default SectionHeading;