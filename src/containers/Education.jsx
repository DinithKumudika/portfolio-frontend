import React from 'react'
import { EducationTimeline } from '../components'

const Education = ({title, id}) => {
     return (
          <div id={id} className="w-full h-screen bg-gradient-to-b from-black to-gray-800 pt-5 pb-5">
               <div className='text-white flex justify-center pt-5 pb-5 text-[35px]'>{title}</div>
               <EducationTimeline/>
          </div>
     )
}

export default Education