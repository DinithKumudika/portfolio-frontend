import React from 'react'
import { FaUniversity, FaSchool } from 'react-icons/fa';

const Timeline = () => {
     return (
          <div className="container mx-auto h-full">
               <div className="relative wrap overflow-hidden p-10 h-full">
                    <div className="border-2-2 absolute border-opacity-20 border-white-200 h-full border left-[50%]"></div>
                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                         <div className="order-1 w-5/12"></div>
                         <div className="z-5 flex items-center order-1 bg-green-600 shadow-xl w-8 h-8 rounded-full">
                              <h1 className="mx-auto font-semibold text-lg text-white"><FaUniversity/></h1>
                         </div>
                         <div className="order-1 p-6 rounded-lg bg-gradient-to-r from-cyan-500 via blue-500 to-indigo-500 shadow-xl w-5/12 px-6 py-4">
                              <h3 className="text-lg font-bold text-primary duration-300 transition ease-in-out">Bachelor's Degree</h3>
                              <p className="text-md mt-2 font-lg tracking-wide text-white text-opacity-100">University of Colombo</p>
                              <p className="text-md mt-2 font-lg tracking-wide text-white text-opacity-100">School of Computing</p>
                              <div>
                                   <p className="text-md mt-4 tracking-wide text-white">Bsc. (Hons) in Information Systems</p>
                                   <ul className='text-white list-disc list-outside ml-8 mt-2'>
                                        <li>
                                             <p>3rd year Undergraduate</p>
                                        </li>
                                        <li>
                                             <p>GPA - 3.789</p>
                                        </li>
                                   </ul>
                              </div>
                         </div>
                    </div>
                    <div className="mb-8 flex justify-between flex-row-reverse items-center left-timeline">
                         <div className="order-1 w-5/12"></div>
                         <div className="z-5 flex items-center order-1 bg-red-500 shadow-xl w-8 h-8 rounded-full">
                              <h1 className="mx-auto text-white font-semibold text-lg"><FaSchool/></h1>
                         </div>
                         <div className="order-1 p-6 rounded-lg bg-gradient-to-r from-indigo-500 via blue-500 to-cyan-500 shadow-xl w-5/12 px-6 py-4">
                              <h3 className="text-lg font-bold text-primary duration-300 transition ease-in-out">Higher Education</h3>
                              <p className="text-md mt-2 font-lg tracking-wide text-white text-opacity-100">Rahula College, Matara</p>
                              <div>
                                   <p className="text-md mt-4 tracking-wide text-white">GCE A/L Examination</p>
                                   <ul className='text-white list-disc list-outside ml-8 mt-2'>
                                        <li>
                                             <p>Mathematics - B</p>
                                        </li>
                                        <li>
                                             <p>Physics - C</p>
                                        </li>
                                        <li>
                                             <p>Chemistry - C</p>
                                        </li>
                                   </ul>
                              </div>
                         </div>
                    </div>
                    
               </div>
          </div>
     )
}

export default Timeline