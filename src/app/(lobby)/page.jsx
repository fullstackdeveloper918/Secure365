import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import Image from "next/image";

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
        <div className="baner_images">
          <span className="relative">

            <ImageCard
              src="/svg/before_bannerImg.svg"
              width={700}
              height={100}
              alt="banner image"
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

      {/* introduction Section Content */}
      <section className="introduction-wrapper 2xl:py-20 xl:py-20 md:py-16 py-12 text-center ">
        <div className="container ">
          <div className=" flexWrapperResponsive md:gap-10 gap-5 IntroWrapperContent">
            <h2 className=" introheading relative pl-3 font-semibold font-Axiforma mb-5">
              {data?.home_introduction_section_heading_main}
            </h2>
            <div>

              <Text tag="p" className="text-xl  font-Axiforma">
                {data?.home_introduction_section_paragreaph_first}
              </Text>


              <Text tag="p" className="text-xl md:mt-8 mt-4 font-Axiforma">
                {data?.home_introduction_section_paragreaph_second}
              </Text>


              <Link 
                href="/contact-us"
                className="discovermore addArrow inline-flex xl:text-2xl text-xl mt-5 relaitve font-Axiforma"
              >
                {data?.home_introduction_section_discover}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 24L24 9M24 9H15.6667M24 9V17.3333"
                    stroke="#000"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Introduction Ends Here */}

       {/* Key Services Section Starts */}
       <section className="2xl:py-18 xl:py-20 py-12 protection_section  bg-[#111] text-white">
        <div className="container">
          <Text tag="h2" className="mb-5">{data?.home_key_service_first_heading}:</Text>
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

      {/* What Makes us Different Section Starts */}
      <section className="make_us_different 2xl:py-16 py-10   bg-[#f0f0f0] relative">
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-between gap-2 ">
            <div>
              <Suspense fallback={<Skeleton className="h-4 w-[200px]" />}>
                <Text tag="h2" className="heading_h2 capitalize ">
                  {data?.makes_us_diffrent_heading}
                  <span className="capitalize font-semibold m-2">
                    {data?.makes_us_diffrent_heading_second}
                  </span>
                </Text>
              </Suspense>

              <Suspense fallback={<p>Loading...</p>}>
                <Text
                  tag="p"
                  className=" md:mt-8 mt-4 text-2xl  "
                >
                  {data?.makes_us_diffrent_paragraph}
                </Text>
              </Suspense>
              <Suspense fallback={<p>Loading...</p>}>
                <Text
                  tag="p"
                  className=" mt-5 text-2xl  "
                >
                  {data?.makes_us_diffrent_paragraph_second}
                </Text>
              </Suspense>
            </div>
            <div className="text-center">
              <Image
                src="/Images/typograpy.png"
                className=" min-h-full mx-auto typoImageHeight"
                width={500}
                height={500}
                alt="expert guidance image"
              />
            </div>
          </div>
        </div>
      </section>
      {/* What Makes us Different Section Ends */}

     

      {/* Protect Your Website Section Starts*/}
      <section className="cybersecurity_wrapper  xl:py-20 py-10">
        <div className="container">
          <div className="security_div ">
            <div className="left-side  relative">
              <div className="flex flex-col gap-5">
                {data &&
                  data?.website_protect_section_image_experience_url?.image_data?.map(
                    (item, index) => (
                      <>
                        {/* <div className="leftSideImage">
                          <Suspense fallback={<p>Loading...</p>}>
                            <ImageCard
                              src={
                                item?.website_protect_section_image_experience
                              }
                              width={380}
                              height={420}
                              className="rounded-[10px]"
                              alt="protection section image"
                            />
                          </Suspense>
                        </div> */}
                      </>
                    )
                  )}
              </div>
              <div className="relative w-100 h-full">
                {/* <Suspense fallback={<p>Loading...</p>}> */}

                <Image
                  src="/Images/image.jpg"
                  layout="fill"
                  objectFit="cover"
                  className="absolute w-full h-full"
                  alt="protection section image"
                // width={500}
                // height={500}
                />
                {/* </Suspense> */}
              </div>

              {/* <div className="counter_box absolute ">
                <div>
                  <div>
                    <Text
                      tag="h3"
                      className="text-white md:text-3xl text-xl font-medium"
                    >
                      30+
                    </Text>
                    <Text
                      tag="p"
                      className="text-white leading-snug font-semibold"
                    >
                      Years of Experience
                    </Text>
                  </div>
                </div>
              </div> */}
            </div>

            <div className="right-side col-md-7 col-12 2xl:py-20 xl:py-18 py-0">
              <div>
                <Suspense fallback={<p>Loading...</p>}>
                  <Text
                    tag="h2"
                    className="my-2 text-black capitalize font-Axiforma font-medium"
                  >
                    {data?.website_protect_heading_experience_section}
                  </Text>
                </Suspense>
              </div>
              <div>
                <Suspense fallback={<p>Loading...</p>}>
                  <Text
                    tag="p"
                    className="text-[#434242] text-lg my-5 font-Axiforma"
                  >
                    {data?.makes_us_diffrent_paragraph}
                  </Text>
                </Suspense>
                <Suspense fallback={<p>Loading...</p>}>
                  <Text
                    tag="p"
                    className="text-[#434242] text-lg my-5 font-Axiforma"
                  >
                    {data?.makes_us_diffrent_paragraph_second}
                  </Text>
                </Suspense>
              </div>
              <div>
                <Link
                  href="/contact-us"
                  className="discovermore addArrow inline-flex xl:text-2xl text-xl mt-5 relaitve font-Axiforma"
                >
                  {data?.website_protect_button_experience}
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 24L24 9M24 9H15.6667M24 9V17.3333"
                      stroke="#000"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Protect Your Website Section Ends*/}

      {/* Ensure Your Website Section Starts */}
      <section className="get_started_wrapper my-5  text-white lg:py-16 md:py-12 py-12 relative">
        <Image src="/Images/info-graphic.jpg" className="absolute -z-10 rotate-180" layout="fill" objectFit="cover" />
        <div className="container">
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 md:py-10  gap-7">
          <div className="left-side max-w-[80%]">
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
         
            <Button className="btn_one global_btn capitalize mt-10 mx-auto font-Axiforma lg:hidden block">
                  {data?.website_experience_button_second}
                </Button>
          </div>

        </div>
      </section>
      {/* Ensure Your Website Section Ends */}

     

      {/* Top Skilled Experts Section Starts */}
      <Categories data={data} />
      {/* Top Skilled Experts Section Ends */}

      {/* Our Promise Section Starts */}
      <section className="promise_sec">
        <div className="container">
          <Suspense fallback={<p>Loading...</p>}>
            <div className="promise_header flex justify-between">
              <Text tag="h2" className="font-Axiforma">
                {data?.home_page_our_promise_main_heading}
              </Text>
              <Text tag="p">{data?.home_page_our_promise_main_paragraph}</Text>
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
                        <Text tag="span">0{index + 1}</Text>
                        <div>
                          <Text tag="h4" className="font-Axiforma">
                            {item?.home_page_our_promise_title}
                          </Text>
                          <Text tag="p">{item?.home_page_our_promise_servise_paragraph}</Text>
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

       {/* Our Key Services Section Starts */}
       <Products data={data?.key_services_data} />
      {/* Our Key Services Section Ends */}

      {/* Contact Section Starts */}
      <section className="lookingService xl:mt-20 mt-6">
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
      {/* Contact Section Ends */}
    </main>
  );
}




// mast section

// <section className="get_started_wrapper my-5  text-white lg:py-28 md:py-12 py-12 relative">
// <Image src="/Images/inner-baner-bg.jpg" alt="imner img" className="absolute -z-10" layout="fill" objectFit="cover"/>
// <div className="container">
//     <div className="left-side max-w-[70%]">
//       <div className="w-full ">
//       <h6><span></span>Innovative Idea</h6>
//         <Text
//           tag="h2"
//           className="md:mb-8 mb-4 font-Axiforma capitalize tracking-wide"
//         >
//           "Drawing on IT professionals' technical expertise to assess and solve advanced technical problems."
//         </Text>
//       </div>
//     </div>
//   </div>
// </section>