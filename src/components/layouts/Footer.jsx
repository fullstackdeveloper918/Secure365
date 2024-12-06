import React from "react";
import Text from "../Text";
import Link from "next/link";
// import Image from "next/image";
import ImageCard from "../cards/ImageCard";

const data = [
  {
    id: 1,
    heading: "Company",
    Links: [
      { id: 1, text: "About us", href:"/about" },
      { id: 2, text: "Office", href:"/office" },
      { id: 3, text: "License Verification", href:"/license" },
      { id: 4, text: "Spay & Neuter", href:"/spay" },
    ],
  },
  {
    id: 2,
    heading: "Help",
    Links: [
      { id: 1, text: "Customer Support",href:"/support" },
      { id: 2, text: "Delivery Details",href:"/delivery" },
      { id: 3, text: "Terms & Conditions",href:"/terms" },
      { id: 4, text: "Privacy Policy",href:"/privacy" },
    ],
  },
  {
    id: 3,
    heading: "Resources",
    Links: [
      { id: 1, text: "Free ebooks",href:"/ebooks" },
      { id: 2, text: "Development Tutorial",href:"/development" },
      { id: 3, text: "How to - Blog",href:"/how" },
      { id: 4, text: "Youtube Playlist",href:"/playlist" },
    ],
  },
];

const Footer = () => {

  console.log('Footer')
  return (
    <>
      <footer className="relative text-white pt-10">
        <ImageCard
          className="absolute -z-10 w-full"
          src="/Images/footer_bg_new.png"
          layout="fill"
          alt="footer image"
          objectFit="cover"
        />
        <div className="container">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 margin_bottom lg:justify-between md:justify-start pb-12 mt-5 px-3 ">
            <div className="flex flex-col gap-5">
              <Link href="/" className="flex space-x-2">
                <ImageCard
                  src="/svg/secure.svg"
                  width={200}
                  height={30}
                  alt="Secure Logo"
                />
              </Link>
              <Text tag="p" className="max-w-[80%]">
                Clarity gives you the blocks and components you need to create a
                truly professional website.
              </Text>
              <ul className="list-none flex gap-2 mt-5">
                <Text tag="li" className="social_list">
                  {" "}
                  <ImageCard
                    src="/svg/facebook.svg"
                    width={12}
                    height={12}
                    className="social_icon facebook_icon"
                    alt="facebook"
                  />
                </Text>
                <Text tag="li" className="social_list">
                  {" "}
                  <ImageCard
                    src="/svg/insta.svg"
                    width={20}
                    height={20}
                    className="social_icon"
                    alt="facebook"
                  />
                </Text>
                <Text tag="li" className="social_list">
                  {" "}
                  <ImageCard
                    src="/svg/logo-twitter 2.svg"
                    width={20}
                    height={20}
                    className="social_icon"
                    alt="facebook"
                  />
                </Text>
                <Text tag="li" className="social_list">
                  {" "}
                  <ImageCard
                    src="/svg/git.svg"
                    width={20}
                    height={20}
                    className="social_icon"
                    alt="facebook"
                  />
                </Text>
              </ul>
            </div>
            {
              data.map((item) => (
              <React.Fragment key={item?.id}>
                 <div className="flex flex-col gap-5">
              <div className="maxWidthGiven">
                <Text
                  tag="h4"
                  className="md:text-xl text-md font-semibold text-white uppercase"
                >
                  {item?.heading}
                </Text>
                <ul className="list-none md:mt-5 mt-3">
                  {
                    item?.Links?.map((link) => (
                      <React.Fragment key={link?.id}>
                    <Text tag="li" className="md:mb-4 md:text-md mb-2 text-sm">
                       <Link href={link?.href}>
                      {link?.text}
                  </Link>
                    </Text>
                      </React.Fragment>
                    ))
                  }
                 
                 
                  
                </ul>
              </div>
            </div>
                </React.Fragment>
              ))
           
            }
          </div>
          <Text tag="hr" className="border-[#D9D9D9]" />
          <div className="copy_right py-4">
            <Text tag="p" className="text-sm text-center">
              © Copyright 2022, All Rights Reserved by <b>Secure 365</b>
            </Text>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
