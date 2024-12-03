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
    category_name: "category name",
    products: "products",
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/premium-photo/people-teleworking-from-home_23-2151546979.jpg?w=1380",
    category_name: "category name",
    products: "products",
  },
  {
    id: 3,
    image:
      "https://img.freepik.com/premium-photo/people-teleworking-from-home_23-2151546979.jpg?w=1380",
    category_name: "category name",
    products: "products",
  },
  {
    id: 4,
    image:
      "https://img.freepik.com/premium-photo/people-teleworking-from-home_23-2151546979.jpg?w=1380",
    category_name: "category name",
    products: "products",
  },
];

const Categories = async () => {
  return (
    <section
      id="categories"
      aria-labelledby="categories-heading"
      className="space-y-8 px-4 sm:px-6 lg:px-8 py-8 md:pt-10 lg:pt-24 sm:pb-28"
    >
      <div className="flex items-end justify-between">
        <div className="flex flex-col items-center justify-between gap-4">
          <Text tag="h2" className="text-4xl">
          Top Skilled Experts
          </Text>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((category, index) => (
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
