
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import ImageCard from './ImageCard'
import Text from '../Text'



const CategoryCard= async ({ category }) => {
  


  return (
    
      <Card className='relative h-full w-full overflow-hidden rounded-lg bg-transparent transition-colors group bg-[#E3F0FF] text-center'>
        <CardHeader>
          <ImageCard
             src={category?.top_skilled_experts_image}
            alt={category?.top_skilled_experts_name}
            width={400}
            height={400}
            className='user_image'
            
            />
        </CardHeader>
        <CardContent className='space-y-1.5'>
        <ul className="list-none flex gap-2 mt-5">
        {category?.top_skilled_experts_icon_facebook  &&
                <Text tag="li" className="social_list">
                  {" "}
                
                  <ImageCard
                    src={category?.top_skilled_experts_icon_facebook}
                    width={12}
                    height={12}
                    className="social_icon facebook_icon"
                    alt="Facebook Icon"
                  />
                </Text>
                }
                {category?.top_skilled_experts_instagram && 
                <Text tag="li" className="social_list font-Axiforma">
                  {" "}
                  
                  <ImageCard
                    src={category?.top_skilled_experts_instagram}
                    width={20}
                    height={20}
                    className="social_icon"
                    alt="Instagram Icon"
                  />
                </Text>
}                   {category?.top_skilled_experts_icon_twitter && 
                <Text tag="li" className="social_list font-Axiforma">
                  {" "}
               
                  <ImageCard
                    src={category?.top_skilled_experts_icon_twitter}
                    width={20}
                    height={20}
                    className="social_icon"
                    alt="Twitter Icon"
                  />
                </Text>
                }
                 {category?.top_skilled_experts_icon_linkedln &&
                <Text tag="li" className="social_list">
                  {" "}
                 
                  <ImageCard
                    src={category?.top_skilled_experts_icon_linkedln}
                    width={20}
                    height={20}
                    className="social_icon"
                    alt="LinkedIn Icon"
                  />
                </Text>
                }
              </ul>
          {/* <CardTitle className='capitalize text-emerald-600 group-hover:text-white font-Axiforma'>
        
            
          </CardTitle> */}
          <CardDescription className='group-hover:text-white'>
           {category.products}
          </CardDescription>
        </CardContent>
      </Card>
      
  )
}

export default CategoryCard