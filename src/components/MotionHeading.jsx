"use client";
import {motion} from 'framer-motion'

const MotionHeading = ({initial,animate,className,  children }) =>  {
    
    const wrapper = {
      hidden:{
          opacity:0
      },
      visible:{
          opacity:1,
          transition:{
              staggerChildren:0.25,
          }
      }
  }
  
  const list = {
      hidden:{opacity:0, x:-100},
      visible:{
          opacity:1,
          x:0,
          transition:{duration:0.5 , ease:[0.455, 0.03, 0.515, 0.955], delay:1}
      }
  }
  const container = {
      visible:{
          transition:{
              staggerChildren:0.025
          }
      }
  }
    
  
    return (
      <>
        <motion.h1 initial={initial} animate={animate} variants={container} className={className}>
            {children}
        </motion.h1>
      </>
    );
  }


  export default MotionHeading