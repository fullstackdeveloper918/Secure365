import dynamic from "next/dynamic";
import Categories from "@/components/Categories";
// import Products from "@/components/Products";

import Image from "next/image";
import { Suspense } from "react";
import CategoryCardSkeleton from "@/components/skeletons/CategoryCardSkeleton";
import { Button } from "@/components/ui/button";

const Products = dynamic(() => import("../../components/Products"), {
  loading: () => <p>Loading...</p>,
});

const Text = dynamic(() => import('../../components/Text'), {
   loading: () => <p>Loading Wait...</p>
})

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

  const response = await fetch('https://sellmac.cybersify.tech/secure365/wp-json/secure-plugin/v1/home', {
    cache: 'no-store'
  });
  const data = await response.json();


  return (
    <main>
      {/* <Hero /> */}
      {/* <div className="max-w-7xl mx-auto py-16"> */}
      <section className="make_us_different py-12 pb-20">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-4 ">
            <Text tag="h2" className="heading_h2 capitalize ">
              {data?.makes_us_diffrent_heading}
            </Text>
            <Text tag="p" className="max-w-2xl text-center subheading_text ">
              {data?.makes_us_diffrent_paragraph}
            </Text>
          </div>

          <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 pt-10">
            {data?.choose_real_world && data?.choose_real_world.map((item, index) => (
              <>
                <Suspense fallback={<CategoryCardSkeleton />}>
                  <div
                    className="text-center column_hover"
                    key={item?.id}
                  >
                    <Image
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

                    <Text tag="p" className="text-center text-md text-primary text-[#4F4F4F]">
                      {item?.world_experience_paragraph}
                    </Text>
                  </div>
                </Suspense>
              </>
            ))}
          </div>
        </div>
      </section>

      {/* World Class Protection */}
      <section className="py-5 pb-16 protection_section  bg-[#011024] text-white">
        <div className="container">
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 p-10 pb-0 gap-7 ">
            <div className="left-side">
              <Text tag="h2" className="capitalize">
                {data?.world_class_protection_heading}
                <strong className=" text-[#52C5FF] font-extrabold block capitalize">
                  {data?.world_class_protection_heading_second}
                </strong>
              </Text>
              <div className="w-full grid grid-cols-2 space-y-10">

                {
                  data?.world_class_protection && data?.world_class_protection.map((protect, index) => (
                    <>
                      <div className="max-w-[80%] mt-10">
                        <Text tag="h3" className="relative border_blue_bottom">{index + 1}</Text>
                        <hr className="color-[#52C5FF] max-w-[30%] border-[#52C5FF] my-3" />
                        <Text tag="h2" className="expert_heading my-2  font-medium tet-white">{protect?.expert_guidance_heading}</Text>
                        <Text tag="p" className="text-[#878787]">
                          {protect?.expert_guidance_paragraph}
                        </Text>
                      </div>
                    </>
                  ))
                }
              </div>
            </div>
            <div className="w-full">
              <div className="">
                <Image
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

      {/* Protect your website section */}
      <section className="cybersecurity_wrapper my-5">
        <div className="container">
          <div className="grid md:grid-cols-2   p-10 gap-7  items-center ">
            <div className="left-side flex gap-5 col-md-4 col-12 ">
              <div className="flex flex-col gap-5">
                <div>
                  <Image
                    src="/Images/protection.png"
                    width={300}
                    height={300}
                    alt="kuch b"
                  />
                </div>
                <div>
                  <Image
                    src="/Images/protection.png"
                    width={300}
                    height={300}
                    alt="kuch b"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <Image
                  src="/Images/protection.png"
                  width={300}
                  height={300}
                  alt="kuch b"
                />
              </div>
            </div>

            <div className="right-side col-md-7 col-12">

              
                <Text tag="h2" className="my-2 text-black">
                  Protect your website with the power of cybersecurity.
                </Text>
                <Text tag="p" className="text-[#434242] text-lg my-5">
                  At Secure365, we understand that navigating the digital
                  world can be overwhelming. That’s why we’ve designed our
                  services to be a one-stop solution, covering everything from
                  cloud management and IT support to marketing and
                  cybersecurity.{" "}
                </Text>
                <Button className="btn_one global_btn capitalize mt-10">Get started</Button>
              </div>
            </div>

        </div>
      </section>

      {/* Ensure Your Website */}
      <section className="get_started_wrapper my-5 bg-black text-white lg:py-16 md:py-12">
        <div className="container">
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 md:p-10 p-6  gap-7 items-center">
            <div className="left-side">
              <div className="w-full ">
              
                  <Text tag="h2" className="md:mb-8 mb-4">
                    Ensure your website's protection with cutting-edge{" "}
                    <span className="text_blue">cybersecurity</span>
                  </Text>
                  <Text tag="p" className="text-white md:text-xl text-md md:my-5 my-2">
                  At Secure365, we understand that navigating the digital world can be overwhelming. That’s why we’ve designed our services to be a one-stop solution, covering.
                  </Text>
                  <Text tag="p" className="text-white md:text-xl text-lg my-2 mb-5">
                  That’s why we’ve designed our services to be a one-stop solution, covering 
                  </Text>
                  <Button className="btn_one global_btn capitalize mt-5">Get started</Button>
                </div>
             
            </div>
            <div className="w-full">
              <div className="">
                <Image
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
      <section className="key_services">
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

          {/* <div className="w-full flex justify-between items-center gap-6">
           <RecentWork />
          </div> */}
        </div>
      </section>

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



      {/* </div> */}
    </main>
  );
}


