import dynamic from 'next/dynamic'
import React from 'react'


const ImageCard = dynamic(() => import('../../../components/cards/ImageCard'), {
  loading: () => <p>Loading...</p>,
});

const Text = dynamic(() => import('../../../components/Text'), {
  loading: () => <p>Loading...</p>,
});

const page = () => {
  return (
    <>
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
              <ImageCard src="/Images/service_why.png" alt="banner image" width={700} height={600} />
            </div>
            <div>
              <h2>Why Choose <b>Secure365?</b></h2>
              <p className="text-[#4F4F4F] text-lg md:mt-5">With us, you’re not just getting IT services; you’re gaining a trusted partner. We specialize in taking the hassle out of IT management, with solutions that are tailored to fit your business’s unique needs. Our certified professionals bring decades of experience and an unwavering commitment to excellence, ensuring your technology investments drive results and reduce risks.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="service_core_page bg-[#FAFAFA] py-16 ">
        <h2 className="text-center">Our Core  <b>Services</b></h2>
        <div className="container max-w-[50%] mx-auto">

          <div className="grid grid-cols-2 gap-5 mt-10 mb-5 ">
            <div className=" mr-0 bg-white p-5 rounded-xl">
              <div className="flex items-center gap-3">
                <ImageCard src="/Images/11.png" alt="service icon" width={65} height={65} />
                <h3 className="text-lg md:max-w-[70%]">Server Management & Cloud Solutions</h3>
              </div>
            </div>
            <div className=" mr-0 bg-white p-5 rounded-xl">
              <div className="flex items-center gap-3">
                <ImageCard src="/Images/11.png" alt="service icon" width={65} height={65} />
                <h3 className="text-lg md:max-w-[70%]">IT Support & Managed Services</h3>
              </div>
            </div>
            <div className=" mr-0 bg-white p-5 rounded-xl">
              <div className="flex items-center gap-3">
                <ImageCard src="/Images/11.png" alt="service icon" width={65} height={65} />
                <h3 className="text-lg md:max-w-[70%]">Cybersecurity Solutions</h3>
              </div>
            </div>
            <div className=" mr-0 bg-white p-5 rounded-xl">
              <div className="flex items-center gap-3">
                <ImageCard src="/Images/11.png" alt="service icon" width={65} height={65} />
                <h3 className="text-lg md:max-w-[70%]">IT Support & Managed Services</h3>
              </div>
            </div>
            <div className=" mr-0 bg-white p-5 rounded-xl">
              <div className="flex items-center gap-3">
                <ImageCard src="/Images/11.png" alt="service icon" width={65} height={65} />
                <h3 className="text-lg md:max-w-[70%]">Cybersecurity Solutions</h3>
              </div>
            </div>
            <div className=" mr-0 bg-white p-5 rounded-xl">
              <div className="flex items-center gap-3">
                <ImageCard src="/Images/11.png" alt="service icon" width={65} height={65} />
                <h3 className="text-lg md:max-w-[70%]">IT Support & Managed Services</h3>
              </div>
            </div>
            <div className=" mr-0 bg-white p-5 rounded-xl">
              <div className="flex items-center gap-3">
                <ImageCard src="/Images/11.png" alt="service icon" width={65} height={65} />
                <h3 className="text-lg md:max-w-[70%]">Cybersecurity Solutions</h3>
              </div>
            </div>
            <div className=" mr-0 bg-white p-5 rounded-xl">
              <div className="flex items-center gap-3">
                <ImageCard src="/Images/11.png" alt="service icon" width={65} height={65} />
                <h3 className="text-lg md:max-w-[70%]">IT Support & Managed Services</h3>
              </div>
            </div>
            <div className=" mr-0 bg-white p-5 rounded-xl">
              <div className="flex items-center gap-3">
                <ImageCard src="/Images/11.png" alt="service icon" width={65} height={65} />
                <h3 className="text-lg md:max-w-[70%]">Cybersecurity Solutions</h3>
              </div>
            </div>
            <div className=" mr-0 bg-white p-5 rounded-xl">
              <div className="flex items-center gap-3">
                <ImageCard src="/Images/11.png" alt="service icon" width={65} height={65} />
                <h3 className="text-lg md:max-w-[70%]">Cybersecurity Solutions</h3>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="ApproachSevices  py-20   px-3 md:px-0">
        <div className="container">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="leftWrapper ">
              <Text tag="h2" className="capitalize">
                Our <b>Approach</b>
              </Text>
              <ul className="lg:my-12 mt-9">
                <li className="flex space-x-2 items-start mb-3">
                  <ImageCard src="/Images/Approval.png" width={30} height={30} alt="approve image" className="approve_img" />
                  <div>
                    <Text tag="h3" className="font-semibold md:text-lg text-md ">Proactive & Preventative</Text>
                    <Text tag="p" className="text-[#4F4F4F] md:text-md  text-sm my-2  md:max-w-[90%]">
                      We don’t just react to issues; we prevent them from happening
                    </Text>
                  </div>
                </li>
                <li className="flex space-x-2 items-start mb-3">
                  <ImageCard src="/Images/Approval.png" width={30} height={30} alt="approve image" className="approve_img" />
                  <div>
                    <Text tag="h3" className="font-semibold md:text-lg text-md ">End-to-End Solutions</Text>
                    <Text tag="p" className="text-[#4F4F4F] md:text-md  text-sm my-2  md:max-w-[90%]">
                      From assessment to implementation and ongoing support, we cover the entire process
                    </Text>
                  </div>
                </li>
                <li className="flex space-x-2 items-start mb-3">
                  <ImageCard src="/Images/Approval.png" width={30} height={30} alt="approve image" className="approve_img" />
                  <div>
                    <Text tag="h3" className="font-semibold md:text-lg text-md ">Client-Centric</Text>
                    <Text tag="p" className="text-[#4F4F4F] md:text-md  text-sm my-2  md:max-w-[90%]">
                      Your needs come first. We customize our services to fit your business’s unique goals  and challenges
                    </Text>
                  </div>
                </li>
                <li className="flex space-x-2 items-start mb-3">
                  <ImageCard src="/Images/Approval.png" width={30} height={30} alt="approve image" className="approve_img" />
                  <div>
                    <Text tag="h3" className="font-semibold md:text-lg text-md ">Cybersecurity Solutions</Text>
                    <Text tag="p" className="text-[#4F4F4F] md:text-md  text-sm my-2 md:max-w-[90%] ">
                      Our clients come first. We strive to understand their unique needs and exceed expectations in everything we do.
                    </Text>
                  </div>
                </li>
              </ul>
            </div>
            <div className="RightWrapper ">
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
        <ImageCard alt="expert image" className="absolute -z-10" layout="fill" src="/Images/ready_expert.png" />
        <div className="container">
          <h2 className="text-white lg:text-5xl  md:text-3xl  text-2xl">Ready to Partner with the <b>Experts?</b></h2>
          <p className="text-white md:text-lg mt-5 text-md lg:max-w-[50%] md:max-w-[70%] mx-auto" >Contact us today to learn more about how Secure365 can help safeguard your business and support your success</p>
        </div>
      </section>



    </>
  )
}

export default page