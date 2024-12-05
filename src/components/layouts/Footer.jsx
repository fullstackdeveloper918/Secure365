import React from "react";
import Text from "../Text";
import Link from "next/link";
import Image from "next/image";







const Footer = () => {
  return (
    <>
      <footer className="relative text-white pt-10">
        <Image className="absolute -z-10 w-full" src="/Images/footer_bg.png" layout="fill" alt="footer bg" objectFit="cover" />
        <div className="container">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 margin_bottom lg:justify-between lg:justify-start pb-12 mt-5 px-3 ">
            <div className="flex flex-col gap-5">
              <Link href="/" className="flex space-x-2">
                <Image src="/svg/secure.svg" width={200} height={30} alt="Secure Logo" />
              </Link>
              <p className="max-w-[80%]">
                Clarity gives you the blocks and components you need to create a truly professional website.
              </p>
              <ul className="list-none flex gap-2">
               <li className="social_list">  <Image  src="/svg/facebook.svg"  width={12} height={12} className="social_icon" alt="facebook"  /></li>
               <li className="social_list">  <Image  src="/svg/insta.svg"  width={20} height={20} className="social_icon" alt="facebook"  /></li>
               <li className="social_list">  <Image  src="/svg/logo-twitter 2.svg"  width={20} height={20} className="social_icon" alt="facebook"  /></li>
               <li className="social_list">  <Image  src="/svg/git.svg"  width={20} height={20} className="social_icon" alt="facebook"  /></li>
              </ul >

            </div>
            <div className="flex flex-col gap-5">
            <div className="maxWidthGiven">
              <Text tag="h4" className="text-xl font-semibold text-white uppercase" href="/about">Company</Text>
              <ul className="list-none mt-5">
                <Text tag="li" className="mb-4 text-md">
                  About us
                </Text>
                <Text tag="li" className="mb-4 text-md">
                  <Link href="/office">Office</Link>
                </Text>
                <Text tag="li" className="mb-4 text-md">
                  <Link href="/license">License Verification</Link>
                </Text>
                <Text tag="li" className="mb-4 text-md">
                  <Link href="/spay">Spay & Neuter</Link>
                </Text>
              </ul>
            </div>
            </div>
            <div className="flex flex-col gap-5">
            
            <div className="maxWidthGiven">
            <Text tag="h4" className="text-xl font-semibold text-white uppercase" href="/about">Help</Text>
            <ul className="list-none mt-5">
            <Text tag="li" className="mb-4 text-md">
                <Link href="/support">Customer Support</Link>
              </Text>
              <Text tag="li" className="mb-4 text-md">
                <Link href="/delivery">Delivery Details</Link>
              </Text>
              <Text tag="li" className="mb-4 text-md">
                <Link href="/terms">Terms & Conditions</Link>
              </Text>
              <Text tag="li" className="mb-4 text-md">
                <Link href="/privacy">Privacy Policy</Link>
              </Text>
              </ul>
            </div>
            </div>
            <div className="flex flex-col gap-5 ">
            <div className="maxWidthGiven">
            <Text tag="h4" className="text-xl font-semibold text-white uppercase" href="/about">Resources</Text>
            <ul className="list-none mt-5">
            <Text tag="li" className="mb-4 text-md">
                <Link href="/ebooks">Free ebooks</Link>
              </Text>
              <Text tag="li" className="mb-4 text-md">
                <Link href="/development">Development Tutorial</Link>
              </Text>
              <Text tag="li" className="mb-4 text-md">
                <Link href="/how">How to - Blog</Link>
              </Text>
              <Text tag="li" className="mb-4 text-md">
                <Link href="/playlist">Youtube Playlist</Link>
              </Text>
              </ul>
            </div>
            </div>
          </div>
          <hr className="border-[#D9D9D9]" />
          <div className="copy_right py-3">
            <p className="text-xs text-center">© Copyright 2022, All Rights Reserved by <b>Secure 365</b></p>

          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
