import dynamic from "next/dynamic";
import React, { Suspense } from "react";
const Text = dynamic(() => import('@/components/Text'));
const ImageCard = dynamic(() => import('@/components/cards/ImageCard'));

import CategoryCardSkeleton from "@/components/skeletons/CategoryCardSkeleton";
import { bannerUrl, fetchData } from "@/lib/data";



const page = async () => {

  const data = await fetch(
    "https://sellmac.cybersify.tech/secure365/wp-json/secure-plugin/v1/about",
    {
      cache: "no-store",
    }
  );

  const bannerData = await fetch(
    "https://sellmac.cybersify.tech/secure365/wp-json/secure-plugin/v1/banner/about-us",
    {
      cache: "no-store",
    }
  );
  const aboutResponse = await data.json();
  const bannerResponse = await bannerData.json();

  console.log(aboutResponse, 'aboutResponse')
  

  
  return (
    <>
      <section className="relative overlay about_banner text-center">
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
        <Suspense fallback={<p>Loading image...</p>}>
          <ImageCard
            src={bannerResponse?.pages?.banner_data?.banner_image_background?.url}
            className="absolute"
            layout="fill"
            alt=" about Background image"
            objectFit="cover"
          />
        </Suspense>
        <div className="relative container mx-auto  px-4 sm:px-6 lg:px-8 pt-20  pb-0">
          <Suspense fallback={<p>Loading content...</p>}>
            <Text
              tag="h1"
              className="tracking-tighter text-3xl  lg:text-5xl xl:text-5xl	 text-center 	text-white	banner_heading"
            >
              {bannerResponse?.pages?.banner_data?.banner_heading}
              <Text tag="span" className="text_blue mx-2">

                {bannerResponse?.pages?.banner_data?.banner_heading_second}
              </Text>
              <Text tag="span" className="block my-3">

                {bannerResponse?.pages?.banner_data?.banner_heading_third}
              </Text>
            </Text>
            <Text
              tag="p"
              className="text-white md:max-w-[55%] mx-auto md:my-10 mt-5 md:text-xl text-md font-Axiforma"
            >

            </Text>
          </Suspense>
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
      </section>

      {/* our story section started */}
      <section className="story_section md:py-20 py-10 md:px-0">
        <div className="container">
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10">
            <div className="leftWrapper">
              <Suspense fallback={<p>Loading content...</p>}>

                <Text tag="h2" className="capitalize">
                  {aboutResponse?.data?.our_story_heading}{" "}
                  <b>{aboutResponse?.data?.our_story_heading_second}</b>
                </Text>
                <Text
                  tag="hr"
                  className="border-1.5 my-5 border-[#111111] max-w-[30%]"
                />
                <Text
                  tag="p"
                  className="text-[#4F4F4F] md:text-lg md:mt-8 text-md"
                >
                  {aboutResponse?.data?.our_story_paragraph}
                </Text>
                <Text
                  tag="p"
                  className="text-[#4F4F4F] md:text-lg text-md my-3"
                >
                  {aboutResponse?.data?.our_story_paragraph_second}
                </Text>
                <Text
                  tag="p"
                  className="text-[#4F4F4F] md:text-lg text-md my-3"
                >
                  {aboutResponse?.data?.our_story_paragraph_third}
                </Text>
              </Suspense>
            </div>
            <div className="RightWrapper md:text-end md:m-0 my-5">
              <Suspense fallback={<p>Loading image...</p>}>

                <ImageCard
                  alt="story image"
                  src={aboutResponse?.data?.image_url}
                  className="mx-auto"
                  width={600}
                  height={400}
                />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* introduction Section Content */}
      <section className="introduction-wrapper 2xl:py-28 xl:py-20 md:py-16 py-12 ">
        <div className="container ">
          <div className="flex flexWrapperResponsive md:gap-10 gap-5">
            <h2 className="text-2xl introheading relative pl-3 font-semibold font-Axiforma">
              {aboutResponse?.data?.about_introduction_heading}
            </h2>
            <div>
              <Text tag="p" className="text-2xl  font-Axiforma">
                {aboutResponse?.data?.about_introduction_paragraph}
              </Text>
              <Text tag="p" className="text-2xl md:mt-10 mt-5 font-Axiforma">
                {aboutResponse?.data?.about_introduction_paragraph_second}
              </Text>
              <Link
                href="/contact-us"
                className="discovermore addArrow inline-flex xl:text-2xl text-xl mt-5 relaitve font-Axiforma"
              >
                {aboutResponse?.data?.about_introduction_button}
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
      <section className="md:py-20 py-10">
        <div className="container">
          <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 pt-10">
            {aboutResponse?.data?.vision_data &&
              aboutResponse?.data?.vision_data.map((item, index) => (
                <React.Fragment key={index}>
                  <Suspense fallback={<CategoryCardSkeleton />}>
                    <div className="text-center column_hover">
                      <div className="cardImage">
                        <ImageCard
                          src={item?.our_vision_about_image}
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
                        {item?.our_vision_about_heading}
                      </Text>

                      <Text
                        tag="p"
                        className="text-center text-md text-primary text-[#4F4F4F] font_14"
                      >
                        {item?.our_vision_about_paragraph}
                      </Text>
                    </div>
                  </Suspense>
                </React.Fragment>
              ))}
          </div>
        </div>
      </section>
      {/* </div>
      </section> */}

      {/* why section started*/}

      <section className="why_choose py-10 md:py-20  bg-[#F6FCFE] ">
        <div className="container">
          <Suspense fallback={<p>Loading...</p>}>

            <Text tag="h2" className="text-center capitalize">
              {aboutResponse?.data?.why_chooes_secure_about_heading}{" "}
              <strong className="text_blue capitalize">
                {aboutResponse?.data?.why_chooes_secure_about_heading_second}
              </strong>
            </Text>
          </Suspense>
          <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 pt-10">
            {aboutResponse?.data?.secure_data &&
              aboutResponse?.data?.secure_data.map((item, index) => (
                <React.Fragment key={index}>
                  <Suspense fallback={<CategoryCardSkeleton />}>
                    <div className="text-center column_hover">
                      <div className="cardImage">
                        <ImageCard
                          src={item?.why_chooes_secure_about_image}
                          width={40}
                          height={40}
                          alt="avatar image"
                          className="mx-auto"
                        />
                      </div>
                      <Text
                        tag="h3"
                        className="md:text-xl text-xl font-medium text-center capitalize "
                      >
                        {item?.why_chooes_secure_heading}
                      </Text>

                      <Text
                        tag="p"
                        className="text-center text-md text-primary text-[#4F4F4F] font_14"
                      >
                        {item?.why_chooes_secure_paragraph}
                      </Text>
                    </div>
                  </Suspense>
                </React.Fragment>
              ))}
          </div>
        </div>
      </section>

      {/* why section ended*/}

      <section className="coreValue md:pt-20 py-10 pb-10  md:px-0">
        <div className="container">
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-10">
            <div className="RightWrapper md:text-end order_2">
              <Suspense fallback={<p>Loading image...</p>}>

                <div className="relative h-full w-full imgHeight">
                  <ImageCard
                    alt="story image"
                    src={aboutResponse?.data?.core_value_main_image}
                    className="absolute w-full h-full borderradius"
                    layout="fill" objectFit="cover"
                  />
                </div>
              </Suspense>
            </div>

            <div className="leftWrapper order_1 md:mt-0 mt-5">
              <Suspense fallback={<p>Loading...</p>}>

                <Text tag="h2" className="capitalize">
                  {aboutResponse?.data?.core_value_main_heading}{" "}
                  <b>{aboutResponse?.data?.core_value_main_heading_second}</b>
                </Text>
              </Suspense>

              <ul className="lg:my-12 mt-5">
                {aboutResponse?.data &&
                  aboutResponse?.data?.core_value_data_loop.map((item, index) => (

                    <React.Fragment key={index}>
                      <Suspense fallback={<p>Loading</p>}>
                        <li className="flex space-x-2 items-start mb-3">
                          <ImageCard
                            src="/Images/Approval.png"
                            width={30}
                            height={30}
                            alt="approve image"
                            className="approve_img"
                          />
                          <div>
                            <Text
                              tag="h3"
                              className="font-semibold md:text-lg text-md "
                            >
                              {item?.core_value_heading}
                            </Text>
                            <Text
                              tag="p"
                              className="text-[#4F4F4F] md:text-md  text-sm my-2  md:max-w-[90%]"
                            >
                              {item?.core_value_paragraph}
                            </Text>
                          </div>
                        </li>
                      </Suspense>
                    </React.Fragment>
                  ))}
              </ul>
            </div>

            <div className="leftWrapper md:mt-20 mt-0">
              <Suspense fallback={<p>loading</p>}>

                <Text tag="h2" className="capitalize">
                  {aboutResponse?.data?.our_services_left_heading_main}{" "}
                  <b>{aboutResponse?.data?.our_services_left_heading_main_second}</b>
                </Text>
              </Suspense>
              <ul className="lg:my-12 mt-9">
                {aboutResponse?.data &&
                  aboutResponse?.data?.our_services_left_data.map((item, index) => (
                    <React.Fragment key={index}>
                      <Suspense fallback={<p>Loading</p>}>

                        <li className="flex space-x-2 items-start mb-3">
                          <ImageCard
                            src="/Images/Approval.png"
                            width={30}
                            height={30}
                            alt="approve image"
                            className="approve_img"
                          />
                          <div>
                            <Text
                              tag="h3"
                              className="font-semibold md:text-lg text-md "
                            >
                              {item?.our_service_left_heading}
                            </Text>
                            <Text
                              tag="p"
                              className="text-[#4F4F4F] md:text-md  text-sm my-2  md:max-w-[90%]"
                            >
                              {item?.our_service_left_paragraph}
                            </Text>
                          </div>
                        </li>
                      </Suspense>
                    </React.Fragment>
                  ))}
              </ul>
            </div>
            <div className="RightWrapper md:text-end md:mt-20">
              <Suspense fallback={<p>Loading</p>}>
                <div className="relative h-full w-full imgHeight">
                  <ImageCard
                    alt="story image"
                    src={aboutResponse?.data?.our_service_left_image_urls}
                    className="absolute w-full h-full borderradius"
                    width={600}
                    height={450}
                  />
                </div>
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      <section className="ready_partner relative lg:py-20 py-10  text-center md:mt-20 mt-0">
        <Suspense fallback={<p>Loading image</p>}>

          <ImageCard
            alt="expert image"
            className="absolute -z-10"
            layout="fill"
            src="/Images/ready_expert.png"
          />
        </Suspense>
        <div className="container">
          <Suspense fallback={<p>Loading...</p>}>

            <Text tag="h2" className="text-white lg:text-5xl  md:text-3xl  text-2xl">
              {aboutResponse?.data?.partner_with_expert_about_heading} <b>Experts?</b>
            </Text>
            <Text tag="p" className="text-white md:text-lg mt-5 text-md lg:max-w-[50%] md:max-w-[70%] mx-auto">
              {aboutResponse?.data?.partner_with_expert_about_paragraph}
            </Text>
          </Suspense>
        </div>
      </section>
    </>
  );
};

export default page;


