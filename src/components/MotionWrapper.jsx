"use client";

import { motion } from "framer-motion";

const FadeUp = (delay) => {
  return {
    initial: {
     opacity: 0,
     y: 50
    },
    animate: {
      opacity: 1,
      y:0, 
      transition: {
        type: 'string',
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: 'easeInOut'
      }
    }
  }
}

export const MotionWrapper = ({ children, delay = 0 }) => {
  // Define the animation logic here
  const SlideLeft = (delay) => ({
    initial: { opacity: 0, x: -50 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: delay, // Delay based on the prop passed
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  });

  return (
    <motion.div
      variants={SlideLeft(delay)} // Pass the delay calculated outside
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.5 }}
      className="hover:scale-110 duration-300 hover:shadow-2xl"
    >
      {children} {/* Render the children passed to this component */}
    </motion.div>
  );
};

export const MotionHeading = ({ children, delay = 0 }) => {

 
  return (
    <motion.h1
      variants={FadeUp(delay)} // Pass the delay here
      initial="initial"
      animate="animate"
      className="banner_heading"
    >
      {children} {/* Render the children passed to this component */}
    </motion.h1>
  );
};


export const MotionHead2= ({ children, delay = 0 }) => {

 
  return (
    <motion.h2
      variants={FadeUp(delay)} // Pass the delay here
      initial="initial"
      animate="animate"
      className="banner_heading font-Axiforma" 
    >
      {children} {/* Render the children passed to this component */}
    </motion.h2>
  );
};


export const MotionDiv= ({ children, delay = 0 }) => {
  return (
    <motion.div
      variants={FadeUp(delay)} // Pass the delay here
      initial="initial"
      animate="animate"
      className="banner_heading font-Axiforma"
    >
      {children} {/* Render the children passed to this component */}
    </motion.div>
  );
};