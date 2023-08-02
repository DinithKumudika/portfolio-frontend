import React from 'react';
import { HiOutlineDownload } from 'react-icons/hi';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { images } from '../constants';

const Home = ({ title, id }) => {
     return (
          <div id={id} className='w-full h-screen bg-gradient-to-b from-black to-gray-800 pt-5 pb-5'>
               <img className='w-full h-screen object-cover object-left blur-sm' src={images.hero} alt="" />
               <div className='w-full h-screen absolute top-0 left-0 bg-black/30'>
                    <div className='sm:max-w-[700px] xs:max-w-[440px] h-full w-full flex flex-col justify-center lg:items-start md:items-center md:ml-40 sm:ml-20 xs:ml-20'>
                         <motion.h1 initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.5 }}
                              className='text-white sm:text-5xl text-4xl'>Hello, I'm Dinith Kumudika
                         </motion.h1>
                         <motion.h2 initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.8 }} 
                              className='text-white text-3xl mt-5'>I'm a
                              <TypeAnimation
                                   sequence={[
                                        // Same substring at the start will only be typed out once, initially
                                        'Web Developer',
                                        2000,
                                        'Mobile App Developer',
                                        2000,
                                        'Cinephile',
                                        2000
                                   ]}
                                   wrapper="div"
                                   speed={50}
                                   style={{ fontSize: '30px', display: 'inline-block', paddingLeft: '10px', fontWeight: 'bold' }}
                                   className='bg-gradient-to-r from-cyan-500 to-indigo-500 text-transparent bg-clip-text'
                                   repeat={Infinity}
                              />
                         </motion.h2>
                         <div className='mt-10'>
                              <motion.button
                                   initial={{opacity: 0, x: -1000 }}
                                   animate={{opacity: 1, x: 0 }}
                                   transition={{ duration: 1, delay: 0.5 }}
                                   className='flex justify-center items-center bg-gradient-to-r from-cyan-500 via blue-500 to-indigo-500 rounded-lg text-white px-4 py-2 w-auto'
                              >
                                   <HiOutlineDownload size={20} className='mr-3' />
                                   Download CV
                              </motion.button>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Home;