import React, { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import TimelineCard from './TimelineCard';
import { FaUniversity, FaSchool } from 'react-icons/fa';

const Timeline = () => {
     useEffect(()=>{
          AOS.init()
          AOS.refresh()
     }, []);
     return (
          <div className="container mx-auto h-full">
               <div className="relative wrap overflow-hidden p-10 h-full">
                    <div className="border-2-2 absolute border-opacity-20 border-white-200 h-full border left-[50%] z-0"></div>
                    <TimelineCard 
                         position={'right'} 
                         icon={<FaUniversity/>} 
                         title={"Bachelor's Degree"}
                         institute={"University of Colombo\nSchool of Computing"}
                         qualification={"Bsc. (Hons) in Information Systems"}
                         achievements={["3rd year Undergraduate", "GPA - 3.789"]}
                    />
                    <TimelineCard 
                         position={'left'} 
                         icon={<FaSchool/>} 
                         title={"Higher Education"}
                         institute={"Rahula College, Matara"}
                         qualification={"GCE A/L Examination"}
                         achievements={["Mathematics - B", "Physics - C", "Chemistry - C"]}
                    />
               </div>
          </div>
     )
}

export default Timeline