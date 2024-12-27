
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









