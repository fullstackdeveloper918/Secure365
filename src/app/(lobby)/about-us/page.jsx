import ImageCard from "@/components/cards/ImageCard";
import Text from "@/components/Text";
import React, { Suspense } from "react";
import Image from "next/image";
import CategoryCardSkeleton from "@/components/skeletons/CategoryCardSkeleton";
const page = async () => {
  const response = await fetch(
    "https://sellmac.cybersify.tech/secure365/wp-json/secure-plugin/v1/about",
    {
      cache: "no-store",
    }
  );

  const data = await response.json();

  return (
    <>
      <section className="relative overlay about_banner text-center">
        <ImageCard
          src={data?.data?.image_url}
          className="absolute"
          layout="fill"
          alt=" about Background image"
          objectFit="cover"
        />
        <div className="relative container mx-auto  px-4 sm:px-6 lg:px-8 pt-20  pb-0 min_height">
          <Text
            tag="h1"
            className="tracking-tighter text-3xl  lg:text-5xl xl:text-5xl	 text-center 	text-white	banner_heading"
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
            className="text-white md:max-w-[55%] mx-auto md:my-10 mt-5 md:text-xl text-md font-Axiforma"
          >
            We provide expert IT and cybersecurity solutions that protect,
            support, and empower your business.
          </Text>
        </div>
      </section>

      {/* our story section started */}
      <section className="story_section md:py-20 py-10 px-3 md:px-0">
        <div className="container">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="leftWrapper ">
              <Text tag="h2" className="capitalize">
                {data?.data?.our_story_heading}{" "}
                <b>{data?.data?.our_story_heading_second}</b>
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
              <Text
                tag="p"
                className="text-[#4F4F4F] md:text-lg text-md my-3"
              ></Text>
            </div>
            <div className="RightWrapper md:text-end md:m-0 my-5">
              <ImageCard
                alt="story image"
                src={data?.data?.image_url}
                className="mx-auto"
                width={600}
                height={550}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="w-full grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2 pt-10">
        {data?.data?.vision_data &&
          data?.data?.vision_data.map((item, index) => (
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

      {/* why section started*/}

      <section className="why_choose py-10  bg-[#F6FCFE] ">
        <div className="container">
          <h2 className="text-center capitalize">
            {data?.data?.why_chooes_secure_about_heading}{" "}
            <strong className="text_blue capitalize">
              {data?.data?.why_chooes_secure_about_heading_second}
            </strong>
          </h2>
        </div>
      </section>

      {/* why section ended*/}

      <section className="coreValue md:pt-20 pb-10 px-3 md:px-0">
        <div className="container">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="RightWrapper md:text-end order_2">
              <ImageCard
                alt="story image"
                src={data?.data?.core_value_main_image}
                // className="mx-auto"
                width={600}
                height={550}
              />
            </div>

            <div className="leftWrapper order_1">
              <Text tag="h2" className="capitalize">
                {data?.data?.core_value_main_heading}{" "}
                <b>{data?.data?.core_value_main_heading_second}</b>
              </Text>

              <ul className="lg:my-12 mt-9">
                {data?.data &&
                  data?.data?.core_value_data_loop.map((item,index) => (
                    <React.Fragment key={index}>
                      <li className="flex space-x-2 items-start mb-3">
                        <Image
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
                    </React.Fragment>
                  ))}
              </ul>
            </div>

            <div className="leftWrapper md:mt-20 mt-0">
              <Text tag="h2" className="capitalize">
                {data?.data?.our_services_left_heading_main}{" "}
                <b>{data?.data?.our_services_left_heading_main_second}</b>
              </Text>
              <ul className="lg:my-12 mt-9">
                {data?.data &&
                  data?.data?.our_services_left_data.map((item,index) => (
                    <React.Fragment key={index}>
                      <li className="flex space-x-2 items-start mb-3">
                        <Image
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
                    </React.Fragment>
                  ))}
              </ul>
            </div>
            <div className="RightWrapper md:text-end mt-20">
              <ImageCard
                alt="story image"
                src={data?.data?.our_service_left_image_urls}
                className="mx-auto"
                width={600}
                height={550}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="ready_partner relative lg:py-20 py-10  text-center md:mt-20 mt-10">
        <Image
          alt="expert image"
          className="absolute -z-10"
          layout="fill"
          src="/Images/ready_expert.png"
        />
        <div className="container">
          <h2 className="text-white lg:text-5xl  md:text-3xl  text-2xl">
            {data?.data?.partner_with_expert_about_heading} <b>Experts?</b>
          </h2>
          <p className="text-white md:text-lg mt-5 text-md lg:max-w-[50%] md:max-w-[70%] mx-auto">
            {data?.data?.partner_with_expert_about_paragraph}
          </p>
        </div>
      </section>
    </>
  );
};

export default page;
