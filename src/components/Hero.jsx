import Image from 'next/image'
import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const Hero = async () => {
   
  const response = await fetch('https://sellmac.cybersify.tech/secure365/wp-json/secure-plugin/v1/banner');

  const data = await response.json();

  console.log(data, 'data')
    


  return (
    <section className='relative overlay' style={{background: 'url(/Images/banner_img.png)'}}>
      
      <div className='relative container mx-auto grid grid-cols-1 gap-6 lg:gap-0 md:grid-cols-2 items-center justify-between px-4 sm:px-6 lg:px-8 pt-10 sm:pt-20 pb-20 sm:pb-28'>
        <div className='flex flex-col gap-y-4 justify-center items-center text-center sm:items-start sm:text-start'>
         
          <h1 className='tracking-tighter text-3xl sm:text-5xl lg:text-6xl xl:text-7xl	 max-w-sm sm:max-w-lg	text-white	banner_heading'>
          <span>Expert Business</span> IT Services <strong className='primary_color'>All in One Place</strong>
            {/* <span className='text-emerald-600'>inifarhan</span> */}
          </h1>
          <h2 className='max-w-md sm:max-w-[42rem] leading-normal text-muted-foreground text-sm sm:text-xl text-white	 sm:leading-8'>
          From cybersecurity to cloud solutions, we’ve got your business covered—securely and efficiently
          </h2>
          <div className='flex flex-wrap items-center text-white gap-4 mt-5'>
            <a href='/products' className='btn_one global_btn'>
             Get Started
            </a>
            <Link
              href='/dashboard/stores'
              className='global_btn btn_two'
            >
             Book Demo
            </Link>
          </div>
        </div>
        <div className='flex items-center justify-center md:justify-end'>
          <Image
            priority
            src='/svg/hero.svg'
            className='rounded-full'
            alt='Hero image'
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero