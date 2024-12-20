

import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <div className="scroll-section">

  
    <div className="group/card  border hover:shadow-2xl duration-300 transition-all rounded-2xl space-y-4 h-full relative cardImageHover">
      {/* <Link
        href={`/${product.storeId}/${product.slug}?productId=${product.id}`}
      > */}
      <div className="aspect-square rounded-2xl bg-gray-100 relative">
        <Image
          src={product?.our_key_services_image}
          fill
          sizes="200"
          alt="product image"
          className="aspect-square object-cover rounded-2xl"
        />
      </div>
      <div className="bottom_text absolute bottom-5 left-5">
        <span className="bg-[#ffffff40] text-white text-md p-3">Marketing</span>
        <h3 className="tex-2xl my-4 text-white xl:max-w-[70%] font-Axiforma">
          Enhance Trust, Compliance, And Goverance
        </h3>
        <button className="inline  border-white rounded-full arrow_button font-Axiforma">
          <Image
            src="/svg/arrow-right-solid.svg"
            className="invert"
            alt="arrow image"
            width={18}
            height={18}
          />
        </button>
      </div>
    </div>
    </div>
  );
};

export default ProductCard;
