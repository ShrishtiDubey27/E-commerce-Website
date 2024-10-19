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
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla quo ab earum totam explicabo quasi molestiae esse magnam eveniet. Iusto, itaque ex assumenda animi expedita eum et sit harum velit!</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatem facere beatae aspernatur commodi, quae ullam, suscipit at laudantium adipisci, necessitatibus soluta eum eos esse odit quasi modi itaque enim.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam a, aut minima consectetur eligendi porro similique aliquid quisquam facilis dolores, soluta sequi quas libero accusantium. Minus est provident et quas?</p>
        </div>
      </div>

      <div className='text-2xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}></Title>
      </div>
 
      <div className='flex flex-col md:flex-row text-sm mb-20'>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Quality Assurance:</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus voluptate aut eaque cumque, nesciunt, alias esse aperiam laudantium commodi quos ipsam nam eveniet earum quas. Facere id eum voluptas eveniet.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Conveninence:</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus voluptate aut eaque cumque, nesciunt, alias esse aperiam laudantium commodi quos ipsam nam eveniet earum quas. Facere id eum voluptas eveniet.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Exceptional Customer Service:</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus voluptate aut eaque cumque, nesciunt, alias esse aperiam laudantium commodi quos ipsam nam eveniet earum quas. Facere id eum voluptas eveniet.</p>
        </div>

      </div>

      <Newsletterbox></Newsletterbox>

    </div>
  )
}

export default About
