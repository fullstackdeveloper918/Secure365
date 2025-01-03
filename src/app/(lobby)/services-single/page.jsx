import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import Text from "@/components/Text";
import ImageCard from "@/components/cards/ImageCard";
import CategoryCardSkeleton from "@/components/skeletons/CategoryCardSkeleton";

const page = async () => {
  const response = await fetch(
    "https://sellmac.cybersify.tech/secure365/wp-json/secure-plugin/v1/service-single",
    {
      cache: "no-store",
    }
  );

  const data = await response.json();

  console.log(data?.data?.service_single_data, "single");

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
              <Text tag="h2">
                {data?.data?.service_single_why_choose_heading}
                <b className="ml-2">{data?.data?.service_single_why_choose_heading_second}</b>
              </Text>
              <Text tag="p" className="text-[#4F4F4F] text-lg md:mt-5">
                {data?.data?.service_single_why_choose_paragraph}
              </Text>
            </div>
          </div>
        </div>
      </section>

      <section className="service_core_page bg-[#FAFAFA] py-16 ">
        <h2 className="text-center">
          {data?.data?.service_single_include_main_heading}
          <b className="ml-2"></b>
        </h2>
        <div className="w-full grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2 pt-10">
          {data?.data?.service_single_data &&
            data?.data?.service_single_data.map((item, index) => (
              <React.Fragment key={index}>
                <Suspense fallback={<CategoryCardSkeleton />}>
                  <div className="text-center column_hover">
                    <div className="cardImage">
                      <ImageCard
                        src={item?.service_single_page_include_image}
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
                      {item?.service_single_page_include_heading}
                    </Text>

                    <Text
                      tag="p"
                      className="text-center text-md text-primary text-[#4F4F4F] font_14"
                    >
                      {item?.service_single_page_include_paragraph}
                    </Text>
                  </div>
                </Suspense>
              </React.Fragment>
            ))}
        </div>
      </section>

      <section className="service_core_page bg-[#FAFAFA] py-16 ">
        <h2 className="text-center">
          {data?.data?.service_single_choosing_heading_main}
          <b className="ml-2"></b>

          <div className="w-full grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2 pt-10">
            {data?.data?.service_single_choosing_data &&
              data?.data?.service_single_choosing_data.map((item, index) => (
                <React.Fragment key={index}>
                  <Suspense fallback={<CategoryCardSkeleton />}>
                    {item?.service_single_choosing_image !== null && (
                      <div className="text-center column_hover">
                        <div className="cardImage">
                          <ImageCard
                            src={item?.service_single_choosing_image}
                            width={40}
                            height={40}
                            alt="avatar image"
                            className="mx-auto"
                          />
                        </div>
                      </div>
                    )}
                  </Suspense>
                </React.Fragment>
              ))}
          </div>
        </h2>
      </section>

      <ul className="lg:my-12 mt-9">
                {data?.data &&
                  data?.data?.service_single_page_data.map((item,index) => (
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
                            {item?.service_single_heading_services}
                          </Text>
                          <Text
                            tag="p"
                            className="text-[#4F4F4F] md:text-md  text-sm my-2  md:max-w-[90%]"
                          >
                            {item?.service_single_heading_paragraph}
                          </Text>
                        </div>
                      </li>
                    </React.Fragment>
                  ))}
              </ul>


              <section className="service_why_chose py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-10">
            
            <div>
              <h2>
                {data?.data?.service_single_our_promise_heading}
                {/* <b className="ml-2">data?.data?.why_choose_service_title_second</b> */}
              </h2>
              <p className="text-[#4F4F4F] text-lg md:mt-5">
               {data?.data?.service_single_our_promise_paragraph}
              </p>
            </div>
            <div>
              <ImageCard
                src={data?.data?.image_promis_urls}
                alt="banner image"
                width={700}
                height={600}
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
          <h2 className="text-white lg:text-5xl  md:text-3xl  text-2xl">
           {data?.data?.service_single_management_heading} <b className="ml-2">{data?.data?.service_single_management_heading_second}</b>
          </h2>
          <p className="text-white md:text-lg mt-5 text-md lg:max-w-[50%] md:max-w-[70%] mx-auto">
            {data?.data?.service_single_management_paragraph}
          </p>
        </div>
      </section>

      
    </>
  );
};

export default page;
