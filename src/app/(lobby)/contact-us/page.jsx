import React from 'react'
import Image from "next/image";
import Text from "@/components/Text";
import { fetchData } from '@/lib/data';
import ImageCard from '@/components/cards/ImageCard';



const Contact = async() => {

  const contactData = await fetch(
    "https://sellmac.cybersify.tech/secure365/wp-json/secure-plugin/v1/contact",
    {
      cache: "no-store",
    }
  );
  const contactResponse = await contactData.json();

  return (
    <>
      <section className="relative overlay about_banner text-center">
        <ImageCard
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
          <div className="grid md:grid-cols-2 grid-cols-1 ">

            {/* left wrapper  */}
            <div className='leftReachWrapper xl:w-[60%] '>
              <div className=''>
                <Text tag="h2">{contactResponse?.data?.reach_contact_section_heading}</Text>
                <Text tag="p" className='text-[#707070] text-md font-Axiforma mt-4'>{contactResponse?.data?.reach_contact_section_paragraph}</Text>
                <ul className='my-5'>
                  {
                    contactResponse && contactResponse?.data?.reach_contact_us_by.map((item, index) => (
                      <React.Fragment key={index}>
                       <li className='flex gap-5 border-t border-[#DADADA] py-10 items-center'>
                    <ImageCard src={item?.reach_contact_section_image} alt='call image' width={60} height={60} />
                    <div>
                      <Text tag="h3" className='text-[#111111] text-2xl font-normal font-Axiforma'>+ {item?.reach_contact_us_by}</Text>
                      <Text tag="p" className='text-[#707070] text-xl font-Axiforma mt-3'>{item?.reach_contact_us_text}</Text>
                    </div>
                  </li>
                      </React.Fragment>
                    ))
                  }
                </ul>
              </div>
            </div>

            {/* right wrapper  */}

            <div className='leftReachWrapper  w-full'>
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
                  <textarea className='bg-[#F7F7F7] border-[#CACACA] text-[#0e0e0e] p-5 rounded-[30px] md:text-xl text-md w-full' placeholder='Message'></textarea>
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
            <div className='relative h-full w-full border-1 border-[#333] imgContain' >
              <ImageCard src="/Images/scheduleimg.png"  alt="img" layout='fill' objectFit='cover' />
            </div>
            <div className='py-20'>
              <Text tag="h2" className='text-[#111111] text-2xl font-normal font-Axiforma'>{contactResponse?.data?.contact_schedule_consult_heading}</Text>
              <Text tag="p" className='text-[#707070] text-xl font-Axiforma mt-3'>{contactResponse?.data?.contact_schedule_consult_paragraph}</Text>
              <Text tag="p" className='text-[#707070] text-xl font-Axiforma mt-3'>We’ll take the time to understand your needs and provide personalized guidance on the best solutions for your business</Text>
            </div>
          </div>
        </div>
      </section>


      <section className='bg-[#E2F5FC]  '>
        <div className="grid md:grid-cols-2 grid-cols-1 items-center md:gap-10">
          <div className='relative h-full w-full'>
            <ImageCard src="/Images/locationimg.png" alt="img" className='absolute' layout='fill' objectFit='cover'  />
          </div>
          <div className='py-24'>
            <Text tag="h2">{contactResponse?.data?.contact_our_location_heading}</Text>
            <Text tag="p">{contactResponse?.data?.contact_our_location_heading_paragraph}</Text>
            <ul className='my-5'>
              <li className='flex gap-5 border-t border-[#DADADA] py-10 items-center'>
                <ImageCard src="/Images/locationIcon.png" alt='call image' width={60} height={60} />  
                <div>
                      <Text tag="h3" className='text-[#111111] text-2xl font-normal font-Axiforma'>{contactResponse?.data?.contact_map_location}</Text>
                      <Text tag="p" className='text-[#707070] text-xl font-Axiforma mt-3'>{contactResponse?.data?.contact_map_loction_details}</Text>
                    </div>            
              </li>
            </ul>
          </div>
        </div>
      </section>


   <section className='md:py-20 py-10 text-center'>
    <div className="container">
      <h2>Why Contact <strong>Secure365?</strong></h2>
      <div className="w-full grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2 pt-10">
        {contactResponse?.data?.contact_secure_loop &&
          contactResponse?.data?.contact_secure_loop.map((item, index) => (
            <React.Fragment key={index}>
                <div className="text-center column_hover">
                  <div className="cardImage">
                    <ImageCard
                      src={item?.contact_secure_image}
                      width={40}
                      height={40}
                      alt="avatar image"
                      className="mx-auto"
                    />
                  </div>
                  <Text
                    tag="h3"
                    className="md:text-xl text-xl font-medium text-center "
                  >
                    {item?.contact_secure_heading}
                  </Text>

                  <Text
                    tag="p"
                    className="text-center text-md text-primary text-[#4F4F4F] font_14"
                  >
                    {item?.contact_secure_paragraph}
                  </Text>
                </div>
          
            </React.Fragment>
          ))}
      </div>

    </div>
   </section>
        <section className='md:py-20 py-10'>
          <div className="container">
           <div className="grid md:grid-cols-2">
           <div>
              <Text tag="h2">{contactResponse?.data?.contact_promise_heading}</Text>
              <Text tag="p" className='md:mt-10 mt-5 md:mb-10 mb-7 text-[#4F4F4F] text-2xl md:max-w-[80%]'>We handle the heavy lifting of server and cloud management, so you can focus on what matters most—your business. Secure365’s solutions are designed to streamline your IT operations, maximize security, and provide a stable foundation for growth. With us, you’ll have peace of mind knowing that your data is safe, your systems are optimized, and your business can scale effortlessly</Text>
              <button className='btn_one global_btn capitalize font-Axiforma mt-4 text-white'>{contactResponse?.data?.contact_button}</button>
            </div>
            <div className='relative h-full w-full'>
              <ImageCard src={contactResponse?.data?.contact_promise_image_url} alt='promise image' layout='fill' objectFit='contain' />
            </div>
            
           </div>
          </div>
        </section>

          <section className="ready_partner relative lg:py-20 py-10  text-center md:mt-20 mt-10">
                <ImageCard
                  alt="expert image"
                  className="absolute -z-10"
                  layout="fill"
                  src="/Images/ready_expert.png"
                  />
  
                <div className="container">
                  <Text tag="h2" className="text-white lg:text-5xl  md:text-3xl  text-2xl">
                    {contactResponse?.data?.contact_ready_heading}
                  </Text>
                  <Text tag="p" className="text-white md:text-lg mt-5 text-md lg:max-w-[50%] md:max-w-[70%] mx-auto">
                    {contactResponse?.data?.contact_ready_paragraph}
                  </Text>
                 
                </div>
              </section>




    </>
  )
}

export default Contact