import dynamic from "next/dynamic";
import Categories from "@/components/Categories";
// import Products from "@/components/Products";
import Text from "../../components/Text";
import Image from "next/image";
import { Suspense } from "react";
import CategoryCardSkeleton from "@/components/skeletons/CategoryCardSkeleton";
import { Button } from "@/components/ui/button";

const Products = dynamic(() => import("../../components/Products"), {
  loading: () => <p>Loading...</p>,
});
// import RecentWork from "../../components/RecentWork";

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

export default function page() {
  return (
    <main>
      {/* <Hero /> */}
      {/* <div className="max-w-7xl mx-auto py-16"> */}
      <section className="make_us_different py-12">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-4 ">
            <Text tag="h2" className="text-4xl md:text-6xl sm:text-2xl">
              What Makes <strong className="text-black">Us Different? </strong>
            </Text>
            <Text tag="p" className="max-w-2xl text-center text-primary ">
              At Secure365, we understand that navigating the digital world can
              be overwhelming. That’s why we’ve designed our services to be a
              one-stop solution, covering everything from cloud management and
              IT support to marketing and cybersecurity.
            </Text>
          </div>
          <div className="w-full flex justify-between items-center gap-6 pt-10">
            {testimonial.map((item, index) => (
              <>
                <Suspense fallback={<CategoryCardSkeleton />}>
                  <div
                    className="flex flex-col gap-4 justify-center items-center"
                    key={item?.id}
                  >
                    <Image
                      src={item?.img}
                      width={40}
                      height={40}
                      alt={item?.icon}
                    />
                    <Text
                      tag="h3"
                      className="text-xl font-semibold text-center "
                    >
                      {item?.title}
                    </Text>
                    <Text tag="p" className="text-center text-primary">
                      {item?.text}
                    </Text>
                  </div>
                </Suspense>
              </>
            ))}
          </div>
        </div>
        </section>
        {/* World Class Protection */}
        <section className="py-5 protection_section  bg-[#011024] text-white">
         <div className="container">
         <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 p-10 gap-7">
            <div className="left-side">
              <Text tag="h2" className="text-3xl">
                world-class{" "}
                <span className="text-6xl text-[#52C5FF] font-extrabold block">
                  Protection
                </span>
              </Text>
              <div className="w-full grid grid-cols-2 mt-8">
                <div className="flex flex-col gap-4 ">
                  <Text tag="h3">01</Text>
                  <Text tag="h2">Expert Guidance</Text>
                  <Text tag="p">
                    Leverage our team’s experience to navigate complex IT
                    challenges with confidence
                  </Text>
                </div>
                <div className="flex flex-col gap-4">
                  <Text tag="h3" >01</Text>
                  <Text tag="h2">Expert Guidance</Text>
                  <Text tag="p">
                    Leverage our team’s experience to navigate complex IT
                    challenges with confidence
                  </Text>
                </div>
                <div className="flex flex-col gap-4">
                  <Text tag="h3" > 01</Text>
                  <Text tag="h2">Expert Guidance</Text>
                  <Text tag="p">
                    Leverage our team’s experience to navigate complex IT
                    challenges with confidence
                  </Text>
                </div>
                <div className="flex flex-col gap-4">
                  <Text tag="h3" >01</Text>
                  <Text tag="h2">Expert Guidance</Text>
                  <Text tag="p">
                    Leverage our team’s experience to navigate complex IT
                    challenges with confidence
                  </Text>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="">
                <Image
                  src="/Images/protection.png"
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
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 p-10 gap-7">
            <div className="left-side flex gap-5">
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

            <div className="right-side">
              <div className="w-full grid grid-cols-2 mt-8">
                <div className="flex flex-col gap-4 ">
                  <Text tag="h3">
                    Protect your website with the power of cybersecurity.
                  </Text>
                  <Text tag="p">
                    At Secure365, we understand that navigating the digital
                    world can be overwhelming. That’s why we’ve designed our
                    services to be a one-stop solution, covering everything from
                    cloud management and IT support to marketing and
                    cybersecurity.{" "}
                  </Text>
                  <Button>Get started</Button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* Ensure Your Website */}
        <section className="get_started_wrapper my-5 bg-black text-white">
       <div className="container">
       <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 p-10  gap-7">
            <div className="left-side">
              <div className="w-full grid grid-cols-2 mt-8">
                <div className="flex flex-col gap-4 ">
                  <Text tag="h3">
                    Ensure your website's protection with cutting-edge{" "}
                    <span>cybersecurity</span>
                  </Text>
                  <Text tag="p">
                    At Secure365, we understand that navigating the digital
                    world can be overwhelming. That’s why we’ve designed our
                    services to be a one-stop solution, covering
                  </Text>
                  <Text tag="p">
                    That’s why we’ve designed our services to be a one-stop
                    solution, covering
                  </Text>
                  <Button className="bg-[#52c5ff] rounded-lg">Get started</Button>
                </div>
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
        <Products />

        <Categories />
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
      {/* </div> */}
    </main>
  );
}
