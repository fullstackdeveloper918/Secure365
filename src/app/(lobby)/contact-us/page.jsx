import React from 'react'
import Image from "next/image";
import Text from "@/components/Text";
// import React, { Suspense } from "react";
const Contact = () => {
  return (
    <>
      <section className="relative overlay about_banner text-center">
        <Image
          src="/Images/contact_banner.png"
          className="absolute"
          layout="fill"
          alt=" about Background image"
          objectFit="cover"
        />
        <div className="relative container mx-auto  px-4 sm:px-6 lg:px-8 pt-20  pb-0 ">
          <Text
            tag="h1"
            className="tracking-tighter text-3xl font-Axiforma  lg:text-5xl xl:text-5xl	 text-center 	text-white	banner_heading"
          >
            Get in Touch with
            <Text tag="span" className="text_blue mx-2 block">
              {" "}
              Secure365—Your Trusted IT Partner
            </Text>

          </Text>
          <Text
            tag="p"
            className="text-white md:max-w-[40%] mx-auto md:my-7 mt-5 md:text-xl text-md font-Axiforma"
          >
            Have a question or need support? Our team is ready to help you secure, optimize, and grow your business
          </Text>
        </div>
      </section>

      <section className='reachForm md:py-20  py-10'>
        <div className="container">
          <div className="flex ">

            {/* left wrapper  */}
            <div className='leftReachWrapper w-[55%] '>
              <div className='xl:max-w-[60%]'>
                <h2>How to Reach Us</h2>
                <p className='text-[#707070] text-md font-Axiforma'>We make it easy for you to get in touch, whether you prefer a quick phone call, a detailed email, or scheduling a consultation at a time that works for you.</p>
                <ul className='my-5'>
                  <li className='flex gap-5 border-t border-[#DADADA] py-10 items-center'>
                    <Image src="/Images/call.png" alt='call image' width={60} height={60} />
                    <div>
                      <h3 className='text-[#111111] text-2xl font-normal font-Axiforma'>+(800) 311-5990</h3>
                      <p className='text-[#707070] text-xl font-Axiforma mt-3'>Call Now and Get a FREE Consultation</p>
                    </div>
                  </li>
                  <li className='flex gap-5 border-t border-[#DADADA] py-10 items-center'>
                    <Image src="/Images/email.png" alt='call image' width={60} height={60} />
                    <div>
                      <h3 className='text-[#111111] text-2xl font-normal font-Axiforma'>info@secure365.com</h3>
                    </div>
                  </li>
                  <li className='flex gap-5 border-t border-[#DADADA] py-10 items-center'>
                    <Image src="/Images/timer.png" alt='call image' width={60} height={60} />
                    <div>
                      <h3 className='text-[#111111] text-2xl font-normal font-Axiforma'>Monday - Friday, 9:00 AM - 5:00 PM CST</h3>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* right wrapper  */}

            <div className='leftReachWrapper w-[45%]'>
              <form>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-6 mb-4'>
                  <input placeholder='First name' className='bg-[#F7F7F7] border-[#CACACA] text-[#555] md:text-xl text-md px-5 py-4 rounded-[30px]' />
                  <input placeholder='Last name' className='bg-[#F7F7F7] border-[#CACACA] text-[#555] md:text-xl text-md px-5 py-4 rounded-[30px]' />
                </div>
                <div className='w-full mb-4'>
                  <input placeholder='Company name' className='bg-[#F7F7F7] border-[#CACACA] text-[#555] md:text-xl text-md px-5 py-4 rounded-[30px] w-full' />
                </div>
                <div className='w-full mb-4'>
                  <input placeholder='Email' className='bg-[#F7F7F7] border-[#CACACA] text-[#555] md:text-xl text-md px-5 py-4 rounded-[30px] w-full' />
                </div>
                <div className='w-full mb-4'>
                  <input placeholder='Phone number' className='bg-[#F7F7F7] border-[#CACACA] text-[#555] md:text-xl text-md px-5 py-4 rounded-[30px] w-full' />
                </div>
                <div className='w-full mb-4'>
                  <input placeholder='How Can We Help?' className='bg-[#F7F7F7] border-[#CACACA] text-[#555] md:text-xl text-md px-5 py-4 rounded-[30px] w-full' />
                </div>
                <div className='w-full mb-4'>
                  <textarea className='bg-[#F7F7F7] border-[#CACACA] text-[#0e0e0e] p-5 rounded-[30px] md:text-xl text-md w-full'>Message</textarea>
                </div>
                <div className='w-full mb-4'>
                  <input type="radio" />
                  <label className='text-[#949090] md:text-xl text-md ml-3 scale-50 accent-black'>I agree to the <a href="" className='underline text-[#949090] underline-offset-[0.5px]'>terms & conditions | privacy policy</a></label>
                </div>
                <button className='btn_one global_btn capitalize font-Axiforma mt-4 text-white'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className='py-20'>
        <div className="container">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center md:gap-20">
            <div className='relative h-full w-full shadow-sm border-1 border-[#333]' >
              <Image src="/Images/scheduleimg.png"  alt="img" layout='fill' objectFit='cover' />
            </div>
            <div>
              <h2>Schedule a Consultation</h2>
              <p>Looking for a more in-depth discussion? Schedule a one-on-one consultation with one of our specialists. </p>
              <p>We’ll take the time to understand your needs and provide personalized guidance on the best solutions for your business</p>
            </div>
          </div>
        </div>
      </section>


      <section className='bg-[#E2F5FC]  '>
        <div className="grid md:grid-cols-2 grid-cols-1 items-center md:gap-10">
          <div className='relative h-full w-full'>
            <Image src="/Images/locationimg.png" alt="img" className='absolute' layout='fill' objectFit='cover'  />
          </div>
          <div className='py-24'>
            <h2>Our Location</h2>
            <p>While we proudly serve clients across the globe, our primary office is located in Arlington Heights, IL. We also offer remote consultations and services to ensure that wherever you are, Secure365 is there to support you</p>
            <ul className='my-5'>
              <li className='flex gap-5 border-t border-[#DADADA] py-10 items-center'>
                <Image src="/Images/locationIcon.png" alt='call image' width={60} height={60} />  
                <div>
                      <h3 className='text-[#111111] text-2xl font-normal font-Axiforma'>Headquarters</h3>
                      <p className='text-[#707070] text-xl font-Axiforma mt-3'>1512 E Algonquin Rd, Arlington Heights, IL 60005</p>
                    </div>            
              </li>
            </ul>
          </div>

        </div>
      </section>



        {/* <section>
          <div className="container">
            <h2>Why Contact Secure365?</h2>
          </div>
        </section> */}
        <section className='md:py-20 py-10'>
          <div className="container">
           <div className="grid md:grid-cols-2 grid">
           <div>
              <h2>Our Promise</h2>
              <p className='md:mt-10 mt-5 md:mb-10 mb-7 text-[#4F4F4F] text-2xl md:max-w-[80%]'>We handle the heavy lifting of server and cloud management, so you can focus on what matters most—your business. Secure365’s solutions are designed to streamline your IT operations, maximize security, and provide a stable foundation for growth. With us, you’ll have peace of mind knowing that your data is safe, your systems are optimized, and your business can scale effortlessly</p>
              <button className='btn_one global_btn capitalize font-Axiforma mt-4 text-white'>Contact us</button>
            </div>
            <div className='relative h-full w-full'>
              <Image src="/Images/promiseImage.png" alt='promise image' layout='fill' objectFit='contain' />
            </div>
            
           </div>
          </div>
        </section>
    </>
  )
}

export default Contact