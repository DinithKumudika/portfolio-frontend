import React, { useState } from 'react';
import { HiMenuAlt2, HiX } from 'react-icons/hi';
import { easeInOut, motion } from 'framer-motion';
import { nav } from '../constants';

const Navbar = () => {

     const [toggle, setToggle] = useState(false);
     // const [scrolled, setScrolled] = useState(false);

     return (
          <nav className='w-full flex py-6 justify-between items-center navbar'>
               <div>
                    <h1 className='text-5xl ml-2 text-white'>Dinith</h1>
               </div>
               <ul className="list-none hidden md:flex justify-end items-center flex-1">
                    {nav.map(({ id, title }, index) => (
                         <li key={id} className={`text-[16px] cursor-pointer font-normal text-white hover:scale-105 duration-200 ${index === nav.length - 1 ? 'mr-0' : 'mr-10'}`}>
                              <a href={`#${id}`}>{title}</a>
                         </li>
                    ))}
               </ul>
               <div className='cursor-pointer pr-4 z-10 text-white md:hidden' onClick={()=>setToggle(!toggle)}>
                    {toggle ? <HiX size={30} onClick={() => setToggle(true)} /> : <HiMenuAlt2 size={30} />}
               </div>

               {toggle && (
                    <motion.ul className="flex flex-col justify-center items-center absolute top-0 right-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500" 
                         whileInView={{ x: [300, 0] }}
                         transition={{ duration: 0.5, ease: 'easeOut' }}
                    >
                         {nav.map(({ id, title }) => (
                              <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl text-gradient">
                                   {title}
                              </li>
                         ))}
                    </motion.ul>
               )}
          </nav>
     )
}

export default Navbar;