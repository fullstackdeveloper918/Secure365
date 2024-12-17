import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import { Button } from "@/components/ui/button";
import CategoryCardSkeleton from "@/components/skeletons/CategoryCardSkeleton";
import ImageCard from "../../components/cards/ImageCard";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

const Products = dynamic(() => import("../../components/Products"), {
  loading: () => <p>Loading...</p>,
});

const Hero = dynamic(() => import("../../components/Hero"));

const Categories = dynamic(() => import("../../components/Categories"), {
  loading: () => <p>Loading...</p>,
});

const Text = dynamic(() => import("../../components/Text"));

const testimonial = [
  {
    id: 1,
    img: "/Images/consumer-centric.png",
    icon: "Real World Image",
    title: "Real-World Experience",
    text: "Secure365 is built on years of battling cybercrime, managing e-commerce platforms, and developing technology strategies that work in real-world scenarios.",
  },
  {
    id: 2,
    img: "/Images/solution.png",
    icon: "Solution Image",
    title: "Comprehensive Solutions",
    text: "Secure365 is built on years of battling cybercrime, managing e-commerce platforms, and developing technology strategies that work in real-world scenarios.",
  },
  {
    id: 3,
    img: "/Images/user-experience.png",
    icon: "User Experience Image",
    title: "Victim-Centric Approach",
    text: "Secure365 is built on years of battling cybercrime, managing e-commerce platforms, and developing technology strategies that work in real-world scenarios.",
  },
];

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
      <section className="relative banner_robot bg-black	">
        <div className="baner_images">
        <span className="relative">
          <ImageCard src='/svg/before_bannerImg.svg' width={700} height={100} />
          </span>
        </div>
        <div className="baner_imagesafter">
          <span className="relative">
          <ImageCard src='/svg/after_bannerImg.svg' width={500} height={100} />
          </span>
        </div>
        <Hero />
      </section>

      {/* logos slider */}
      {/* <section className="logo_section 2xl:py-16 md:py-12 ">
        <div className="container">
          <div className="flex gap-5 justify-between items-center ">
            {data?.logo_images &&
              data?.logo_images.map((item, index) => (
                <>
                  <Suspense
                    fallback={<Skeleton className="h-12 w-12 rounded-full" />}
                  >
                    <ImageCard
                      src={item}
                      alt="slider images"
                      width={150}
                      height={200}
                    />
                  </Suspense>
                </>
              ))}
          </div>
        </div>
      </section> */}

      {/* intro section started */}
      <section className="introduction-wrapper 2xl:py-28 xl:py-20 md:py-16 py-12 ">
        <div className="container ">
          <div className="flex gap-10">
            <h2 className="text-2xl introheading relative pl-3 font-semibold font-Axiforma">
              {" "}
              Introduction:
            </h2>
            <div>
              <Suspense fallback={<p>Loading...</p>}>
              <Text tag="p" className="text-2xl font-Axiforma">
                Welcome to Secure365, where we take the complexity out of
                managing your business’s technology needs. We provide a full
                spectrum of IT solutions designed to empower your business with
                enhanced security, streamlined processes, and a support system
                that’s second to none.
              </Text>
              </Suspense>
              <Suspense fallback={<p>Loading...</p>}>
              <Text tag="p" className="text-2xl mt-10 font-Axiforma">
                Whether you’re a startup, a growing enterprise, or a seasoned
                business, Secure365 is your trusted partner for everything IT—so
                you can focus on what really matters: growing your business.
              </Text>
              </Suspense>
              {/* <Suspense fallback={<Skeleton className="h-4 w-[250px]" />}>
                <Text tag="p" className="text-2xl">
                  Welcome to Secure365, where we take the complexity out of
                  managing your business’s technology needs. We provide a full
                  spectrum of IT solutions designed to empower your business
                  with enhanced security, streamlined processes, and a support
                  system that’s second to none.
                </Text>
              </Suspense> */}
              {/* <Suspense fallback={<Skeleton className="h-4 w-[250px]" />}>
                <Text tag="p" className="text-2xl mt-5">
                  Whether you’re a startup, a growing enterprise, or a seasoned
                  business, Secure365 is your trusted partner for everything
                  IT—so you can focus on what really matters: growing your
                  business.
                </Text>
              </Suspense> */}
              <a
                href=""
                className="discovermore addArrow inline-flex xl:text-2xl text-xl mt-5 relaitve font-Axiforma"
              >
                Discover more{" "}
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
      {/* intro section ended */}

      {/* <div className="max-w-7xl mx-auto py-16"> */}
      <section className="make_us_different 2xl:py-16  pb-12 bg-[#f0f0f0] relative">
        {/* <Image src="/Images/Cybersecurity.png" alt="img" width={100} height={100} className="animate fadeInUp one" /> */}
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
            {/* <Suspense fallback={<p>Loading...</p>}>
            <Text tag="p" className=" mt-8 text-center text-2xl max-w-[60%] mx-auto font-Axiforma">
              At Secure365, we understand that navigating the <strong>digital world</strong> can be overwhelming. That’s why we’ve designed our services to be a one-stop solution, covering everything from <strong>Cloud management</strong> and <strong>IT support</strong> to marketing and cybersecurity.
            </Text>
            </Suspense> */}
            {/* <Suspense fallback={<Skeleton className="h-4 w-[200px]" />}>
              <Text tag="h2" className="heading_h2 capitalize ">
                {data?.makes_us_diffrent_heading}
                <span className="capitalize font-semibold m-2">
                  {data?.makes_us_diffrent_heading_second}
                </span>
              </Text>
            </Suspense> */}
            <Suspense fallback={<p>Loading...</p>}>
              <Text
                tag="p"
                className=" mt-8 text-center text-2xl max-w-[60%] mx-auto"
              >
                At Secure365, we understand that navigating the{" "}
                <strong>digital world</strong> can be overwhelming. That’s why
                we’ve designed our services to be a one-stop solution, covering
                everything from cloud management and IT support to marketing and
                cybersecurity.
              </Text>
            </Suspense>
            <Suspense fallback={<p>Loading...</p>}>
              <Text
                tag="p"
                className=" mt-5 text-center text-2xl max-w-[70%] mx-auto"
              >
                Our approach combines expertise, proactive management, and
                industry-leading technology to deliver seamless experiences,
                minimize risk, and maximize efficiency.
              </Text>
            </Suspense>
          </div>
        </div>
      </section>

      <section className="2xl:py-18 py-20 protection_section  bg-[#111] text-white">
        <div className="container">
          
            <h2 className="mb-5">Key Services:</h2>
          <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 xl:mt-10 mt-5">
            {data &&
              data?.key_services_data.map((item, index) => (
                <>
                  <div className="keyColumns" key={index}>
                    <Suspense fallback={<p>Loading Image...</p>}>
                      <ImageCard
                        src={item?.our_key_services_image}
                        alt="key icon"
                        width={50}
                        height={50}
                      />
                    </Suspense>
                    <Text tag="h3"> Cybersecurity Solutions</Text>
                    <Suspense fallback={<p>Loading Text...</p>}>
                      <Text tag="p">{item?.our_key_services_paragraph}</Text>
                    </Suspense>
                  </div>
                </>
              ))}
          </div>
          </div>
        
      </section>
      {/* Protect your website section  dvfd*/}
      <section className="cybersecurity_wrapper  py-5">
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1  lg:p-10 p-3 gap-7  ">
            <div className="left-side flex gap-5 col-md-4 col-12  relative">
              <div className="flex flex-col gap-5">
                {data &&
                  data?.website_protect_section_image_experience_url?.image_data?.map(
                    (item, index) => (
                      <>
                        <div>
                          <ImageCard
                            src={item?.website_protect_section_image_experience}
                            width={400}
                            height={420}
                            className="rounded-[10px]"
                            alt="kuch b"
                          />
                        </div>
                      </>
                    )
                  )}
              </div>
              <div className="flex items-center">
                <ImageCard
                  src={
                    data?.website_protect_section_image_experience_second_url
                  }
                  width={360}
                  height={200}
                  className="rounded-[10px]"
                  alt="kuch b"
                />
              </div>

              <div className="counter_box absolute ">
                <div>
                  <div>
                    <Text tag="h3" className="text-white text-3xl font-medium">
                      30+
                    </Text>
                    <Text tag="p" className="text-white leading-snug">
                      Years of Experience
                    </Text>
                  </div>
                </div>
              </div>
            </div>

            <div className="right-side col-md-7 col-12">
              <div>
                <Text
                  tag="h2"
                  className="my-2 text-black capitalize font-Axiforma"
                >
                  {data?.website_protect_heading_experience_section}
                </Text>
              </div>
              <div>
                <Text
                  tag="p"
                  className="text-[#434242] text-lg my-5 font-Axiforma"
                >
                  {data?.website_protect_paragraph_experience_section}
                </Text>
              </div>
              <div>
                <Button className="btn_one global_btn capitalize mt-10">
                  {data?.website_protect_button_experience}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ensure Your Website */}
      {/* resolving git error */}
      <section className="get_started_wrapper my-5 bg-black text-white lg:py-16 md:py-12 py-5">
        <div className="container">
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 md:p-10 p-3  gap-7 items-center">
            <div className="left-side">
              <div className="w-full ">
                <Text tag="h2" className="md:mb-8 mb-4 font-Axiforma">
                  {data?.website_experience_heading_second}
                  <span className="text_blue">cybersecurity</span>
                </Text>
                <Text
                  tag="p"
                  className="text-white md:text-lg text-md md:my-5 my-2 font-Axiforma md:max-w-[80%]"
                >
                  {data?.website_experience_paragraph_second}
                </Text>
                <Text
                  tag="p"
                  className="text-white md:text-lg text-lg my-2 mb-5  font-Axiforma"
                ></Text>
                <Button className="btn_one global_btn capitalize mt-5  font-Axiforma">
                  {data?.website_experience_button_second}
                </Button>
              </div>
            </div>
            <div className="w-full">
              <div className="">
                <ImageCard
                  src="/svg/professional_team.svg"
                  width={700}
                  height={500}
                  alt="expert guidance image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Products data={data?.key_services_data} />
      <Categories data={data} />


      <section className="promise_sec">
        <div className="container">
        <div className="promise_header flex justify-between">
          <h2 className="font-Axiforma">Our Promise</h2>
          <p>We simplify IT management by integrating security, support, and business continuity into a single, cohesive system. With Secure365, you get:</p>
        </div>
        
        <div className="left_rightContent">
          <div className="left_images">
<Image src='/Images/promise_img.png' width={700} height={400} />
          </div>
          
          <div className="flex flex-col gap-5 right_content">
<div>
  <sapn>01</sapn>
  <div>
  <h4 className="font-Axiforma">Expert Guidance</h4>
  <p>Leverage our team’s experience to navigate complex IT challenges with confidence.</p>
  </div>
</div>

<div>
<sapn>02</sapn>
<div>
  <h4>Hassle-Free Management</h4>
  <p>We take care of everything—from installation to maintenance—so you don’t have to.</p>
  </div>
</div>

<div>
<sapn>03</sapn>
<div>
  <h4>Proactive Security</h4>
  <p>Stay ahead of threats with a dedicated team monitoring and protecting your business 24/7.</p>
  </div>
</div>

<button className="btn_one global_btn capitalize font-Axiforma">Let Discuss</button>
          </div>

        </div>

        </div>
        <div></div>
      </section>



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
