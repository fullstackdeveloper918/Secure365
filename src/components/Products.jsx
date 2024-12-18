
import { Suspense } from "react";

import PopularProducts from "@/components/PopularProducts";
import PopularProductsSkeleton from "@/components/skeletons/PopularProductsSkeleton";
import Text from "./Text";

const Products = async ({data}) => {
  return (
    <section
      id="products"
      aria-labelledby="product-heading"
      className="space-y-8 md:py-18 md:pb-0 py-10 "><div className="container">
      <div className="flex items-center justify-center mb-8">
        <div className="flex flex-col items-center justify-between gap-4">
          <Text
            tag="h2"
            className="font-Axiforma"
          >
            Our Key Services
          </Text>
          <Text
            tag="p"
            className="max-w-3xl text-center font-Axiforma  text-[#4F4F4F] subheading_text"
          >
            At Secure365, we understand that navigating the digital world can be
            overwhelming. That’s why we’ve designed our services to be a
            one-stop solution, covering everything from cloud management and IT
            support to marketing and
          </Text>
        </div>
      </div>
     
      
      <Suspense fallback={<PopularProductsSkeleton />}>
        <PopularProducts data={data} />
      </Suspense>
      </div>
    </section>
  );
};

export default Products;
