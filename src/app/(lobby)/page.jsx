"use client";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ProductCardSkeleton from "@/components/skeletons/ProductCardSkeleton";
import { motion } from "framer-motion";
import { MotionWrapper } from "@/components/MotionWrapper";
import { FadeUp } from "@/lib/motion";


const Products = dynamic(() => import("../../components/Products"), {
  loading: () => <p>Loading...</p>,
});

const Hero = dynamic(() => import("../../components/Hero"), {
  loading: () => <ProductCardSkeleton />,
});

const Categories = dynamic(() => import("../../components/Categories"), {
  loading: () => <p>Loading...</p>,
});

const CategoryCardSkeleton = dynamic(
  () => import("../../components/skeletons/CategoryCardSkeleton"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const ImageCard = dynamic(() => import("../../components/cards/ImageCard"), {
  loading: () => <p>Loading...</p>,
});

const RecentWork = dynamic(() => import("../../components/RecentWork"));

const Text = dynamic(() => import("../../components/Text"), {
  loading: () => <p>Loading Wait...</p>,
});

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

  console.log(data, "bete");

  return (
    <main>
      <section className="relative overlay banner_robot">
        <Image
          src="/Images/homepage_banner.png"
          className="absolute"
          layout="fill"
          alt="background image"
        />
        <Suspense fallback={<ProductCardSkeleton />}>
          <Hero />
        </Suspense>
      </section>

      {/* logos slider */}
      <section className="logo_section lg:py-10 py-10 ">
        <div className="container">
          <div className="flex gap-5 justify-between items-center">
            {data?.logo_images &&
              data?.logo_images.map((item, index) => (
                <>
                  <MotionWrapper key={index} delay={index * 0.1}>
                    <ImageCard
                      src={item}
                      alt="slider images"
                      width={150}
                      height={200}
                    />
                  </MotionWrapper>
                </>
              ))}
          </div>
        </div>
      </section>

      {/* <div className="max-w-7xl mx-auto py-16"> */}
      <section className="make_us_different md:py-10 md:pb-10 pb-10 ">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-4 ">
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

          <div className="w-full grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 pt-10">
            {data?.choose_real_world &&
              data?.choose_real_world.map((item, index) => (
                <React.Fragment key={index}>
                  <Suspense fallback={<CategoryCardSkeleton />}>
                    <div className="text-center column_hover">
                      <ImageCard
                        src={item?.world_icon_url}
                        width={40}
                        height={40}
                        alt="avatar image"
                        className="mx-auto mb-3"
                      />
                      <Text
                        tag="h3"
                        className="md:text-xl text-xl mb-2 font-medium text-center "
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
      </section>

      {/* World Class Protection */}
      <section className="py-5 md:pb-20  md:pt-12 pb-0 protection_section  bg-[#011024] text-white">
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
                      <motion.div
                       
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: index + 1 * 0.3 }}
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
                      </motion.div>
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
      </section>

      {/* Protect your website section  dvfd*/}
      <section className="cybersecurity_wrapper  py-5">
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1  lg:p-10 p-3 gap-7  items-center ">
            <div className="left-side flex gap-5 col-md-4 col-12  relative">
              <div className="flex flex-col gap-5">
                {data &&
                  data?.website_protect_section_image_experience_url?.image_data?.map(
                    (item, index) => (
                      <>
                        <motion.div
                          initial={{ opacity: 0, x: -100 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: index + 1 * 0.5 }}
                        >
                          <ImageCard
                            src={item?.website_protect_section_image_experience}
                            width={400}
                            height={420}
                            className="rounded-[10px]"
                            alt="kuch b"
                          />
                        </motion.div>
                      </>
                    )
                  )}
              </div>
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center"
              >
                <ImageCard
                  src={
                    data?.website_protect_section_image_experience_second_url
                  }
                  width={360}
                  height={450}
                   className="rounded-[10px]"
                  alt="kuch b"
                />
              </motion.div>

              <div className="counter_box absolute ">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div>
                    <h3 className="text-white text-3xl font-medium">30+</h3>
                    <p className="text-white leading-snug">
                      Years of Experience
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="right-side col-md-7 col-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Text tag="h2" className="my-2 text-black capitalize font-Axiforma">
                  {data?.website_protect_heading_experience_section}
                </Text>
              </motion.div>
              <motion.div
                variants={FadeUp(0.4)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
              >
                <Text tag="p" className="text-[#434242] text-lg my-5 font-Axiforma">
                  {data?.website_protect_paragraph_experience_section}
                </Text>
              </motion.div>
              <motion.div
                variants={FadeUp(0.6)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
              >
                <Button className="btn_one global_btn capitalize mt-10">
                  {data?.website_protect_button_experience}
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Ensure Your Website */}
      <section className="get_started_wrapper my-5 bg-black text-white lg:py-16 md:py-12 py-5">
        <div className="container">
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 md:p-10 p-3  gap-7 items-center">
            <div className="left-side">
              <div className="w-full ">
                <Text tag="h2" className="md:mb-8 mb-4">
                  Ensure your website's protection with cutting-edge{" "}
                  <span className="text_blue">cybersecurity</span>
                </Text>
                <Text
                  tag="p"
                  className="text-white md:text-xl text-md md:my-5 my-2"
                >
                  At Secure365, we understand that navigating the digital world
                  can be overwhelming. That’s why we’ve designed our services to
                  be a one-stop solution, covering.
                </Text>
                <Text
                  tag="p"
                  className="text-white md:text-xl text-lg my-2 mb-5"
                >
                  That’s why we’ve designed our services to be a one-stop
                  solution, covering
                </Text>
                <Button className="btn_one global_btn capitalize mt-5">
                  Get started
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

      {/* <Products /> */}
      <Products data={data?.key_services_data} />

      <Categories data={data} />

      {/* <section className="key_services">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-4">
            <Text tag="h2" className="text-4xl">
              Our Recent Best Works
            </Text>
            <Text tag="p" className="max-w-2xl">
              Our recent projects highlight our expertise in delivering tailored
              solutions that meet the unique needs and objectives of our
              clients, custom software.
            </Text>
          </div>

          <div className="w-full flex justify-between items-center gap-6">
            <RecentWork />
          </div>
        </div>
      </section> */}


{/* banner section new  */}
<section className="bannerNew bg-black relative overflow-hidden">
  <div className="absolute  top-20 h-full w-full">
  <Image src="/Images/3d.png" alt="wave" layout="fill" objectFit="cover" className="absolute img_drop " />
  </div>
 <div className="grid lg:grid-cols-2 grid-cols-1">
 <div className="container relative z-10">
<div>
<h1 className="text-white"><span>Expert Business</span> IT Services. <span className="text_blue font-medium block textSpan">All in One Place</span></h1>
  <p className="text-white mt-10">From cybersecurity to cloud solutions, we’ve got your business covered securely and efficiently.
  </p>
</div>
 </div>
 <div className="text-center">
  <Image src="/Images/Globe.png" alt="globe" width={650} height={650} objectFit="cover" className="mx-auto" />
 </div>
 </div>
</section>
{/* banner section ended*/}

{/* intro section strated */}
<section className="intro py-16 text-center"> 
  <div className="container">
    <h2>Introduction:</h2>
    <p className="max-w-[70%] text-xl my-8 mx-auto">
    Welcome to Secure365, where we take the complexity out of managing your business’s technology needs. We provide a full spectrum of IT solutions designed to empower your business with enhanced security, streamlined processes, and a support system that’s second to none. Whether you’re a startup, a growing enterprise, or a seasoned business, Secure365 is your trusted partner for everything IT—so you can focus on what really matters: growing your business.
    </p>
  </div>
</section>
{/* intro section ended */}


    </main>
  );
}
