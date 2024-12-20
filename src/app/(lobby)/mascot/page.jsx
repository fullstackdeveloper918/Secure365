import React from 'react'

const page = () => {
  return (
    <section className="relative overlay about_banner text-center">
    <Image
      src="/Images/contact_banner.png"
      className="absolute"
      layout="fill"
      alt=" about Background image"
      objectFit="cover"
    />
    <div className="relative container mx-auto  px-4 sm:px-6 lg:px-8 pt-20  pb-0 ">
      <Text
        tag="h1"
        className="tracking-tighter text-3xl font-Axiforma  lg:text-5xl xl:text-5xl	 text-center 	text-white	banner_heading"
      >
        Get in Touch with
        <Text tag="span" className="text_blue mx-2 block">
          {" "}
          Secure365—Your Trusted IT Partner
        </Text>

      </Text>
      <Text
        tag="p"
        className="text-white md:max-w-[40%] mx-auto md:my-7 mt-5 md:text-xl text-md font-Axiforma"
      >
        Have a question or need support? Our team is ready to help you secure, optimize, and grow your business
      </Text>
    </div>
  </section>
  )
}

export default page