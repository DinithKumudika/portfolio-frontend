import React from 'react';
import { motion } from 'framer-motion';
import BackDrop from './BackDrop';

const Modal = ({ handleClose, content }) => {

     const dropIn = {
          hidden: {
               y: "-100vh",
               opacity: 0
          },
          visible: {
               y: 0,
               opacity: 1,
               transition: {
                    duration: 0.1,
                    type: "spring",
                    damping: 25,
                    stiffness: 500
               }
          },
          exit: {
               y: "100vh",
               opacity: 0
          }
     };

     return (
          <BackDrop onClick={handleClose}>
               <motion.div
                    onClick={(e) => e.stopPropagation()}
                    className='m-auto pr-2 pl-2 border-r-4 flex flex-col items-center max-w-lg'
                    variants={{dropIn}}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
               >
                    <div>{content}</div>
                    <button onClick={handleClose}>Close</button>
               </motion.div>
          </BackDrop>
     )
}

export default Modal;