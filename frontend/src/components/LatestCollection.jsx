import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

  const {products} =useContext(ShopContext); 
  const [latestProducts,setLatestProducts]=useState([]);
  // console.log(products);

  useEffect(()=>{
    setLatestProducts(products.slice(0,10));
  },[products]);
//here we add products later after getting data from backend


  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Discover our newest arrivals, thoughtfully curated to reflect the season’s latest trends and timeless elegance. Each piece in this collection blends modern design with premium craftsmanship, offering refined style for every occasion.</p>
      </div>
      {/* Rendering Products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          latestProducts.map((item,index)=>(
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
          ))
        }
      </div>
    </div>
  )
}

export default LatestCollection
