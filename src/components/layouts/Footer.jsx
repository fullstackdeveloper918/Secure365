import React from "react";
import Text from "../Text";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="flex items-center justify-between px-5 mt-5">
        <div className="flex flex-col gap-5">
          <Text tag="li">
            <Link href="/products">icon</Link>
          </Text>
          <Text tag="li">text</Text>
          <Text tag="li">text</Text>
          <Text tag="li"> social icons</Text>
        </div>
        <div className="flex flex-col gap-5">
          <Text tag="li">
            <Link href="/about">About</Link>
          </Text>
          <Link href="/office">Office</Link>
          <Text tag="li">
            <Link href="/license">License Verification</Link>
          </Text>
          <Text tag="li">
            <Link href="/spay">Spay & Neuter</Link>
          </Text>
        </div>
        <div className="flex flex-col gap-5">
          <Text tag="li">
            <Link href="/support">Customer Support</Link>
          </Text>
          <Text tag="li">
            <Link href="/delivery">Delivery Details</Link>
          </Text>
          <Text tag="li">
            <Link href="/terms">Terms & Conditions</Link>
          </Text>
          <Text tag="li">
            <Link href="/privacy">Privacy Policy</Link>
          </Text>
        </div>
        <div className="flex flex-col gap-5">
          <Text tag="li">
            <Link href="/ebooks">Free ebooks</Link>
          </Text>
          <Text tag="li">
            <Link href="/development">Development Tutorial</Link>
          </Text>
          <Text tag="li">
            <Link href="/how">How to - Blog</Link>
          </Text>
          <Text tag="li">
            <Link href="/playlist">Youtube Playlist</Link>
          </Text>
        </div>
      </div>
    </>
  );
};

export default Footer;
