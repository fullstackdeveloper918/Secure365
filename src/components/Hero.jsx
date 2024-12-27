
import dynamic from "next/dynamic";
import { Suspense } from "react";
import RevealAnimation from "./RevealAnimation";
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

        <div className="flex flex-col gap-y-4 justify-center  md:text-left items-baseline ">
          <Suspense fallback={<p>Loading Heading...</p>}>

            <Text tag="h1" className="banner_heading font-Axiforma">
              <div className="overflow-hidden">

                <RevealAnimation
                  hidden={{ opacity: 0, y: 100 }}
                  visible={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >

                  <span className="banner_heading_medium">
                    {data?.pages?.banner_data?.banner_heading}
                  </span>
              

                
                  <span className="mr-3">
                    {data?.pages?.banner_data?.banner_heading_second}
                  </span>
                  </RevealAnimation>
              </div>
             
                
              {/* <br></br> */}
              <div className="overflow-hidden">

                <RevealAnimation
                  hidden={{ opacity: 0, scale: 0 }}
                  visible={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.3, delay: 1.5 }}
                >

                  <span className="text_blue">
                    {data?.pages?.banner_data?.banner_heading_third}
                  </span>
                </RevealAnimation>
              </div>
            </Text>
            <RevealAnimation
                  hidden={{ opacity: 0, y: -200 }}
                  visible={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >

            <Text
              tag="p"
              className=" font-Axiforma"
            >
              {data?.pages?.banner_data?.banner_sub_headline}
            </Text>
            </RevealAnimation>

          </Suspense>
        </div>

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









