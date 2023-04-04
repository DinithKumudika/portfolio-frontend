import React, { useState } from 'react';
import { HiMenuAlt2, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { easeInOut, motion } from 'framer-motion';
import './Navbar.scss';
import { images, nav } from '../../constants';

const Navbar = () => {

     const [toggle, setToggle] = useState(false);
     // const [scrolled, setScrolled] = useState(false);

     return (
          <nav className='w-full flex py-6 justify-between items-center navbar'>
               <img src={images.logo} alt="logo" className="w-[124px] h-[32px]"/>
               <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                    {nav.map((navItem) => (
                         <li key={navItem.id} className='font-poppins'>
                                   <a href={`#${navItem.id}`}>{navItem.title}</a>
                         </li>
                    ))}
               </ul>
               <div className='nav__menu'>
                    <HiMenuAlt2 onClick={()=> setToggle(true)} />
                    {toggle && (
                         <motion.div
                              whileInView={{x: [300, 0]}}
                              transition={{duration: 0.85, ease: easeInOut}}
                         >
                              <HiX onClick={()=>{setToggle(false)}} />
                         </motion.div>
                    )}
               </div>
          </nav>
     )
}

export default Navbar;