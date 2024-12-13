import ImageCard from "@/components/cards/ImageCard";
import Text from "@/components/Text";
import React from "react";

const page = async() => {

  const response = await fetch(
    "https://sellmac.cybersify.tech/secure365/wp-json/secure-plugin/v1/choose",
    {
      cache: "no-store",
    }
  );

  const data = await response.json();
  console.log(data, 'choose')

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
                {console.log(data?.data, 'comment')}
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
              <h2>What Sets Us Apart </h2>
              <div className="w-full h-[85%] relative">
                <ImageCard
                  src="/Images/set_Apart.png"
                  alt="set apart"
                  className="absolute rounded-[20px]"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="set_rightwrapper">
              <p className="subheading_text text-semibold text-4xl">
                Our approach is built on three core principles: Expertise,
                Simplicity, and Commitment. Here’s what makes Secure365
                different:
              </p>
              <ul className="lg:my-12 ">
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
                       Decades of Real-World Experience
                    </Text>
                    <Text
                      tag="p"
                      className="text-[#4F4F4F] md:text-md  text-sm my-2  md:max-w-[90%] leading-7"
                    >
                      Secure365 was founded by Jonathan Brax, whose background
                      in criminology and years of experience battling digital
                      fraud bring a unique perspective to cybersecurity.
                      Alongside a team of seasoned IT professionals, Jonathan
                      built Secure365 to be more than just a service
                      provider—it’s a response to the frustrations faced by
                      businesses in navigating the complex world of cyber
                      threats and IT management. With our expertise in
                      technology and first-hand understanding of the challenges
                      businesses face, we offer solutions that are practical,
                      effective, and backed by real-world experience.
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
                      Customer-Centric Approach
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
                      All-in-One IT Solutions
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
          <h2 className="text-center">Our Core Strengths</h2>

          {/* add key value column from homepage */}
        </div>
      </section>
      {/* Our Core Strengths ended */}

      <section className="it_manangemnt pt-6 pb-12">
        <div className="container">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center space-x-10">
            <div className="w-full h-[100%] relative">
              <ImageCard
                src="/Images/set_Apart.png"
                alt="set apart"
                className="absolute rounded-[20px]"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="md:max-w-[75%]">
              <h2 className="my-5">Our Commitment to You</h2>
              <p className="text-[#4F4F4F] text-lg">
                We know that choosing an IT partner is a big decision, and we
                don’t take that responsibility lightly. At Secure365, our
                commitment goes beyond providing exceptional services—we’re
                dedicated to building lasting partnerships that empower our
                clients to succeed.{" "}
              </p>
              <p className="text-[#4F4F4F] text-lg mt-5">
                We promise to always put your needs first, communicate openly,
                and provide solutions that are not only secure and reliable but
                also aligned with your business goals. Our aim is simple: to
                take the hassle out of IT, so you can focus on what matters
                most—growing your business
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* testimonial section */}

      <section className="testimonial_wrapper py-10 bg-[#FAFAFA]">
        <div className="container">
          <h6 className="text-[#282828] text-lg my-3 text-center">
            20000+ Happy Landingfolio Users
          </h6>
          <h2 className="text-[#282828]  text-center">What Our Clients Say</h2>

          {/* add slider  */}
        </div>
      </section>
    </>
  );
};

export default page;
