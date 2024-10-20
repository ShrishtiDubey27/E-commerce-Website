import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/frontend_assets/assets'
import Newsletterbox from '../components/NewsletterBox'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}></Title>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>At <span className='text-orange-500'>ShopAura</span>, we are passionate about delivering high-quality products that inspire and elevate your everyday lifestyle. With a focus on innovation and customer satisfaction, our journey began with a simple goal: to make premium products accessible to everyone. Today, we continue to grow with the trust of our loyal customers, offering a wide range of collections that combine style, comfort, and affordability.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Our mission is to provide exceptional products that enhance your daily life while promoting sustainability and responsible sourcing. We strive to create a seamless shopping experience where quality and customer satisfaction are at the forefront of everything we do. Your happiness is our top priority, and we aim to exceed your expectations at every step.</p>
        </div>
      </div>

      <div className='text-2xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}></Title>
      </div>
 
      <div className='flex flex-col md:flex-row text-sm mb-20'>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Quality Assurance:</b>
        <p className='text-gray-600'>Quality is our priority. From sourcing premium materials to careful inspection, we ensure every product meets high standards of durability, comfort, and design. Shop with confidence knowing you're getting the best.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Conveninence:</b>
        <p className='text-gray-600'>We make shopping easy with a user-friendly website, fast shipping, and flexible payment options. Whether at home or on the go, finding what you need is simple and hassle-free..</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Exceptional Customer Service:</b>
        <p className='text-gray-600'>Our customers come first. We offer outstanding service and support, always ready to assist with questions, orders, or feedback. Your satisfaction is our promise..</p>
        </div>

      </div>

      <Newsletterbox></Newsletterbox>

    </div>
  )
}

export default About
