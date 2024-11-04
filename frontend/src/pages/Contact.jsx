import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'
const Contact = () => {

  return (
   <div>

    <div className='text-center text-2xl pt-10 border-t'>
      <Title text1={'CONTACT'} text2={'US'}></Title>
    </div>


    <div className=" my-10 flex flex-col md:flex-row gap-10 mb-28 justify-center">
        <img src={assets.contact_img} alt="Contact Us" className="w-full md:max-w-[480px]" />
        
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="text-xl font-semibold text-gray-600">Our Store</p>
          <p className="text-gray-500 ">123, MG Road<br/>Suite 12B, New Delhi, India</p>
          <p className="text-gray-500">Tel: +91-67890-12345<br/>
          Email: support@shopaura.in</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at ShopAura</p>
          <p className="text-gray-500 ">Learn more about teams and job opening</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>


      </div>
    <NewsletterBox></NewsletterBox>
    </div>
  )
}

export default Contact
