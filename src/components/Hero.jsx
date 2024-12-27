import Link from "next/link";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import RevealAnimation from "./RevealAnimation";
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
      <div className="relative herobanner container ">
        <RevealAnimation>
          <div className="flex flex-col gap-y-4 justify-center  md:text-left items-baseline ">
            <Suspense fallback={<p>Loading Heading...</p>}>
            <RevealAnimation
                  hidden={{ opacity: 0, y: 250 }}
                  visible={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                >
              <Text tag="h1" className="banner_heading font-Axiforma">
                <span className="banner_heading_medium">
                  {data?.pages?.banner_data?.banner_heading}
                </span>
                <span className="mr-3">
                  {data?.pages?.banner_data?.banner_heading_second}
                </span>
                <br></br>
                <span className="text_blue">
                  {data?.pages?.banner_data?.banner_heading_third}
                </span>
              </Text>
                  </RevealAnimation>
                  <RevealAnimation
                  hidden={{ opacity: 0, y: 250 }}
                  visible={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.3, delay: 1 }}
                >
              <Text
                tag="p"
                className=" font-Axiforma"
                >
                {data?.pages?.banner_data?.banner_sub_headline}
              </Text>
                </RevealAnimation>
            </Suspense>
            
            {/* <div className="flex flex-wrap   text-white gap-4 mt-5">
            <RevealAnimation
                  hidden={{ opacity: 0, scale: 0.2}}
                  visible={{ opacity: 1, scale: 1}}
                  transition={{ duration: 0.3, delay: 1 }}
                >
              <Link
                href="/contact-us"
                className="btn_one global_btn capitalize font-Axiforma"
                >
                {data?.pages?.banner_data?.get_started}
              </Link>
                </RevealAnimation>
                <RevealAnimation
                  hidden={{ opacity: 0, scale: 0.2}}
                  visible={{ opacity: 1, scale: 1}}
                  transition={{ duration: 0.6, delay: 1.5 }}
                >
              <Link
                href="/contact-us"
                className="global_btn btn_two capitalize font-Axiforma"
                >
                {data?.pages?.banner_data?.book_demo}
              </Link>
                </RevealAnimation>
            </div> */}
          </div>
        </RevealAnimation>
        <div className="flex items-center justify-center rightbanner">
          <Suspense fallback={<p>Loading...</p>}>
            <ImageCard
              src={data?.pages?.banner_data?.banner_image?.url}
              className="banner_rotate relative z-20"
              alt="Hero image"
              width={550}
              height={550}
              objectFit="cover"
            />
          </Suspense>
        </div>
      </div>
    </>
  );
}









