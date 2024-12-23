import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import Link from "next/link";
import Image from "next/image";
import TrustedSection from "@/components/logo_slider/TrustedSection";
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
      <section className="relative banner_robot bg-black">
        <div className="baner_images centerImage">
          <span className="relative">
            <ImageCard
              src="/Images/centerText.png"
              width={200}
              height={100}
              alt="banner image"
            />
            <ImageCard
              src="/Images/sercureRotate.png"
              width={200}
              height={100}
              alt="banner image"
              className="rotateImage"
            />



          </span>
        </div>

        <div className="baner_imagesafter">
          <span className="relative">
            <ImageCard
              src="/svg/after_bannerImg.svg"
              width={500}
              height={100}
              alt="banner image"
            />
          </span>
        </div>
        <Hero />
      </section>
      <div>
      </div>



      {/* Key Services Section Starts */}
      <section className="2xl:py-18 xl:py-20 py-12 protection_section   key_serices">
        <div className="container">
          <span className="text-center text_blue block font-Axiforma text-lg capitalize">our service</span>
          <Text tag="h2" className="mb-3">{data?.home_key_service_first_heading}</Text>
          <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 xl:mt-10 mt-5">
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
      {/* Key Services Section Ends */}

      <section className="introduction-wrapper 2xl:py-20 xl:py-20 md:py-16 py-12  relative ">
        <Image src="/Images/bgSecure.png" objectFit="cover" layout="fill" className="absolute -z-10" />
        <div className="container">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:gap-20 items-center">
            <div className="relative">
              <Image src="/Images/groupImage.png" alt="img" style={{ borderRadius: "30px" }} width={500} height={800} className="mainImages" />
              <Image src="/Images/rotateImage.png" alt="img" style={{ borderRadius: "30px" }} width={500} height={800} className="rotateImage" />

            </div>
            <div>
              <h2 className=" heading_h2  relative text-white  font-Axiforma mb-5 capitalize">
                About us
              </h2>
              <p className="font-Axiforma text-[#DDDDDD]">
                Welcome to Secure 365, where innovation drives protection, and technology turns challenges into secure solutions. Established with a vision to redefine cloud security and IT services, we are a dynamic and forward-focused company dedicated to delivering advanced, reliable, and scalable solutions.
              </p>
              <p className=" font-Axiforma text-[#DDDDDD]">Our mission is clear—to provide comprehensive and tailored cloud security and IT services that align seamlessly with your organization’s goals. We believe in not just safeguarding your data but exceeding expectations by empowering your business with robust and innovative security measures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes us Different Section Starts */}
      <section className="make_us_different relative">
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-between gap-2 ">
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
            <div className="text-center  h-full w-full absolute">
              <Image
                src="/svg/Specialists.svg"
                className=" min-h-full mx-auto typoImageHeight absolute"
                // width={400}
                layout="fill"
                objectFit="cover"
                // height={400}
                alt="expert guidance image"
              />
            </div>
          </div>
        </div>
      </section>
     
      <section className="get_started_wrapper my-5  text-white lg:py-16 md:py-12 py-12 relative">
        <Image
          src="/Images/info-graphic.jpg"
          className="absolute -z-10 rotate-180"
          layout="fill"
          objectFit="cover"
        />
        <div className="container">
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 md:py-10  gap-7">
            <div className="w-full">
              <div className="relative  w-full heightMention">
                <Suspense fallback={<p>Loading...</p>}>
                  <ImageCard
                    src="/Images/imgSteps.png"
                    className=" min-h-full heightMention"
                    layout="fill"
                    // width={500}
                    // height={500}
                    objectFit="cover"
                    alt="expert guidance image"
                  />
                </Suspense>
              </div>
            </div>
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
                  {/* {data?.website_experience_paragraph_second} */}
                  At Secure365, we understand that navigating the digital world
                  can be overwhelming. That’s why we’ve designed our services to
                  be a one-stop solution, covering everything from cloud
                  management and IT support to marketing and cybersecurity.
                </Text>
                <Button className="btn_one global_btn capitalize mt-10  font-Axiforma lg::block hidden mobileHiden">
                  {data?.website_experience_button_second}
                </Button>
              </div>
            </div>


            <Button className="btn_one global_btn capitalize mt-10  font-Axiforma lg:hidden block">
              {data?.website_experience_button_second}
            </Button>
          </div>

            <Button className="btn_one global_btn capitalize mt-10  font-Axiforma lg:hidden block">
              {data?.website_experience_button_second}
            </Button>
          </div>
        
      </section>
      {/* Ensure Your Website Section Ends */}

      {/* high_rated */}
      <section class="page-section agencySolution bg-no-repeat" id="about" style={{ background: "url(/svg/decoration-2.svg)" }}>

        <div class="container position-relative">
          <div class="row mb-70 mb-sm-50">
            <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
              <h2 class="section-title mb-40 mb-xs-30">High-Rated IT Services Agency Specializing in Technology Solutions</h2>
              <p class="section-descr dark-white mb-0">
                IT services refer to the management, implementation, and support of technology solutions that meet the business needs of organizations. These services encompass everything from cloud computing, cybersecurity, software development, and IT consulting, to system integration. The definition of IT services has evolved as technology continues to advance, enabling businesses to streamline operations, improve efficiency, and enhance customer experiences.
              </p>
            </div>
          </div>
          <div class="row mt-n50 mb-70 mb-sm-50 ratingSec">
            <div class="mt-50 wow fadeInLeft no-animate animated" data-wow-delay="0s">
              <div class="text-center px-lg-4">
                <div class="testimonials-5-stars flex justify-center gap-1">

                  <Image src="/svg/startIcon.svg" width={20} height={20} />
                  <Image src="/svg/startIcon.svg" width={20} height={20} />
                  <Image src="/svg/startIcon.svg" width={20} height={20} />
                  <Image src="/svg/startIcon.svg" width={20} height={20} />
                  <Image src="/svg/startIcon.svg" width={20} height={20} />

                </div>
                <div class="testimonials-5-text">“Really impressed with the service and the results!”</div>
                <div class="testimonials-5-caption">Rated 4.5 on Trustpilot</div>
              </div>
            </div>
            <div class="mt-50 wow fadeInLeft no-animate animated" data-wow-delay="0.15s">
              <div class="text-center px-lg-4">
                <div class="testimonials-5-stars flex justify-center gap-1">

                  <Image src="/svg/startIcon.svg" width={20} height={20} />
                  <Image src="/svg/startIcon.svg" width={20} height={20} />
                  <Image src="/svg/startIcon.svg" width={20} height={20} />
                  <Image src="/svg/startIcon.svg" width={20} height={20} />
                  <Image src="/svg/startIcon.svg" width={20} height={20} />

                </div>
                <div class="testimonials-5-text">“Excellent service for targeted lead generation.”</div>
                <div class="testimonials-5-caption">Rated 4.5 on Trustpilot</div>
              </div>
            </div>
            <div class=" mt-50 wow fadeInLeft no-animate animated" data-wow-delay="0.3s">
              <div class="text-center px-lg-4">
                <div class="testimonials-5-stars flex justify-center gap-1">

                  <Image src="/svg/startIcon.svg" width={20} height={20} />
                  <Image src="/svg/startIcon.svg" width={20} height={20} />
                  <Image src="/svg/startIcon.svg" width={20} height={20} />
                  <Image src="/svg/startIcon.svg" width={20} height={20} />
                  <Image src="/svg/startIcon.svg" width={20} height={20} />

                </div>
                <div class="testimonials-5-text">“I have super enjoyed working with Resonance.”</div>
                <div class="testimonials-5-caption">Rated 4.5 on Trustpilot</div>
              </div>
            </div>
          </div>
          <div class="local-scroll text-center">
            <a class="btn btn-mod btn-w btn-with-icon btn-circle" href="/corporate-about">
              <span class="btn-icon color-3"><i class="mi-favorite"></i></span>
              <span data-btn-animate="y">
                <span class="btn-animate-y">

                  <span class="btn-animate-y-2" aria-hidden="true">
                    <span className="startIcon">
                      <Image src="/svg/strar_stroke.svg" width={20} height={20} />
                    </span>
                    View Our Services
                    <Image src="/svg/down_load.svg" width={20} height={20} />
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* high_rated end */}


      {/* Our Promise Section Starts */}
      <section className="promise_sec">
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
                          <Text tag="p" className>
                            {item?.home_page_our_promise_servise_paragraph}
                          </Text>
                        </div>
                      </div>
                    </React.Fragment>
                  </Suspense>
                ))}
              <Link href="/contact-us">

                <button className="btn_one global_btn capitalize font-Axiforma">Learn More</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Our Promise Section Ends */}

      {/* Top Skilled Experts Section Starts */}
      <Categories data={data} />
      {/* Top Skilled Experts Section Ends */}



      {/* Our Key Services Section Starts */}
      {/* <Products data={data?.key_services_data} /> */}
      {/* Our Key Services Section Ends */}

      {/* blog_section */}
      <section id="our-blog" class="our-blog-section">
        <div class="blogSection container">
          <div class="blog-header">
            <h2>Our Blog</h2>
            <p>Check the best marketing resources and the latest news about our company.</p>
            <div className="local-scroll">
              <a href="#" class="read-all-btn  btn">
                <span className="startIcon">
                  <Image src="/svg/strar_stroke.svg" width={20} height={20} />
                </span>
                <span>Read All Articles</span>
                <span class="arrow"><Image src="/svg/down_load.svg" width={20} height={20} /></span>
              </a>
            </div>
          </div>
          <div class="blog-grid">
            <div class="blog-card">
              <Image src="/Images/blog_One.webp" width={300} height={300} alt="Blog Image 1" class="blog-image" />
              <div class="blog-content">
                <h3 class="blog-title">Content Marketing Steps That Will Help You to Grow Your Business</h3>
                <p class="blog-description">The macro-environment, over which a firm holds little control, consists of a variety of external factors that manifest on a large scale.</p>
                <div class="blog-meta">
                  <span>February 13, 2022</span>
                  <span class="category">Articles</span>
                </div>
              </div>
            </div>
            <div class="blog-card">
              <Image src="/Images/blog_Two.png" width={300} height={300} alt="Blog Image 1" class="blog-image" />

              <div class="blog-content">
                <h3 class="blog-title">Top Five Trends for Small Investment Companies Marketing</h3>
                <p class="blog-description">The micro-environment, over which a firm holds greater control, typically includes Employees, Suppliers, and the Media.</p>
                <div class="blog-meta">
                  <span>February 11, 2023</span>
                  <span class="category">Tutorials</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* blog_section end*/}




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




      {/* <section className="get_started_wrapper my-5  text-white lg:py-28 md:py-12 py-12 relative">
<Image src="/Images/inner-baner-bg.jpg" alt="imner img" className="absolute -z-10" layout="fill" objectFit="cover"/>
<div className="container">
    <div className="left-side max-w-[70%]">
      <div className="w-full ">
      <h6><span></span>Innovative Idea</h6>
        <Text
          tag="h2"
          className="md:mb-8 mb-4 font-Axiforma capitalize tracking-wide"
        >
          "Drawing on IT professionals' technical expertise to assess and solve advanced technical problems."
        </Text>
      </div>
    </div>
  </div>
</section> */}
      {/* Contact Section Ends */}
    </main>
  );
}

