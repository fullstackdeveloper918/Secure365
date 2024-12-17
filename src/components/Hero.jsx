import Link from 'next/link';
import ImageCard from './cards/ImageCard';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';



export async function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve,ms))
}


const Text = dynamic(() => wait(2000).then(() => import('@/components/Text')))


export default async function Hero() {

  const response = await fetch(
    "https://sellmac.cybersify.tech/secure365/wp-json/secure-plugin/v1/banner",
    {
      cache: "no-store",
    }
  );
  const data = await response.json();
  return (
    <>
   
  
      <div className='relative herobanner container mx-auto grid grid-cols-1 gap-6 lg:gap-0 md:grid-cols-2 items-center justify-between  lg:px-8  pt-20 sm:pt-24 pb-0' >
        <div className='flex flex-col gap-y-4 justify-center  md:text-left items-baseline  pb-10'>
          <Suspense fallback={<p>Loading Heading...</p>}>

          <Text tag="h1"
           className='banner_heading font-Axiforma'>
            <span className='banner_heading_medium'>{data?.pages?.banner_heading}</span>
            <span className='mr-3'> {data?.pages?.banner_heading_second}</span>
            <span className='text_blue'>{data?.pages?.banner_heading_thired}</span>
          </Text>
             </Suspense>
          <p
         
           className='max-w-md sm:max-w-[39rem] maxWidth leading-normal text-muted-foreground text-sm sm:text-xl text-white sm:leading-8 font-Axiforma'>
            {data?.pages?.banner_sub_headline}
          </p>
          <div
           className='flex flex-wrap   text-white gap-4 mt-5'>
            <a href='/products' className='btn_one global_btn capitalize font-Axiforma'>
              {data?.pages?.get_started}
            </a>
            <Link href='/dashboard/stores' className='global_btn btn_two capitalize font-Axiforma'>
              {data?.pages?.book_demo}
            </Link>
          </div>
        </div>
        <div className='flex items-center justify-center rightbanner'>
          {/* <ImageCard
           src={data?.pages?.banner_image?.url}
           className='banner_rotate'
           alt='Hero image'
           width={500}
           height={500}
           objectFit='cover'
           /> */}
           <ImageCard
           src='/Images/bannerright_img.png'
           className='banner_rotate'
           alt='Hero image'
           width={550}
           height={550}
           objectFit='cover'
           />
        </div>
      </div>
           </>
  );
};

