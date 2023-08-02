import React from 'react'
import { BsGithub, BsLinkedin, BsTwitter, BsMedium } from 'react-icons/bs';
import { Tooltip } from 'react-tooltip';

const SideBar = () => {
     return (
          <div className='block fixed top-[25%] z-10'>
               <div className='flex flex-col'>
                    <a href="https://github.com/DinithKumudika" className='rounded-full shadow-md bg-gray-200 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300' data-tooltip-id='github' data-tooltip-content='GitHub' data-tooltip-place='right'>
                         <Tooltip id='github' />
                         <BsGithub size={20}/>
                    </a>
                    <a href="https://www.linkedin.com/in/dinith-kumudika/" className='rounded-full shadow-md bg-gray-200 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300' data-tooltip-id='linkedin' data-tooltip-content='LinkedIn' data-tooltip-place='right'>
                         <Tooltip id='linkedin' />
                         <BsLinkedin size={20} color='#0A66C2'/>
                    </a>
                    <a href="https://twitter.com/DinithKumudika" className='rounded-full shadow-md bg-gray-200 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300' data-tooltip-id='twitter' data-tooltip-content='Twitter' data-tooltip-place='right'>
                         <Tooltip id='twitter' />
                         <BsTwitter size={20} color='#1DA1F2'/>
                    </a>
                    <a href="https://medium.com/@dinithwalpitagama" className='rounded-full shadow-md bg-gray-200 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300' data-tooltip-id='medium' data-tooltip-content='Medium' data-tooltip-place='right'>
                         <Tooltip id='medium' />
                         <BsMedium size={20} color='black'/>
                    </a>
               </div>
          </div>
     )
}

export default SideBar