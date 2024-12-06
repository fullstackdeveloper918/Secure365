'use client'

import Image from 'next/image'
import Link from 'next/link'




const ProductCard  = ({ product }) => {

  return (
    <div className='group/card  border hover:shadow-2xl duration-300 transition-all rounded-2xl space-y-4 h-full'>
      {/* <Link
        href={`/${product.storeId}/${product.slug}?productId=${product.id}`}
      > */}
        <div className='aspect-square rounded-2xl bg-gray-100 relative'>
          <Image
             src={product?.our_key_services_image}
            fill
            sizes='200'
            alt='product image'
            className='aspect-square object-cover rounded-2xl'
          />
        </div>
       
      
    </div>
  )
}

export default ProductCard