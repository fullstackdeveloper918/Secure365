"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";


const RevealAnimation = ({hidden, visible,transition, children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    
    if (isInView) {
      console.log(isInView, "isInView");
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
  
    <div ref={ref}
      style={{ position: "relative", width: "fit-content"}}
      >
      <motion.div
        variants={{
          hidden: hidden,
          visible:visible,
        }}
        initial="hidden"
        animate={mainControls}
        transition={transition}
        >
        {children}
      </motion.div>
    </div>
    
  );
};

export default RevealAnimation;
