import Link from "next/link";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const MotionDiv = dynamic(() => import("@/components/MotionDiv"));

const Text = dynamic(() => import("@/components/Text"));
const ImageCard = dynamic(() => import("@/components/cards/ImageCard"));

export default async function Hero() {
  const response = await fetch(
    "https://sellmac.cybersify.tech/secure365/wp-json/secure-plugin/v1/banner/home",
    {
      cache: "no-store",
    }
  );
  const data = await response.json();

  console.log(data?.pages?.banner_data?.banner_sub_headline, "data");

  return (
    <>
     hero
    </>
  );
}
