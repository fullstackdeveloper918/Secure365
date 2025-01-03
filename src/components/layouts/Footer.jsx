import React from "react";
import Text from "../Text";
import Link from "next/link";
// import Image from "next/image";
import ImageCard from "../cards/ImageCard";
import AnimateCursor from '../AnimateCursor/AnimateCursor'

const data = [
  {
    id: 1,
    heading: "Explore Links",
    Links: [
      { id: 1, text: "About us", href: "/about-us" },
      { id: 1, text: "Contact Us", href: "/contact-us" },
      { id: 3, text: "Services", href: "/service" },
      { id: 4, text: "Why Choose Us", href: "/why-choose-us" },



    ],
  },
  {
    id: 2,
    heading: "Quick Links",
    Links: [
      { id: 1, text: "Services", href: "/service" },
      { id: 2, text: "Why Choose Us", href: "/why-choose-us" },
      { id: 3, text: "Services", href: "/service" },
      { id: 4, text: "Why Choose Us", href: "/why-choose-us" },

    ],
  },
  {
    id: 3,
    heading: "More",
    Links: [
      { id: 1, text: "About Us", href: "/about-us" },
      { id: 2, text: "Why Choose Us", href: "/why-choose-us" },
      { id: 3, text: "Services", href: "/service" },
      { id: 4, text: "Why Choose Us", href: "/why-choose-us" },

    ],
  },
];

const Footer = () => {


  return (
    <>


{/* <div className="footerDiv"> */}
<footer className="relative text-white pt-10 bg-[#181A1F] overflow-hidden footerDiv">
        <div className="container">
<AnimateCursor />
</div>
</footer>
  {/* <div className="Header_btn">
  <h2 className="footerHeading">let’s work together</h2>
  <button className="FooterBtn">Contact Us</button>
  </div> */}

  
{/* </div> */}

      <footer className="relative text-white pt-10 bg-[#181A1F]">
        <div className="container">


          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 margin_bottom lg:justify-between md:justify-start pb-12 mt-5 px-3 ">

            {
              data.map((item) => (
                <React.Fragment key={item?.id}>
                  <div className="flex flex-col gap-5">
                    <div className="maxWidthGiven">
                      <Text
                        tag="h4"
                        className="md:text-xl text-md font-semibold text-white uppercase font-Axiforma"
                      >
                        {item?.heading}
                      </Text>
                      <ul className="list-none md:mt-5 mt-3">
                        {
                          item?.Links?.map((link) => (
                            <React.Fragment key={link?.id}>
                              <Text tag="li" className="md:mb-4 md:text-md mb-2 text-sm font-Axiforma text-[#c2c2c2] hover:text-white transition-all  duration-300">
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

          <Text tag="hr" className="border-[#434343]" />


          <div className="copy_right py-4">

            <ul className="list-none flex gap-2 mt-5">
              <Link href="/">
                <Text tag="li" className="social_list">
                  {" "}
                  <ImageCard
                    src="/svg/facebook.svg"
                    width={12}
                    height={12}
                    className="social_icon facebook_icon"
                    alt="facebook icon"
                  />
                </Text>
              </Link>
              <Link href="/">
                <Text tag="li" className="social_list font-Axiforma">
                  {" "}
                  <ImageCard
                    src="/svg/insta.svg"
                    width={20}
                    height={20}
                    className="social_icon"
                    alt="instagram icon"
                  />
                </Text>
              </Link>
              <Link href="/">
                <Text tag="li" className="social_list font-Axiforma">
                  {" "}
                  <ImageCard
                    src="/svg/logo-twitter 2.svg"
                    width={20}
                    height={20}
                    className="social_icon"
                    alt="twitter icon"
                  />
                </Text>
              </Link>
              <Link href="/">
                <Text tag="li" className="social_list">
                  {" "}
                  <ImageCard
                    src="/svg/git.svg"
                    width={20}
                    height={20}
                    className="social_icon"
                    alt="git icon"
                  />
                </Text>
              </Link>
            </ul>

            <Text tag="p" className="text-sm text-center text-[#c2c2c2]">
              © Copyright 2022, All Rights Reserved by <b>Secure 365</b>
            </Text>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
