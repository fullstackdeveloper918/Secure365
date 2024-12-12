
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import ImageCard from './ImageCard'
import ScrollSection from '../ScrollSection'


const CategoryCard= async ({ category }) => {


  return (
     <ScrollSection>
      <Card className='relative h-full w-full overflow-hidden rounded-lg bg-transparent transition-colors group bg-[#E3F0FF] text-center'>
        <CardHeader>
          <ImageCard
             src="/Images/user_img_1.png"
            alt='test'
            width={400}
            height={400}
            className='user_image'
          
          />
        </CardHeader>
        <CardContent className='space-y-1.5'>
          <CardTitle className='capitalize text-emerald-600 group-hover:text-white font-Axiforma'>
        
            <h2 className='text-[#020842] text-lg font-Axiforma'>edfhbj</h2>
            <span className='text-[#020842] text-sm uppercase font-Axiforma'>ABCD</span>
          </CardTitle>
          <CardDescription className='group-hover:text-white'>
           {category.products}
          </CardDescription>
        </CardContent>
      </Card>
      </ScrollSection>
  )
}

export default CategoryCard