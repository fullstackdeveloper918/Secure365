import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Text from "../../components/Text";
import Image from "next/image";
import { Suspense } from "react";
import CategoryCardSkeleton from "@/components/skeletons/CategoryCardSkeleton";
import RecentWork from "../../components/RecentWork";


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
      <div className="max-w-7xl mx-auto">
     
        <div className="w-full">
          <div className="flex flex-col items-center justify-between gap-4">
            <Text tag="h2" className="text-4xl">
              What Makes Us Different?
            </Text>
            <Text tag="p" className="max-w-2xl">
              At Secure365, we understand that navigating the digital world can
              be overwhelming. That’s why we’ve designed our services to be a
              one-stop solution, covering everything from cloud management and
              IT support to marketing and cybersecurity.
            </Text>
          </div>
          <div className="w-full flex justify-between items-center gap-6">
            {testimonial.map((item, index) => (
              <>
                <Suspense  fallback={<CategoryCardSkeleton />}>
                  <div className="flex flex-col gap-4" key={item?.id}>
                    <Image
                      src={item?.img}
                      width={40}
                      height={40}
                      alt={item?.icon}
                    />
                    <Text tag="h3" className="text-xl">
                      {item?.title}
                    </Text>
                    <Text tag="p">{item?.text}</Text>
                  </div>
                </Suspense>
              </>
            ))}
          </div>
        </div>

    
        <Products />
  
        <Categories />

 

         <div className="w-full">
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
      </div>
    </main>
  );
}
