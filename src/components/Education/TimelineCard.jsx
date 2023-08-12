import React from 'react'

const TimelineCard = ({ position, icon, title, institute, qualification, achievements }) => {
     return (
          <div className={`mb-8 flex justify-between items-center ${position === 'right' ? 'w-full right-timeline' : 'flex-row-reverse left-timeline'}`}>
               <div className="order-1 w-5/12"></div>
               <div className={`z-10 flex items-center order-1 ${position === 'right' ? 'bg-green-600' : 'bg-red-500'} shadow-xl w-8 h-8 rounded-full`}>
                    <h1 className="mx-auto font-semibold text-lg text-white">{icon}</h1>
               </div>
               {/* card content starts */}
               <div className={`order-1 p-6 rounded-lg bg-gradient-to-r ${position === 'right' ? 'from-cyan-500 via blue-500 to-indigo-500' : 'from-indigo-500 via blue-500 to-cyan-500'} shadow-xl w-5/12 px-6 py-4`}>
                    <h3 className="text-lg font-bold text-primary duration-300 transition ease-in-out">{title}</h3>
                    <p className="text-md mt-2 font-lg tracking-wide text-white text-opacity-100">{institute}</p>
                    <div>
                         <p className="text-md mt-4 tracking-wide text-white">{qualification}</p>
                         <ul className='text-white list-disc list-outside ml-8 mt-2'>
                              {achievements.map((achievement) => (
                                   <li>
                                        <p>{achievement}</p>
                                   </li>
                              ))}
                         </ul>
                    </div>
               </div>
               {/* card content ends */}
          </div>
     )
}

export default TimelineCard