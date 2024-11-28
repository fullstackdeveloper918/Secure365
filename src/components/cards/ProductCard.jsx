'use client'

import Image from 'next/image'
import Link from 'next/link'




const ProductCard  = ({ product }) => {

  return (
    <div className='group/card shadow-lg border hover:shadow-2xl duration-300 transition-all rounded-2xl space-y-4 h-full'>
      {/* <Link
        href={`/${product.storeId}/${product.slug}?productId=${product.id}`}
      > */}
        <div className='aspect-square m-3 rounded-2xl bg-gray-100 relative'>
          <Image
             src="https://img.freepik.com/premium-photo/people-teleworking-from-home_23-2151546979.jpg?w=1380"
            fill
            sizes='200'
            alt='product.name'
            className='aspect-square object-cover rounded-2xl'
          />
        </div>
        <div className='px-4 space-y-3 pb-6'>
          <div className='space-y-1'>
            <p className='text-sm text-gray-500'>product.Category?.name</p>
            <p
              className='font-semibold group-hover/card:text-emerald-800 text-lg truncate'
              // title={product.name}
            >
              product.name
            </p>
            <Image alt='Stars' src='/svg/stars.svg' width={100} height={100} />
          </div>
          <div className='flex items-center justify-between'>
            <div className='font-semibold text-emerald-700'>
              product.price
            </div>
            
          </div>
        </div>
      {/* </Link> */}
    </div>
  )
}

export default ProductCard