
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
      <Card className='relative h-full w-full overflow-hidden rounded-lg bg-transparent transition-colors group hover:bg-emerald-600'>
        <CardHeader>
          <Image
             src={category?.top_skilled_experts_image}
            alt='test'
            width={400}
            height={400}
          />
        </CardHeader>
        <CardContent className='space-y-1.5'>
          <CardTitle className='capitalize text-emerald-600 group-hover:text-white'>
            {category?.top_skilled_experts_name}
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