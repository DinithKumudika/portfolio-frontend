import React, { useState, useEffect } from 'react';
import { HiMenuAlt2, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import './Navbar.scss'
import { nav } from '../../constants';
import { Link, animateScroll as scroll } from "react-scroll"

const Navbar = () => {

     const [toggle, setToggle] = useState(false);
     const [scrolled, setScrolled] = useState(false);

     const scrollHandler = () => {
          if(window.scrollY >= 20){
               setScrolled(true)
          }
          else {
               setScrolled(false)
          }
     }

     useEffect(()=> {
          window.addEventListener('scroll', scrollHandler);
          return () => {
               window.removeEventListener('scroll', scrollHandler);
          }
     }, []);

     return (
          <nav className={`fixed top-0 left-0 right-0 w-full flex py-6 justify-between items-center navbar z-10 bg-primary ${scrolled ? 'backdrop-blur-md bg-opacity-80' : ''}`}>
               <div>
                    <h1 className='text-4xl ml-2 text-white cursor-pointer' id='logo' onClick={scroll.scrollToTop}>Dinith</h1>
               </div>
               <ul className="z-50 list-none hidden md:flex justify-end items-center flex-1">
                    {nav.map(({ id, title, link }, index) => (
                         <motion.li key={id} className={`nav-links px-4 cursor-pointer capitalize text-lg text-gray-400 hover:scale-105 hover:text-white duration-200 nav-link`}>
                              <Link to={link} smooth duration={300} spy={true} activeClass='text-blue'>
                                   {title}
                              </Link>
                         </motion.li>
                    ))}
               </ul>
               <div className='cursor-pointer pr-4 z-10 text-white md:hidden' onClick={() => setToggle(!toggle)}>
                    {toggle ? <HiX size={30} onClick={() => setToggle(true)} /> : <HiMenuAlt2 size={30} />}
               </div>

               {toggle && (
                    <motion.ul className="flex flex-col justify-center items-center absolute top-0 right-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500"
                         whileInView={{ x: [300, 0] }}
                         transition={{ duration: 0.5, ease: 'easeOut' }}
                    >
                         {nav.map(({ id, title, link }) => (
                              <motion.li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl text-gradient hover:text-white duration-200" whileTap={{ scale: 0.9 }}>
                                   <Link
                                        onClick={() => setToggle(!toggle)}
                                        to={link}
                                        spy={true}
                                        smooth
                                        duration={300}
                                   >
                                        {title}
                                   </Link>
                              </motion.li>
                         ))}
                    </motion.ul>
               )}
          </nav>
     )
}

export default Navbar;