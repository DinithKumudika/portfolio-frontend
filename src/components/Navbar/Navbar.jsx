import React, { useState } from 'react';
import { HiMenuAlt2, HiX } from 'react-icons/hi';
import { easeInOut, motion } from 'framer-motion';
import './Navbar.scss';
import { images } from '../../constants';

const Navbar = () => {

     const [toggle, setToggle] = useState(false);

     const nav = ['home', 'about', 'skills', 'projects', 'contact'];

     return (
          <nav className='nav'>
               <div className='nav__logo'>
                    <img src={images.logo} alt="logo" className='nav__logo'/>
               </div>
               <ul className='nav__links'>
                    {nav.map((navItem) => {
                         <li key={`nav-${nav.indexOf(navItem)}`} className='app__flex p-text'>
                                   <a href={`#${navItem}`}>{navItem}</a>
                         </li>
                    })}
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