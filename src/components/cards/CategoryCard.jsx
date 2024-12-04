
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
             src={`https://img.freepik.com/premium-photo/people-teleworking-from-home_23-2151546979.jpg?w=1380`}
            alt='test'
            width={400}
            height={400}
          />
        </CardHeader>
        <CardContent className='space-y-1.5'>
          <CardTitle className='capitalize text-emerald-600 group-hover:text-white'>
            {category.category_name}
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