import ProductCard from '@/components/cards/ProductCard'
import React from 'react'


const products = [
  {id: 1, image: 'https://img.freepik.com/premium-photo/people-teleworking-from-home_23-2151546979.jpg?w=1380', category_name: 'category name', name: 'name', price: '88'},
  {id: 2, image: 'https://img.freepik.com/premium-photo/people-teleworking-from-home_23-2151546979.jpg?w=1380', category_name: 'category name', name: 'name', price: '50'},
  {id: 3, image: 'https://img.freepik.com/premium-photo/people-teleworking-from-home_23-2151546979.jpg?w=1380', category_name: 'category name', name: 'name', price: '40'},
 
]


const PopularProducts = async ({data}) => {


  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
      {data && data.map((product,index) => (
        <React.Fragment  key={index}>
        <ProductCard
         product={product} 
         />
         </React.Fragment>
      ))}
    </div>
  )
}

export default PopularProducts