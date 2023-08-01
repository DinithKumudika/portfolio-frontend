import React from 'react'
import { HiArrowUp } from 'react-icons/hi';
import { useEffect } from 'react'
import { useState } from 'react'
import { animateScroll as scroll } from "react-scroll"

const ScrollToTop = () => {
     const [scrollToTop, setScrollToTop] = useState(false);

     useEffect(() => {
          window.addEventListener('scroll', () => {
               if (window.scrollY > 100) {
                    setScrollToTop(true)
               }
               else {
                    setScrollToTop(false)
               }
          })
     }, [])

     return (
          <button
               className={`
                    fixed bottom-4 right-4 z-50 p-3 rounded-full bg-primary text-white shadow-md hover:shadow-lg 
                    ${scrollToTop ? 'block' : 'hidden'}`
               }
               onClick={scroll.scrollToTop}
          >
               <HiArrowUp size={24} />
          </button>
     )
}

export default ScrollToTop