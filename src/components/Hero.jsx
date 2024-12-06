import Image from 'next/image'
import Link from 'next/link'

// import { buttonVariants } from '@/components/ui/button'
// import { cn } from '@/lib/utils'

const Hero = async () => {
   
  const response = await fetch('https://sellmac.cybersify.tech/secure365/wp-json/secure-plugin/v1/banner', {
    cache: 'no-store'
  });

  const data = await response.json();

  console.log(data?.pages, 'data new chcek6  vfdkb dbfdbdfbf')
    


  return (
    
    <section className='relative overlay banner_robot' >
      <Image src="/Images/homepage_banner.png" className='absolute' layout='fill' alt='background image' />
      <div className='relative container mx-auto grid grid-cols-1 gap-6 lg:gap-0 md:grid-cols-2 items-center justify-between px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28  pb-0 min_height'>
        <div className='flex flex-col gap-y-4 justify-center items-center text-center sm:items-start sm:text-start'>
         
          <h1 className='tracking-tighter text-3xl sm:text-5xl lg:text-6xl xl:text-7xl	 max-w-sm sm:max-w-lg	text-white	banner_heading'>
          <span>{data?.pages?.banner_heading}</span>
            <span className='text-emerald-600'>{data?.pages?.banner_heading_second}</span>
          </h1>
          <h2 className='max-w-md sm:max-w-[42rem] leading-normal text-muted-foreground text-sm sm:text-xl text-white	 sm:leading-8'>
          {data?.pages?.banner_sub_headline}
          </h2>
          <div className='flex flex-wrap items-center text-white gap-4 mt-5'>
            <a href='/products' className='btn_one global_btn capitalize'>
              {data?.pages?.get_started}
            </a>
            <Link
              href='/dashboard/stores'
              className='global_btn btn_two capitalize'
            >
             {data?.pages?.book_demo}
            </Link>
          </div>
        </div>
        <div className='flex items-center justify-center md:justify-end'>
          <Image
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
    </section>
  )
}

export default Hero