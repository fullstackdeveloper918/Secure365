import ImageCard from "@/components/cards/ImageCard";
import Text from "@/components/Text";
import React from "react";

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
        <div className="relative container mx-auto  px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28  pb-0 min_height">
          <Text
            tag="h1"
            className="tracking-tighter text-3xl sm:text-5xl lg:text-6xl xl:text-7xl	 text-center 	text-white	banner_heading"
          >
            {" "}
            From
            <Text tag="span" className="text_blue mx-2">
              {" "}
              Fighting Cybercrime
            </Text>
            <Text tag="span" className="text-5xl block my-3">
              {" "}
              Building Secure Solutions
            </Text>
          </Text>
          <Text
            tag="p"
            className="text-white md:max-w-[55%] mx-auto my-10 text-xl"
          >
            We provide expert IT and cybersecurity solutions that protect,
            support, and empower your business.
          </Text>
        </div>
      </section>

      {/* our story section started */}
      <section className="story_section py-20 px-3 md:px-0">
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
            <div className="RightWrapper md:text-end">
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

      <section className="coreValue py-20 px-3 md:px-0">
        <div className="container">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="RightWrapper md:text-end">
              <ImageCard
                alt="story image"
                src="/Images/story_img.png"
                className="mx-auto"
                width={600}
                height={550}
              />
            </div>

            <div className="leftWrapper ">
              <Text tag="h2" className="capitalize">
                Our <b>Core Values</b>
              </Text>

              <ul>
                <li>
                  <div>
                    <Text tag="h3">Customer-First Approach</Text>
                    <Text tag="p">
                      Our clients come first. We strive to understand their
                      unique needs and exceed expectations in everything we do.
                    </Text>
                  </div>
                </li>
              </ul>
            </div>

            <div className="leftWrapper ">
              <Text tag="h2" className="capitalize">
                Our <b>Core Values</b>
              </Text>
              <ul>
                <li>
                  <div>
                    <Text tag="h3">Customer-First Approach</Text>
                    <Text tag="p">
                      Our clients come first. We strive to understand their
                      unique needs and exceed expectations in everything we do.
                    </Text>
                  </div>
                </li>
              </ul>
            </div>
            <div className="RightWrapper md:text-end">
              <ImageCard
                alt="story image"
                src="/Images/story_img.png"
                className="mx-auto"
                width={600}
                height={550}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
