import dynamic from "next/dynamic";
import React from "react";
import Text from "@/components/Text";
import ImageCard from "@/components/cards/ImageCard";

const page = async () => {
  const response = await fetch(
    "https://sellmac.cybersify.tech/secure365/wp-json/secure-plugin/v1/service",
    {
      cache: "no-store",
    }
  );

  const data = await response.json();

  console.log(data?.data, "service");

  return (
    <>
      <section className="relative overlay service_banner about_banner text-center">
        <ImageCard
          src="/Images/service_banner.png"
          className="absolute"
          layout="fill"
          alt=" about Background image"
        />
        <div className="relative container mx-auto  px-4 sm:px-6 lg:px-8 pt-20  pb-0 ">
          <Text
            tag="h1"
            className="tracking-tight text-3xl  lg:text-6xl 2xl:text-6xl	 text-center 	text-white	banner_heading"
          >
            {" "}
            From
            <Text tag="span" className="text_blue mx-2">
              {" "}
              Fighting Cybercrime
            </Text>
            <Text tag="span" className="block ">
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
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-10">
            <div>
              <ImageCard
                src={data?.data?.why_choose_service_image_url}
                alt="banner image"
                width={700}
                height={600}
              />
            </div>
            <div>
              <Text tag="h2">
                {data?.data?.why_choose_service_title}
                <b>{data?.data?.why_choose_service_title_second}</b>
              </Text>
              <Text tag="p" className="text-[#4F4F4F] text-lg md:mt-5">
                {data?.data?.why_choose_service_paragraph}
              </Text>
            </div>
          </div>
        </div>
      </section>

      <section className="service_core_page bg-[#FAFAFA] py-16 ">
        <Text tag="h2" className="text-center">
          {data?.data?.our_core_section_main_heading}<b>Services</b>
        </Text>
        <div className="container max-w-[50%] mx-auto">
          <div className="grid grid-cols-2 gap-5 mt-10 mb-5 ">
            {data?.data &&
              data?.data?.our_core_service_page_loop.map((item, index) => (
                <React.Fragment key={index}>
                  <div className=" mr-0 bg-white p-5 rounded-xl">
                    <div className="flex items-center gap-3">
                      <ImageCard
                        src={item?.our_core_image_section}
                        alt="service icon"
                        width={65}
                        height={65}
                      />
                      <Text tag="h3" className="text-lg md:max-w-[70%]">
                        {item?.our_core_service_title_section}
                      </Text>
                    </div>
                  </div>
                </React.Fragment>
              ))}
          </div>
        </div>
      </section>

      <section className="ApproachSevices  py-20   px-3 md:px-0">
        <div className="container">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="leftWrapper ">
              <Text tag="h2" className="capitalize">
                {data?.data?.our_approach_main_heading}{" "}
                <b>{data?.data?.our_approach_main_heading_second}</b>
              </Text>
              <ul className="lg:my-12 mt-9">
                {data?.data &&
                  data?.data?.our_approach_service_page_loop.map(
                    (item, index) => (
                      <React.Fragment key={index}>
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
                              {item?.our_approach_service_heading}
                            </Text>
                            <Text
                              tag="p"
                              className="text-[#4F4F4F] md:text-md  text-sm my-2  md:max-w-[90%]"
                            >
                              {item?.our_core_service_title_paragraph}
                            </Text>
                          </div>
                        </li>
                      </React.Fragment>
                    )
                  )}
              </ul>
            </div>
            <div className="RightWrapper">
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

      <section className="ready_partner relative lg:py-20 py-10  text-center ">
        <ImageCard
          alt="expert image"
          className="absolute -z-10"
          layout="fill"
          src="/Images/ready_expert.png"
        />
        <div className="container">
          <Text
            tag="h2"
            className="text-white lg:text-5xl  md:text-3xl  text-2xl"
          >
            {data?.data?.ready_to_partner_heading} <b>Experts?</b>
          </Text>
          <Text
            tag="p"
            className="text-white md:text-lg mt-5 text-md lg:max-w-[50%] md:max-w-[70%] mx-auto"
          >
            {data?.data?.ready_to_partner_paragraph}
          </Text>
        </div>
      </section>
    </>
  );
};

export default page;
