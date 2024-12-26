
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";


// const ZoomParallax = dynamic(() => import('@/components/ZoomParallax/ZoomParallax'))
import Link from "next/link";
const MotionDiv = dynamic(() => import("../../components/MotionDiv"));
const Products = dynamic(() => import("../../components/Products"));
const Hero = dynamic(() => import("../../components/Hero"));
const ImageCard = dynamic(() => import("../../components/cards/ImageCard"));
const Categories = dynamic(() => import("../../components/Categories"));
const Text = dynamic(() => import("../../components/Text"));

export default async function page() {
  const response = await fetch(
    "https://sellmac.cybersify.tech/secure365/wp-json/secure-plugin/v1/home",
    {
      cache: "no-store",
    }
  );
  const data = await response.json();

  console.log(data, "datahome");

  return (
    <main>
      <section className="relative banner_robot">
        <div className="baner_imagesafter">
          <span className="relative">
            <Suspense fallback={<p>loading</p>}>
            {/* <ImageCard
              src="/svg/after_bannerImg.svg"
              width={500}
              height={100}
              alt="banner image"
              /> */}
              </Suspense>
          </span>
        </div>
        <Hero />
      </section>






      {/* high_rated */}
      <section className="page-section agencySolution bg-no-repeat" id="about" >

        <div className="container position-relative">
          <div className="row mb-70 mb-sm-50">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
              <h2 className="section-title mb-40 mb-xs-30">
                <div>Why</div> 
              
                <b>Secure <span>365 ?</span></b> 
           
                </h2>
              <p className="section-descr dark-white mb-0">
                In The Hitchhiker’s Guide to the Galaxy, the supercomputer “Deep Thought” is built by a race of hyper-intelligent alien beings to determine the answer to “life, the universe, and everything”. Deep Thought determines that the answer is, somewhat anti-climatically, “Secure 365”.
              </p>
            </div>
          </div>

        </div>
      </section>

      <ZoomParallax />


      {/* Key Services Section Starts a */}

      <div className="SerivesProvided container">

        <Text tag="h2" className="mb-3">
          {data?.home_key_service_first_heading}
        </Text>
      </div>
      <section className="2xl:py-18 xl:py-24 py-20 protection_section   key_serices">
        <div className="container">
          
          <Text tag="h2" className="mb-3">
            {data?.home_key_service_first_heading}
          </Text>
          <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 xl:mt-10 mt-5 gap-5">
            {data &&
              data?.home_key_service_data.map((item, index) => (
                <>
                  <div className="keyColumns" key={index}>
                    <Suspense fallback={<p>Loading Image...</p>}>
                      <ImageCard
                        src={item?.home_key_service_first_image}
                        alt="key icon"
                        width={50}
                        height={50}
                        className="mx-auto"
                      />
                    </Suspense>
                    <Text tag="h3">{item?.home_key_service_first_title}</Text>
                    <Suspense fallback={<p>Loading Text...</p>}>
                      <Text tag="p">
                        {item?.home_key_service_first_paragraph}
                      </Text>
                    </Suspense>
                  </div>
                </>
              ))}
          </div>
        </div>
      </section>
      


      {/* section  */}


      <section className="get_started_wrapper  text-white bg-black lg:pb-16 md:pb-12 pb-12 relative md:pt-0 pt-6" >
        <div className="container">
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 md:py-10  gap-12 md:gap-7">

            <div className="left-side max-w-[90%]">
              <div className=" ">
                <Text
                  tag="h2"
                  className="md:mb-8 mb-4 font-Axiforma capitalize tracking-wide"
                >
                  {data?.website_experience_heading_second}
                  <span className="text_blue ml-2">cybersecurity</span>
                </Text>

                <Text
                  tag="p"
                  className="text-[#c2c2c2] md:text-lg text-md md:mb-5 mb-2 font-Axiforma md:max-w-[80%]"
                >
                
                  At Secure365, we understand that navigating the digital world
                  can be overwhelming. That’s why we’ve designed our services to
                  be a one-stop solution, covering everything from cloud
                  management and IT support to marketing and cybersecurity.
                </Text>
                {/* <Button className="btn_one global_btn capitalize mt-10  font-Axiforma lg::block hidden mobileHiden">
                  
                </Button> */}
                <div className="local-scroll">
              <a href="#" className="read-all-btn  btn">
                <span className="startIcon">
                  <Image src="/svg/strar_stroke.svg" width={20} height={20} />
                </span>
                <span>{data?.website_experience_button_second}</span>
                <span className="arrow"><Image src="/svg/down_load.svg" width={20} height={20} /></span>
              </a>
            </div>
              </div>
            </div>

            <div className="w-full">
              <div className="relative  w-full heightMention">
                <Suspense fallback={<p>Loading...</p>}>
                  <ImageCard
                    src="/Images/imgSteps.png"
                    className=" min-h-full heightMention"
                    layout="fill"
                    
                    objectFit="cover"
                    alt="expert guidance image"
                  />
                </Suspense>
              </div>
            </div>

        

            {/* <Button className="btn_one global_btn capitalize mt-10  font-Axiforma lg:hidden block">
              
            </Button> */}
          </div>
{/* 
          <Button className="btn_one global_btn capitalize mt-10  font-Axiforma lg:hidden block">
            {data?.website_experience_button_second}
          </Button> */}

          
        </div>

      </section> 

      <section className="introduction-wrapper 2xl:py-32 xl:py-22 md:py-20 py-12  relative ">
        <div className="container">
          <div className="  items-center">
        
            <div className="aboutwraper">
              <div>
              <h2 className=" heading_h2  relative  font-Axiforma mb-5 capitalize">
                <span className="aboutIcon">
                <svg data-v-669b4a84="" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon"><path data-v-669b4a84="" d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" width={20} height={20}></path></svg>
                </span>
                About us
              </h2>
              </div>
              <div>
              <p className="font-Axiforma text-[#DDDDDD]">
                Welcome to Secure 365, where innovation drives protection, and
                technology turns challenges into secure solutions. Established
                with a vision to redefine cloud security and IT services, we are
                a dynamic and forward-focused company dedicated to delivering
                advanced, reliable, and scalable solutions.
              </p>
              <p className=" font-Axiforma text-[#DDDDDD]">
                Our mission is clear—to provide comprehensive and tailored cloud
                security and IT services that align seamlessly with your
                organization’s goals. We believe in not just safeguarding your
                data but exceeding expectations by empowering your business with
                robust and innovative security measures.
              </p>

              <div className="local-scroll">
              <a href="#" className="read-all-btn  btn">
                <span className="startIcon">
                  <ImageCard src="/svg/strar_stroke.svg" width={20} height={20} />
                </span>
                <span>Know More about us</span>
                <span className="arrow"><ImageCard src="/svg/down_load.svg" width={20} height={20} /></span>
              </a>
            </div>
              </div>
            </div>
          </div>
        </div>
      </section> 

      {/* <section className="make_us_different relative">
        <div className="container">

          <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-between md:gap-6 gap-10">
            <div className="contentMake">
          
              <Suspense fallback={<Skeleton className="h-4 w-[200px]" />}>
                <Text tag="h2" className="heading_h2 capitalize ">
                  {data?.makes_us_diffrent_heading}
                  <span className="capitalize font-semibold m-2">
                    {data?.makes_us_diffrent_heading_second}
                  </span>
                </Text>
              </Suspense>

              <Suspense fallback={<p>Loading...</p>}>
                <Text tag="p" className=" md:mt-8 mt-4 2xl:text-xl text-lg ">
                  {data?.makes_us_diffrent_paragraph}
                </Text>
              </Suspense>
              <Suspense fallback={<p>Loading...</p>}>
                <Text tag="p" className=" md:mt-8 mt-4 2xl:text-xl text-lg ">
                  {data?.makes_us_diffrent_paragraph_second}
                </Text>
              </Suspense>
            </div>
            <div className="text-center  h-full w-full ">
              <ImageCard
                src="/Images/gropFaq.png"
                className=" min-h-full mx-auto  "
                width={600}
             
                height={600}
                alt="expert guidance image"
              />
            </div>
          </div>
        </div>
      </section> */}

    
      {/* <section className="promise_sec">
        <div className="container">
          <Suspense fallback={<p>Loading...</p>}>
            <div className="promise_header flex justify-between">
              <Text tag="h2" className="font-Axiforma">
                {data?.home_page_our_promise_main_heading}
              </Text>
              <Text tag="p" className=" font-Axiforma">
                {data?.home_page_our_promise_main_paragraph}
              </Text>
            </div>
          </Suspense>

          <div className="left_rightContent">
            <div className="left_images">
              <Suspense fallback={<p>Loading...</p>}>
                <ImageCard
                  src={data?.home_page_our_promise_image_url}
                  width={600}
                  height={400}
                  alt="our promise image"
                />
              </Suspense>
            </div>

            <div className="flex flex-col gap-5 right_content">
              {data &&
                data?.home_page_our_promise_data?.map((item, index) => (
                  <Suspense fallback={<p>Loading...</p>}>
                    <React.Fragment key={index}>
                      <div className="numberWrapper">
                        <Text tag="span" className="font-Axiforma">
                          0{index + 1}
                        </Text>
                        <div>
                          <Text tag="h4" className="font-Axiforma">
                            {item?.home_page_our_promise_title}
                          </Text>
                          <Text tag="p">
                            {item?.home_page_our_promise_servise_paragraph}
                          </Text>
                        </div>
                      </div>
                    </React.Fragment>
                  </Suspense>
                ))}
              <Link href="/contact-us">

              <div className="local-scroll">
              <a href="#" className="read-all-btn  btn">
                <span className="startIcon">
                  <Image src="/svg/strar_stroke.svg" width={20} height={20} />
                </span>
                <span> Learn More</span>
                <span className="arrow"><Image src="/svg/down_load.svg" width={20} height={20} /></span>
              </a>
            </div>
              
              </Link>
            </div>
          </div>
        </div>
      </section> */}
     


            

     
      {/* <Categories data={data} /> */}
     

      
      {/* <section id="our-blog" className="our-blog-section">
        <div className="blogSection container">
          <div className="blog-header">
            <h2>Our Blog</h2>
            <p>
              Check the best marketing resources and the latest news about our
              company.
            </p>
            <div className="local-scroll">
              <a href="#" className="read-all-btn  btn">
                <span className="startIcon">
                  <ImageCard src="/svg/strar_stroke.svg" width={20} height={20} alt="" />
                </span>
                <span>Read All Articles</span>
                <span className="arrow"><ImageCard src="/svg/down_load.svg" width={20} height={20} /></span>
              </a>
            </div>
          </div>
          <div className="blog-grid">
            <div className="blog-card">
              <ImageCard src="/Images/blog_One.webp" width={300} height={300} alt="Blog Image 1" className="blog-image" />
              <div className="blog-content">
                <h3 className="blog-title">Content Marketing Steps That Will Help You to Grow Your Business</h3>
                <p className="blog-description">The macro-environment, over which a firm holds little control, consists of a variety of external factors that manifest on a large scale.</p>
                <div className="blog-meta">
                  <span>February 13, 2022</span>
                  <span className="category">Articles</span>
                </div>
              </div>
            </div>
            <div className="blog-card">
              <ImageCard src="/Images/blog_Two.png" width={300} height={300} alt="Blog Image 1" className="blog-image" />

              <div className="blog-content">
                <h3 className="blog-title">Top Five Trends for Small Investment Companies Marketing</h3>
                <p className="blog-description">The micro-environment, over which a firm holds greater control, typically includes Employees, Suppliers, and the Media.</p>
                <div className="blog-meta">
                  <span>February 11, 2023</span>
                  <span className="category">Tutorials</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

   

      <section className="home__trusted">
        <div className="container-1440 trusted__container">
          <div className="trusted__items-wrapper">
            <div aria-hidden="true" className="trusted__items marquee">
              <div className="trusted__item"><img src="/svg/snap_inc_logo.svg" alt="Omni Logistics slide" /></div>
              <div className="trusted__item"><img src="/Images/wtf_logo_tm.webp" alt="GW Tool Group slide" /></div>
              <div className="trusted__item"><img src="/Images/logo-teacher-care.png" alt="Millhouse slide" /></div>
              <div className="trusted__item"><img src="/Images/techable.png" alt="Becker Logistics slide" /></div>
              <div className="trusted__item"><img src="/Images/sellmac (2).png" alt="Tangent design / engineering slide" /></div>
              <div className="trusted__item"><img src="/Images/logo__1_-removebg-preview 1.png" alt="Auto Logistics slide" /></div>
            </div>
            <div aria-hidden="true" className="trusted__items marquee">
              <div className="trusted__item"><img src="/svg/snap_inc_logo.svg" alt="Omni Logistics slide" /></div>
              <div className="trusted__item"><img src="/Images/wtf_logo_tm.webp" alt="GW Tool Group slide" /></div>
              <div className="trusted__item"><img src="/Images/logo-teacher-care.png" alt="Millhouse slide" /></div>
              <div className="trusted__item"><img src="/Images/techable.png" alt="Becker Logistics slide" /></div>
              <div className="trusted__item"><img src="/Images/sellmac (2).png" alt="Tangent design / engineering slide" /></div>
              <div className="trusted__item"><img src="/Images/logo__1_-removebg-preview 1.png" alt="Auto Logistics slide" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section Starts */}
      <section className="lookingService xl:mt-0">
        <div className="container">
          <Suspense fallback={<p>Loading...</p>}>
            <Text tag="h2">{data?.home_page_contact_section_heading}</Text>
          </Suspense>
          <div className="text-center  mt-10">
            <Link href="/contact-us">
              <button className="btn_two global_btn capitalize font-Axiforma inline mx-auto">
                {data?.home_page_contact_button}
              </button>
            </Link>
          </div>
        </div>
      </section> 
    </main>
  );
}
