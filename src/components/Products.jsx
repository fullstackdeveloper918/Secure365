
import { Suspense } from "react";

import PopularProducts from "@/components/PopularProducts";
import PopularProductsSkeleton from "@/components/skeletons/PopularProductsSkeleton";
import Text from "./Text";

const Products = async () => {
  return (
    <section
      id="products"
      aria-labelledby="product-heading"
      className="space-y-8 px-4 sm:px-6 lg:px-8 py-8 md:pt-10 lg:pt-24"
    >
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center justify-between gap-4">
          <Text
            tag="h2"
            className="text-4xl"
          >
            Our Key Services
          </Text>
          <Text
            tag="p"
            className="max-w-2xl text-center text-primary"
          >
            At Secure365, we understand that navigating the digital world can be
            overwhelming. That’s why we’ve designed our services to be a
            one-stop solution, covering everything from cloud management and IT
            support to marketing and
          </Text>
        </div>
      </div>
      <Suspense fallback={<PopularProductsSkeleton />}>
        <PopularProducts />
      </Suspense>
    </section>
  );
};

export default Products;
