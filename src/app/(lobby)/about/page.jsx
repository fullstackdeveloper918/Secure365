import ImageCard from "@/components/cards/ImageCard";
import Text from "@/components/Text";
import React from "react";
import Image from 'next/image'
const page = async () => {

  const response = await fetch('https://sellmac.cybersify.tech/secure365/wp-json/secure-plugin/v1/about', {
    cache: 'no-store'
  });

  const data = await response.json();


  console.log(data?.data?.our_story_paragraph, 'about data')



  return (
    <>
      <section className="relative overlay about_banner text-center">
        <ImageCard
          src="/Images/about_banner.png"
          className="absolute"
          layout="fill"
          alt=" about Background image"
        />
        <div className="relative container mx-auto  px-4 sm:px-6 lg:px-8 pt-20  pb-0 min_height">
          <Text
            tag="h1"
            className="tracking-tighter text-3xl  lg:text-6xl xl:text-7xl	 text-center 	text-white	banner_heading"
          >
            {" "}
            From
            <Text tag="span" className="text_blue mx-2">
              {" "}
              Fighting Cybercrime
            </Text>
            <Text tag="span" className="block my-3">
              {" "}
              Building Secure Solutions
            </Text>
          </Text>
          <Text
            tag="p"
            className="text-white md:max-w-[55%] mx-auto md:my-10 mt-5 md:text-xl text-md"
          >
            We provide expert IT and cybersecurity solutions that protect,
            support, and empower your business.
          </Text>
        </div>
      </section>


 
{/* ready to expert */}

      {/* our story section started */}
      <section className="story_section md:py-20 py-10 px-3 md:px-0">
        <div className="container">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="leftWrapper ">
              <Text tag="h2" className="capitalize">
                Our <b>story</b>
              </Text>
              <Text
                tag="hr"
                className="border-1.5 my-5 border-[#111111] max-w-[30%]"
              />
              <Text
                tag="p"
                className="text-[#4F4F4F] md:text-lg md:mt-8 text-md"
              >
               {data?.data?.our_story_paragraph}
              </Text>
              <Text tag="p" className="text-[#4F4F4F] md:text-lg text-md my-3">
               
              </Text>
            </div>
            <div className="RightWrapper md:text-end md:m-0 my-5">
              <ImageCard
                alt="story image"
                src="/Images/story_img.png"
                className="mx-auto"
                width={600}
                height={550}
              />
            </div>
          </div>
          <Text tag="p" className="text-[#4F4F4F] md:text-lg text-md md:mt-8">
            Jonathan’s journey was further strengthened when he partnered with
            Chan Prayitno, a seasoned Network Administrator and cybersecurity
            expert with years of experience defending against digital threats.
            Together, they built Secure365 to go beyond traditional security
            measures, integrating everything from proactive fraud detection and
            IT management to post-incident support for those already impacted by
            cybercrime.
          </Text>
        </div>
      </section>

     {/* why section started*/}

     <section className="why_choose py-10  bg-[#F6FCFE] ">
  <div className="container">
    <h2 className="text-center">Why Choose <strong className="text_blue">Secure365?</strong></h2>
  </div>
</section>

      {/* why section ended*/}


      <section className="coreValue md:pt-20 pb-10 px-3 md:px-0">
        <div className="container">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="RightWrapper md:text-end order_2">
              <ImageCard
                alt="story image"
                src="/Images/coreValue.png"
                // className="mx-auto"
                width={600}
                height={550}
              />
            </div>

            <div className="leftWrapper order_1">
              <Text tag="h2" className="capitalize">
                Our <b>Core Values</b>
              </Text>

              <ul className="lg:my-12 mt-9">
                <li className="flex space-x-2 items-start mb-3">
                  <Image src="/Images/Approval.png" width={30} height={30} alt="approve image" className="approve_img" />
                  <div>
                    <Text tag="h3" className="font-semibold md:text-lg text-md ">Customer-First Approach</Text>
                    <Text tag="p" className="text-[#4F4F4F] md:text-md  text-sm my-2  md:max-w-[90%]">
                    Our clients come first. We strive to understand their unique needs and exceed expectations in everything we do.
                    </Text>
                  </div>
                </li>
                <li className="flex space-x-2 items-start mb-3">
                  <Image src="/Images/Approval.png" width={30} height={30} alt="approve image" className="approve_img" />
                  <div>
                    <Text tag="h3" className="font-semibold md:text-lg text-md ">Integrity & Transparency</Text>
                    <Text tag="p" className="text-[#4F4F4F] md:text-md  text-sm my-2  md:max-w-[90%]">
                    Our clients come first. We strive to understand their unique needs and exceed expectations in everything we do.
                    </Text>
                  </div>
                </li>
               
                <li className="flex space-x-2 items-start mb-3">
                  <Image src="/Images/Approval.png" width={30} height={30} alt="approve image" className="approve_img" />
                  <div>
                    <Text tag="h3" className="font-semibold md:text-lg text-md ">Innovation & Growth</Text>
                    <Text tag="p" className="text-[#4F4F4F] md:text-md  text-sm my-2 md:max-w-[90%] ">
                    Our clients come first. We strive to understand their unique needs and exceed expectations in everything we do.
                    </Text>
                  </div>
                </li>
                <li className="flex space-x-2 items-start mb-3">
                  <Image src="/Images/Approval.png" width={30} height={30} alt="approve image" className="approve_img" />
                  <div>
                    <Text tag="h3" className="font-semibold md:text-lg text-md ">Security as a Responsibility</Text>
                    <Text tag="p" className="text-[#4F4F4F] md:text-md  text-sm my-2 md:max-w-[90%] ">
                    Our clients come first. We strive to understand their unique needs and exceed expectations in everything we do.
                    </Text>
                  </div>
                </li>
              </ul>
            </div>

            <div className="leftWrapper md:mt-20 mt-0">
              <Text tag="h2" className="capitalize">
                Our <b>Services</b>
              </Text>
              <ul className="lg:my-12 mt-9">
                <li className="flex space-x-2 items-start mb-3">
                  <Image src="/Images/Approval.png" width={30} height={30} alt="approve image" className="approve_img" />
                  <div>
                    <Text tag="h3" className="font-semibold md:text-lg text-md ">Cybersecurity Solutions</Text>
                    <Text tag="p" className="text-[#4F4F4F] md:text-md  text-sm my-2  md:max-w-[90%]">
                    Our clients come first. We strive to understand their unique needs and exceed expectations in everything we do.
                    </Text>
                  </div>
                </li>
                <li className="flex space-x-2 items-start mb-3">
                  <Image src="/Images/Approval.png" width={30} height={30} alt="approve image" className="approve_img" />
                  <div>
                    <Text tag="h3" className="font-semibold md:text-lg text-md ">IT Support & Managed Services</Text>
                    <Text tag="p" className="text-[#4F4F4F] md:text-md  text-sm my-2  md:max-w-[90%]">
                    Our clients come first. We strive to understand their unique needs and exceed expectations in everything we do.
                    </Text>
                  </div>
                </li>
                <li className="flex space-x-2 items-start mb-3">
                  <Image src="/Images/Approval.png" width={30} height={30} alt="approve image" className="approve_img" />
                  <div>
                    <Text tag="h3" className="font-semibold md:text-lg text-md ">Cloud & Server Management</Text>
                    <Text tag="p" className="text-[#4F4F4F] md:text-md  text-sm my-2  md:max-w-[90%]">
                    Our clients come first. We strive to understand their unique needs and exceed expectations in everything we do.
                    </Text>
                  </div>
                </li>
                <li className="flex space-x-2 items-start mb-3">
                  <Image src="/Images/Approval.png" width={30} height={30} alt="approve image" className="approve_img" />
                  <div>
                    <Text tag="h3" className="font-semibold md:text-lg text-md ">Cybersecurity Solutions</Text>
                    <Text tag="p" className="text-[#4F4F4F] md:text-md  text-sm my-2 md:max-w-[90%] ">
                    Our clients come first. We strive to understand their unique needs and exceed expectations in everything we do.
                    </Text>
                  </div>
                </li>
              </ul>
            </div>
            <div className="RightWrapper md:text-end mt-20">
              <ImageCard
                alt="story image"
                src="/Images/service_Appproach.png"
                className="mx-auto"
                width={600}
                height={550}
              />
            </div>
          </div>
        </div>
      </section>


<section className="ready_partner relative lg:py-20 py-10  text-center md:mt-20 mt-10">
  <Image alt="expert image" className="absolute -z-10" layout="fill" src="/Images/ready_expert.png" />
  <div className="container">
    <h2 className="text-white lg:text-5xl  md:text-3xl  text-2xl">Ready to Partner with the <b>Experts?</b></h2>
    <p className="text-white md:text-lg mt-5 text-md lg:max-w-[50%] md:max-w-[70%] mx-auto" >Contact us today to learn more about how Secure365 can help safeguard your business and support your success</p>
  </div>
</section>





{/* service page section started */}
<section className="relative overlay service_banner about_banner text-center">
        <ImageCard
          src="/Images/service_banner.png"
          className="absolute"
          layout="fill"
          alt=" about Background image"
        />
        <div className="relative container mx-auto  px-4 sm:px-6 lg:px-8 pt-20  pb-0 min_height">
          <Text
            tag="h1"
            className="tracking-tighter text-3xl  lg:text-6xl xl:text-7xl	 text-center 	text-white	banner_heading"
          >
            {" "}
            From
            <Text tag="span" className="text_blue mx-2">
              {" "}
              Fighting Cybercrime
            </Text>
            <Text tag="span" className="block my-3">
              {" "}
              Building Secure Solutions
            </Text>
          </Text>
          <Text
            tag="p"
            className="text-white md:max-w-[55%] mx-auto md:my-10 mt-5 md:text-xl text-md"
          >
            We provide expert IT and cybersecurity solutions that protect,
            support, and empower your business.
          </Text>
        </div>
      </section>

      <section className="service_why_chose py-20">
<div className="container">
  <div className="grid md:grid-cols-2 grid-cols-1 items-center">
    <div>
      <Image src="/Images/service_why.png" alt="banner image" width={700} height={600} />
    </div>
    <div>
      <h2>Why Choose <b>Secure365?</b></h2>
      <p className="text-[#4F4F4F] text-lg md:mt-5">With us, you’re not just getting IT services; you’re gaining a trusted partner. We specialize in taking the hassle out of IT management, with solutions that are tailored to fit your business’s unique needs. Our certified professionals bring decades of experience and an unwavering commitment to excellence, ensuring your technology investments drive results and reduce risks.
      </p>
    </div>
  </div>
</div>
      </section>














    </>
  );
};

export default page;
