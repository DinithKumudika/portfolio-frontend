import React from 'react';
import { images } from '../constants';

const About = ({title, id}) => {
     return (
          <div id={id} className="w-full h-screen bg-gradient-to-b from-black to-gray-800 pt-5 pb-5">
               <div className='text-white flex justify-center pt-5 pb-5 text-[35px]'>{title}</div>
               <div className='flex justify-center items-center gap-10'>
                    <div className='text-white w-[40%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Distinctio rerum deserunt quisquam! Nostrum, 
                    hic ipsam dolorem quod illo, optio aliquam nemo quaerat voluptatem delectus minima nihil, 
                    impedit quos recusandae ipsa!</div>
                    <img src={images.devImage} alt="" className='w-[300px] h-[300px] rounded-full' />
               </div>
          </div>
     )
}

export default About;