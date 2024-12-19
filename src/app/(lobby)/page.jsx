import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import { Button } from "@/components/ui/button";
import ImageCard from "../../components/cards/ImageCard";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

const Products = dynamic(() => import("../../components/Products"), {
  loading: () => <p>Loading...</p>,
});

const Hero = dynamic(() => import("../../components/Hero"));

const Categories = dynamic(() => import("../../components/Categories"), {
  loading: () => <p>Loading...</p>,
});

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
            <Suspense fallback={<p>Loading...</p>}>
              <ImageCard
                src="/svg/before_bannerImg.svg"
                width={700}
                height={100}
              />
            </Suspense>
          </span>
        </div>
        <div className="baner_imagesafter">
          <span className="relative">
            <Suspense fallback={<p>Loading...</p>}>
              <ImageCard
                src="/svg/after_bannerImg.svg"
                width={500}
                height={100}
              />
            </Suspense>
          </span>
        </div>
        <Hero />
      </section>

      {/* introduction Section Content */}
      <section className="introduction-wrapper 2xl:py-28 xl:py-20 md:py-16 py-12 ">
        <div className="container ">
          <div className="flex flexWrapperResponsive md:gap-10 gap-5">
            <h2 className="text-2xl introheading relative pl-3 font-semibold font-Axiforma">
              {data?.home_introduction_section_heading_main}
            </h2>
            <div>
              <Suspense fallback={<p>Loading...</p>}>
                <Text tag="p" className="text-2xl  font-Axiforma">
                  {data?.home_introduction_section_paragreaph_first}
                </Text>
              </Suspense>
              <Suspense fallback={<p>Loading...</p>}>
                <Text tag="p" className="text-2xl md:mt-10 mt-5 font-Axiforma">
                  {data?.home_introduction_section_paragreaph_second}
                </Text>
              </Suspense>

              <a
                href=""
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
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Ends Here */}

      {/* What Makes us Different Section Starts */}

      <section className="make_us_different 2xl:py-16  pb-12 bg-[#f0f0f0] relative">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-2 ">
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
                className=" md:mt-8 mt-4 text-center text-2xl max-w-[60%] mx-auto"
              >
                {data?.makes_us_diffrent_paragraph}
              </Text>
            </Suspense>
            <Suspense fallback={<p>Loading...</p>}>
              <Text
                tag="p"
                className=" mt-5 text-center text-2xl max-w-[70%] mx-auto"
              >
                {data?.makes_us_diffrent_paragraph_second}
              </Text>
            </Suspense>
          </div>
        </div>
      </section>

      {/* What Makes us Different Section Ends */}

      {/* Key Services Section Starts */}

      <section className="2xl:py-18 xl:py-20 py-12 protection_section  bg-[#111] text-white">
        <div className="container">
          <h2 className="mb-5">{data?.home_key_service_first_heading}:</h2>
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

      {/* Protect Your Website Section Starts*/}

      <section className="cybersecurity_wrapper  py-10">
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1  lg:p-10  gap-7 items-center  ">
            <div className="left-side flex gap-5 col-md-4 col-12  relative">
              <div className="flex flex-col gap-5">
                {data &&
                  data?.website_protect_section_image_experience_url?.image_data?.map(
                    (item, index) => (
                      <>
                        <div className="leftSideImage">
                          <Suspense fallback={<p>Loading...</p>}>
                            <ImageCard
                              src={
                                item?.website_protect_section_image_experience
                              }
                              width={380}
                              height={420}
                              className="rounded-[10px]"
                              alt="kuch b"
                            />
                          </Suspense>
                        </div>
                      </>
                    )
                  )}
              </div>
              <div className="flex items-center">
                <Suspense fallback={<p>Loading...</p>}>
                  <ImageCard
                    src={
                      data?.website_protect_section_image_experience_second_url
                    }
                    width={300}
                    height={200}
                    className="rounded-[10px]"
                    alt="kuch b"
                  />
                </Suspense>
              </div>

              <div className="counter_box absolute ">
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
              </div>
            </div>

            <div className="right-side col-md-7 col-12">
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
                <a
                  href="#"
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
                      stroke-width="2.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Protect Your Website Section Ends*/}

      {/* Ensure Your Website Section Starts */}

      <section className="get_started_wrapper my-5 bg-[#060606] text-white lg:py-16 md:py-12 py-12">
        <div className="container">
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 md:p-10   gap-7 items-center">
            <div className="left-side">
              <div className="w-full ">
                <Text
                  tag="h2"
                  className="md:mb-8 mb-4 font-Axiforma capitalize tracking-wide"
                >
                  {data?.website_experience_heading_second}
                  <span className="text_blue ml-2">cybersecurity</span>
                </Text>

                <Text
                  tag="p"
                  className="text-[#c2c2c2] md:text-lg text-md md:my-5 my-2 font-Axiforma md:max-w-[80%]"
                >
                  {/* {data?.website_experience_paragraph_second} */}
                  At Secure365, we understand that navigating the digital world
                  can be overwhelming. That’s why we’ve designed our services to
                  be a one-stop solution, covering everything from cloud
                  management and IT support to marketing and cybersecurity.
                </Text>

                <Text
                  tag="p"
                  className="text-[#c2c2c2] md:text-lg text-lg my-2 mb-5  font-Axiforma md:max-w-[80%]"
                >
                  Our approach combines expertise, proactive management, and
                  industry-leading technology to deliver seamless experiences,
                  minimize risk, and maximize efficiency.
                </Text>

                <Button className="btn_one global_btn capitalize mt-5  font-Axiforma">
                  {data?.website_experience_button_second}
                </Button>
              </div>
            </div>
            <div className="w-full">
              <div className="">
                <Suspense fallback={<p>Loading...</p>}>
                  <ImageCard
                    src="/svg/professional_team.svg"
                    width={700}
                    height={500}
                    alt="expert guidance image"
                  />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ensure Your Website Section Ends */}

      {/* Our Key Services Section Starts */}
      <Products data={data?.key_services_data} />

      {/* Our Key Services Section Ends */}

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
                  width={700}
                  height={400}
                />
              </Suspense>
            </div>

            <div className="flex flex-col gap-5 right_content">
              {data &&
                data?.home_page_our_promise_data?.map((item, index) => (
                  <Suspense fallback={<p>Loading...</p>}>
                    <React.Fragment key={index}>
                      <div className="numberWrapper">
                        <span>01</span>
                        <div>
                          <h4 className="font-Axiforma">
                            {item?.home_page_our_promise_title}
                          </h4>
                          <p>{item?.home_page_our_promise_servise_paragraph}</p>
                        </div>
                      </div>
                    </React.Fragment>
                  </Suspense>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise Section Ends */}

      {/* Contact Section Starts */}

      <section className="lookingService">
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

{
  /* <section className="make_us_different 2xl:pb-20  pb-12">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-2 ">
            <Text tag="h2" className="heading_h2 capitalize ">
              {data?.makes_us_diffrent_heading}
              <span className="capitalize font-semibold m-2">
                {data?.makes_us_diffrent_heading_second}
              </span>
            </Text>
            <Text tag="p" className="max-w-2xl text-center subheading_text ">
              {data?.makes_us_diffrent_paragraph}
            </Text>
          </div>

          <div className="w-full grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2 pt-10">
            {data?.choose_real_world &&
              data?.choose_real_world.map((item, index) => (
                <React.Fragment key={index}>
                  <Suspense fallback={<CategoryCardSkeleton />}>
                    <div className="text-center column_hover">
                      <div className="cardImage">
                        <ImageCard
                          src={item?.world_icon_url}
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
                        {item?.world_heading}
                      </Text>

                      <Text
                        tag="p"
                        className="text-center text-md text-primary text-[#4F4F4F] font_14"
                      >
                        {item?.world_experience_paragraph}
                      </Text>
                    </div>
                  </Suspense>
                </React.Fragment>
              ))}
          </div>
        </div>
      </section> */
}

{
  /* World Class Protection */
}
{
  /* <section className="2xl:py-14 py-14 protection_section  bg-[#011024] text-white">
        <div className="container">
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl:p-10 2xl:pb-0 p-3 md:pb-0 gap-7 ">
            <div className="left-side">
              <Text tag="h2" className="capitalize">
                {data?.world_class_protection_heading}
                <strong className=" text-[#52C5FF] font-bold block capitalize">
                  {data?.world_class_protection_heading_second}
                </strong>
              </Text>
              <div className="w-full grid sm:grid-cols-2 grid-cols-1 space-y-10 items-end">
                {data?.world_class_protection &&
                  data?.world_class_protection.map((protect, index) => (
                    <>
                      <div
                      >
                        <div className="max_Width ">
                          <Text
                            tag="h3"
                            className="relative border_blue_bottom"
                          >
                            {index + 1}
                          </Text>
                          <hr className="color-[#52C5FF] max-w-[30%] border-[#52C5FF] my-3" />
                          <Text
                            tag="h2"
                            className="expert_heading my-2  font-medium tet-white"
                          >
                            {protect?.expert_guidance_heading}
                          </Text>
                          <Text tag="p" className="text-[#878787]">
                            {protect?.expert_guidance_paragraph}
                          </Text>
                        </div>
                      </div>
                    </>
                  ))}
              </div>
            </div>
            <div className="w-full">
              <div className="">
                <ImageCard
                  src={data?.expert_image}
                  width={700}
                  height={500}
                  alt="expert guidance image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>  */
}
{
  /* contact page design start */
}

{
  /* banner section  same*/
}
{
  /* 
<section className="contactformWrapper py-12">
  <div className="container">
    <div className="flex">
      <div className="col-left">
        <h2>How to Reach Us</h2>
        <p>We make it easy for you to get in touch, whether you prefer a quick phone call, a detailed email, or scheduling a consultation at a time that works for you.</p>

        <ul>
          <li>
            <div>
              <h3>+(800) 311-5990</h3>
              <p>Call Now and Get a FREE Consultation</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-right"></div>
    </div>
  </div>
</section> */
}
{
  /* contact page design ended */
}
