import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const Footer = () => {
  const {navigate}=useContext(ShopContext);
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm'>
        <div>
            <img src={assets.clothsyLogo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>Clothsy is a contemporary online fashion brand committed to offering high-quality, stylish, and affordable clothing for modern individuals. We bring together design, comfort, and functionality to help our customers dress with confidence and ease.</p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5 '>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600 '>
                <li className='cursor-pointer' onClick={()=>{navigate('/');window.scrollTo(0, 0); }} >Home</li>
                <li className='cursor-pointer' onClick={()=>{navigate('/about');window.scrollTo(0, 0); }}>About us</li>
                <li className='cursor-pointer' onClick={()=>{navigate('/delivery');window.scrollTo(0, 0); }} >Delivery</li>
                <li className='cursor-pointer' onClick={()=>{navigate('/privacy');window.scrollTo(0, 0); }}>Privacy policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5 '>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91 8935645550</li>
                <li>contact@clothsy.com</li>
            </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025@clothsy.com - All Rigth Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
