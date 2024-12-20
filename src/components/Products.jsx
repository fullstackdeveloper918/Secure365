
import { Suspense } from "react";

import PopularProducts from "@/components/PopularProducts";
import PopularProductsSkeleton from "@/components/skeletons/PopularProductsSkeleton";
import Text from "./Text";

const Products = async ({data}) => {
  return (
    <section
      id="products"
      aria-labelledby="product-heading"
      className="space-y-8  "><div className="container">
      <div className="flex items-center justify-center mb-8">
        <div className="flex flex-col items-center justify-between gap-4">
          <Text
            tag="h2"
            className="font-Axiforma"
          >
            Recent Blogs
          </Text>
          <Text
            tag="p"
            className=" text-center font-Axiforma  text-[#4F4F4F] subheading_text ourblogs">
            At Secure365, we know that managing your digital presence can feel daunting. That's why we've crafted our services to serve as a comprehensive solution for all your needs. Whether it's cloud management, IT support, or strategic marketing, we ensure every aspect of your digital ecosystem is taken care of—so you can focus on what matters most to your business.


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
