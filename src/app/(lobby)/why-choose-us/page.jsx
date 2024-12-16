import ImageCard from "@/components/cards/ImageCard";
import Text from "@/components/Text";
import React from "react";

const page = async () => {
  const response = await fetch(
    "https://sellmac.cybersify.tech/secure365/wp-json/secure-plugin/v1/choose",
    {
      cache: "no-store",
    }
  );

  const data = await response.json();
  console.log(data?.data, "pgaechoose");

  return (
    <>
      {/* why choose page section started */}
      <section className="relative overlay about_banner text-center">
        <ImageCard
          src="/Images/why_us.png"
          className="absolute"
          layout="fill"
          alt=" about Background image"
        />
        <div className="relative container mx-auto  px-4 sm:px-6 lg:px-8 pt-20  pb-0 min_height">
          <Text tag="h1" className="text-center	banner_heading">
            {" "}
            From
            <Text tag="span" className="text_blue mx-2 mb-0">
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
            className="text-white md:max-w-[55%] mx-auto md:my-10 mt-5 md:text-2xl text-md"
          >
            We provide expert IT and cybersecurity solutions that protect,
            support, and empower your business.
          </Text>
        </div>
      </section>

      {/* it management section staered */}
      <section className="it_manangemnt py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center">
            <div>
              <p className="text-[#4F4F4F] text-lg">
                {console.log(data?.data, "comment")}
              </p>
              <p className="text-[#4F4F4F] text-lg mt-5">
                We believe that technology should be a catalyst for growth, not
                a source of frustration. That’s why we take the complexity out
                of IT management, making it simple, secure, and stress-free for
                your business
              </p>
            </div>

            <div className="text-end">
              <ImageCard
                src="/Images/secure_img.png"
                alt="why choose"
                className="mx-auto"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="set_up">
        <div className="container">
          <div className="grid md:grid-cols-2 grid-cols-1  space-x-10">
            <div className="set_leftwrapper">
              <h2>{data?.data?.why_choose_sets_us_main_heading}</h2>
              <div className="w-full h-[85%] relative">
                <ImageCard
                  src={data?.data?.why_choose_sets_us_apart_image_url}
                  alt="set apart"
                  className="absolute rounded-[20px]"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="set_rightwrapper">
              <p className="subheading_text text-semibold text-4xl">
                {data?.data?.why_choose_sets_us_apart_paragraph}
              </p>
              <ul className="lg:my-12 ">
                {data &&
                  data?.data?.why_choose_sets_data.map((item, index) => (
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
                            {item?.why_choose_us_decades_world_heading}
                          </Text>
                          <Text
                            tag="p"
                            className="text-[#4F4F4F] md:text-md  text-sm my-2  md:max-w-[90%] leading-7"
                          >
                            {item?.why_choose_us_decades_world_paragraph}
                          </Text>
                        </div>
                      </li>
                    </React.Fragment>
                  ))}
              </ul>
            </div>

            <div className="set_rightwrapper">
              <ul className="lg:my-4 ">
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
                      Proactive Protection & Support
                    </Text>
                    <Text
                      tag="p"
                      className="text-[#4F4F4F] md:text-md  text-sm my-2  md:max-w-[90%] leading-7"
                    >
                      Your success is our priority. We take the time to
                      understand your business’s unique needs and tailor our
                      services to support your goals. From small startups to
                      established enterprises, we provide personalized solutions
                      that fit your budget, scale with your growth, and adapt to
                      your changing needs. With Secure365, you’re not just a
                      client—you’re a partner
                    </Text>
                  </div>
                </li>
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
                      Transparent Communication & Reporting
                    </Text>
                    <Text
                      tag="p"
                      className="text-[#4F4F4F] md:text-md  text-sm my-2  md:max-w-[90%] leading-7"
                    >
                      Your success is our priority. We take the time to
                      understand your business’s unique needs and tailor our
                      services to support your goals. From small startups to
                      established enterprises, we provide personalized solutions
                      that fit your budget, scale with your growth, and adapt to
                      your changing needs. With Secure365, you’re not just a
                      client—you’re a partner.
                    </Text>
                  </div>
                </li>
              </ul>
            </div>

            <div className="set_rightwrapper">
              <div className="w-full h-[85%] relative">
                <ImageCard
                  src="/Images/rightImage.png"
                  alt="set apart"
                  className="absolute rounded-[20px]"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* it management section ended */}

      {/* why choose page section ended */}

      {/* Our Core Strengths started */}

      <section className="core_strenght bg-[#FBFBFB] lg:py-16 py-10  my-10">
        <div className="container">
          <h2 className="text-center">{data?.data?.why_choose_core_strength_main_heading}</h2>

          {/* add key value column from homepage */}
        </div>
      </section>
      {/* Our Core Strengths ended */}

      <section className="it_manangemnt pt-6 pb-12">
        <div className="container">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center space-x-10">
            <div className="w-full h-[100%] relative">
              <ImageCard
                src={data?.data?.why_choose_commitment_image_url}
                alt="set apart"
                className="absolute rounded-[20px]"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="md:max-w-[75%]">
              <h2 className="my-5">{data?.data?.why_choose_commitment_heading}</h2>
              <p className="text-[#4F4F4F] text-lg">
                 {data?.data?.why_choose_commitment_paragraph}
              </p>
              <p className="text-[#4F4F4F] text-lg mt-5">
                {/* We promise to always put your needs first, communicate openly,
                and provide solutions that are not only secure and reliable but
                also aligned with your business goals. Our aim is simple: to
                take the hassle out of IT, so you can focus on what matters
                most—growing your business */}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* testimonial section */}

      <section className="testimonial_wrapper py-10 bg-[#FAFAFA]">
        <div className="container">
          <h6 className="text-[#282828] text-lg my-3 text-center">
            {data?.data?.choose_our_client_user}
          </h6>
          <h2 className="text-[#282828]  text-center">{data?.data?.choose_our_client_heading}</h2>

          {/* add slider  */}
        </div>
      </section>
    </>
  );
};

export default page;
