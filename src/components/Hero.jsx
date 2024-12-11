



'use client';

import { useState, useEffect } from 'react';
// import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
// import ImageCard from './cards/ImageCard';
import Image from 'next/image'
import { Images } from 'lucide-react';


const Hero = () => {
  const [data, setData] = useState(null);

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




  // Fetch data on the client side using useEffect
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://sellmac.cybersify.tech/secure365/wp-json/secure-plugin/v1/banner', {
        cache: 'no-store',
      });
      const result = await response.json();
      console.log(result, 'result')
      setData(result); // Store the fetched data in state
    };

    fetchData();
  }, []); // Empty dependency array ensures the fetch happens only once when the component mounts

  // If data is not loaded yet, show a loading message
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
   
      <Image src="/Images/homepage_banner.png" className='absolute' layout='fill' alt='background image' />
      <div className='relative container mx-auto grid grid-cols-1 gap-6 lg:gap-0 md:grid-cols-2 items-center justify-between  lg:px-8 pt-24 sm:pt-24 pb-0 min_height'>
        <div className='flex flex-col gap-y-4 justify-center items-center text-center sm:items-start sm:text-start pb-10'>
          <motion.h1
           variants={FadeUp(0.6)}
           initial="initial"
           animate="animate"
           className='banner_heading font-Axiforma'>
            <span className='banner_heading_medium'>{data?.pages?.banner_heading}</span>
            <span className='mr-3'> {data?.pages?.banner_heading_second}</span>
            <span className='text_blue'>{data?.pages?.banner_heading_thired}</span>
          </motion.h1>
          <motion.p
           variants={FadeUp(0.8)}
           initial="initial"
           animate="animate"
           className='max-w-md sm:max-w-[39rem] leading-normal text-muted-foreground text-sm sm:text-xl text-white sm:leading-8'>
            {data?.pages?.banner_sub_headline}
          </motion.p>
          <motion.div
           variants={FadeUp(1)}
           initial="initial"
           animate="animate"
           className='flex flex-wrap items-center text-white gap-4 mt-5'>
            <a href='/products' className='btn_one global_btn capitalize'>
              {data?.pages?.get_started}
            </a>
            <Link href='/dashboard/stores' className='global_btn btn_two capitalize'>
              {data?.pages?.book_demo}
            </Link>
          </motion.div>
        </div>
        <div
              
              className='flex items-center justify-center md:justify-end'>
          <motion.img
           initial={{y:-100, opacity: 0}}
           animate={{y:0, opacity: 1}}
           transition={{duration: 0.9, delay: 0.4, ease: "easeInOut"}}
           priority
           src={data?.pages?.banner_image?.url}
           className='banner_absolute'
           alt='Hero image'
           width={500}
           height={500}
           objectFit='cover'
           />
        </div>
      </div>

           </>
  );
};

export default Hero;
