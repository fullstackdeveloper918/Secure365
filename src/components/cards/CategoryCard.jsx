
import Image from 'next/image'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'


const CategoryCard= async ({ category }) => {


  return (
    // <Link href={`/products?category=${category.slug}`}>
      <Card className='relative h-full w-full overflow-hidden rounded-lg bg-transparent transition-colors group bg-[#E3F0FF] text-center'>
        <CardHeader>
          <Image
             src="/Images/user_img_1.png"
            alt='test'
            width={400}
            height={400}
            className='user_image'
          
          />
        </CardHeader>
        <CardContent className='space-y-1.5'>
          <CardTitle className='capitalize text-emerald-600 group-hover:text-white'>
        
            <h2 className='text-[#020842] text-lg'>edfhbj</h2>
            <span className='text-[#020842] text-sm uppercase '>ABCD</span>
          </CardTitle>
          <CardDescription className='group-hover:text-white'>
           {category.products}
          </CardDescription>
        </CardContent>
      </Card>
    // </Link>
  )
}

export default CategoryCard