import React from 'react';
import { HiOutlineDownload } from 'react-icons/hi';
import './Home.scss';

const Home = ({title, id}) => {
     return (
          <div id={id} className='flex w-full h-screen bg-gradient-to-b from-black to-gray-800'>
               <div>
                    <h2>Hello, I'm Dinith Kumudika</h2>
                    <p>A Full Stack Developer</p>
               </div>
               <div>
                    <button>
                         Download CV
                         <span>
                              <HiOutlineDownload />
                         </span>
                    </button>
               </div>
          </div>
     );
}

export default Home;