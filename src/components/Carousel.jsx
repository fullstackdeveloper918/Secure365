'use client'; // To enable client-side rendering

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';


const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? children.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === children.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative flex flex-col items-center py-20">
      <div className="overflow-hidden w-[90rem] h-[20rem]">
        <motion.div
          className="flex"
          initial={{ x: 0 }}
          animate={{ x: -currentIndex * 320 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          {children}
        </motion.div>
      </div>
      <div className="flex flex-row w-full justify-between mt-6">
        <button onClick={prevSlide} className="bg-gray-100 p-3 rounded-full shadow transition-all hover:opacity-70">
          <ArrowLeft />
        </button>
        {/* <div className="flex flex-row gap-1">
          {children.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`cursor-pointer text-2xl ${index === currentIndex ? 'text-gray-800' : 'text-gray-400'}`}
            >
              •
            </div>
          ))}
        </div> */}
        <button onClick={nextSlide} className="bg-gray-100 p-3 rounded-full shadow transition-all hover:opacity-70">
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
