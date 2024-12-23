import Link from "next/link";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { delay } from "framer-motion";
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
  return (
    <>
      <div className="relative herobanner container mx-auto grid grid-cols-1 gap-6 lg:gap-0 md:grid-cols-2 items-center justify-between  lg:px-8  pt-20 sm:pt-24 pb-0">
        <div className="flex flex-col gap-y-4 justify-center  md:text-left items-baseline  pb-10">
          <Suspense fallback={<p>Loading Heading...</p>}>
            <Text tag="h1" className="banner_heading font-Axiforma">
              <MotionDiv
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <span className="banner_heading_medium">
                  {data?.pages?.banner_data?.banner_heading}
                </span>
              </MotionDiv>
              <MotionDiv
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <span className="mr-3">
                  {" "}
                  {data?.pages?.banner_data?.banner_heading_second}
                </span>
              </MotionDiv>
              <MotionDiv
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <span className="text_blue">
                  {data?.pages?.banner_data?.banner_heading_third}
                </span>
              </MotionDiv>
            </Text>
            <Text
              tag="p"
              className="max-w-md sm:max-w-[39rem] maxWidth leading-normal text-muted-foreground text-sm sm:text-xl text-white sm:leading-8 font-Axiforma"
            >
              {data?.pages?.banner_sub_headline}
            </Text>
          </Suspense>
          <div className="flex flex-wrap   text-white gap-4 mt-5">
            <MotionDiv
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link
                href="/contact-us"
                className="btn_one global_btn capitalize font-Axiforma"
              >
                {data?.pages?.banner_data?.get_started}
              </Link>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Link
                href="/contact-us"
                className="global_btn btn_two capitalize font-Axiforma"
              >
                {data?.pages?.banner_data?.book_demo}
              </Link>
            </MotionDiv>
          </div>
        </div>
        <div className="flex items-center justify-center rightbanner">
          <Suspense fallback={<p>Loading...</p>}>
            <MotionDiv
              initial={{ opacity: 0, scale: 2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <ImageCard
                src={data?.pages?.banner_data?.banner_image?.url}
                className="banner_rotate relative z-20"
                alt="Hero image"
                width={550}
                height={550}
                objectFit="cover"
              />
            </MotionDiv>
          </Suspense>
        </div>
      </div>
    </>
  );
}
