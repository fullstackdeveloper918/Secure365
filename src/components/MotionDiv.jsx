"use client";

// MotionDiv.js
import { motion } from 'framer-motion';

const MotionDiv = ({ children, initial, animate, transition }) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
