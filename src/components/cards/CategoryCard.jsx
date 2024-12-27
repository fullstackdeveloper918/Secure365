
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
  console.log(category, 'category')


  return (
    
      <Card className='relative h-full w-full overflow-hidden rounded-lg bg-transparent transition-colors group bg-[] text-center'>
        <CardHeader>
          <div className='expertImage mb-4'>
          <ImageCard
             src={category?.top_skilled_experts_image}
            alt={category?.top_skilled_experts_name}
            width={400}
            height={400}
            className='user_image '
            
            />
          </div>
        </CardHeader>
        <CardContent className=''>
        <ul className="list-none  gap-2  hovercard absolute top-5 right-5">
                <Text tag="li" className="social_list fontfacebook">
                  {" "}
                  <ImageCard
                    src="/svg/facebook.svg"
                    width={12}
                    height={12}
                    className="social_icon facebook_icon"
                    alt="facebook"
                  />
                </Text>
                <Text tag="li" className="social_list font-Axiforma">
                  {" "}
                  <ImageCard
                    src="/svg/insta.svg"
                    width={20}
                    height={20}
                    className="social_icon"
                    alt="facebook"
                  />
                </Text>
                <Text tag="li" className="social_list font-Axiforma">
                  {" "}
                  <ImageCard
                    src="/svg/logo-twitter 2.svg"
                    width={20}
                    height={20}
                    className="social_icon"
                    alt="facebook"
                  />
                </Text>
                <Text tag="li" className="social_list">
                  {" "}
                  <ImageCard
                    src="/svg/git.svg"
                    width={20}
                    height={20}
                    className="social_icon"
                    alt="facebook"
                  />
                </Text>
              </ul>
        {/* <ul className="list-none  gap-2  hovercard absolute top-2 right-2">
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
              </ul> */}
        <h3 className=' text-md font-Axiforma font-semibold mb-0'>{category?.top_skilled_experts_name}</h3>
        <p className=' text-sm text-[#3d3d3d] mt-0'>System Manager</p>
          <CardDescription className='group-hover:text-white'>
           {category?.products}
          </CardDescription>
        </CardContent>
      </Card>
      
  )
}

export default CategoryCard