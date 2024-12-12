import { ArrowRight } from "lucide-react";
import { Suspense } from "react";
import React from "react";
import CategoryCard from "@/components/cards/CategoryCard";
import CategoryCardSkeleton from "@/components/skeletons/CategoryCardSkeleton";
import Text from "./Text";


const categories = [
  {
    id: 1,
    image:
      "https://img.freepik.com/premium-photo/people-teleworking-from-home_23-2151546979.jpg?w=1380",
    // category_name: "Enhance Trust, Compliance, and Governance",
    products: "products",
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/premium-photo/people-teleworking-from-home_23-2151546979.jpg?w=1380",
    // category_name: "Cyber Security Protects Sensitive Data",
    products: "products",
  },
  {
    id: 3,
    image:
      "https://img.freepik.com/premium-photo/people-teleworking-from-home_23-2151546979.jpg?w=1380",
    // category_name: "The Steps to Gaining Privileged Access Security",
    products: "products",
  },
  {
    id: 4,
    image:
      "https://img.freepik.com/premium-photo/people-teleworking-from-home_23-2151546979.jpg?w=1380",
    // category_name: "The Steps to Gaining Privileged Access Security",
    products: "products",
  },
  {
    id: 5,
    image:
      "https://img.freepik.com/premium-photo/people-teleworking-from-home_23-2151546979.jpg?w=1380",
    // category_name: "The Steps to Gaining Privileged Access Security",
    products: "products",
  },
 
];

const Categories = async ({data}) => {
  return (
    <section
      id="categories"
      aria-labelledby="categories-heading"
      className="space-y-8 md:pb-20 md:py-10 container"
    >
      <div className="flex items-end justify-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <Text tag="h2" className=" text-center block text-cente font-Axiforma">
          {data?.top_skilled_experts_heading}
          </Text>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {data?.skilled_expert_data && data?.skilled_expert_data.map((category, index) => (
          <Suspense key={category?.id}  fallback={<CategoryCardSkeleton />}>
            <React.Fragment >
              <CategoryCard  category={category} />
            </React.Fragment>
          </Suspense>
        ))}
      </div>
    </section>
  );
};

export default Categories;
