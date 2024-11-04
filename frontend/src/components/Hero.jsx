import React, { useState, useEffect } from 'react';
import { assets } from '../assets/frontend_assets/assets';

const Hero = () => {
  const words = ['Arrivals', 'Fashion','Trends','Styles'];
  const [displayedText, setDisplayedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    if (isDeleting) {
      if (currentCharIndex > 0) {
        setTimeout(() => {
          setDisplayedText(currentWord.slice(0, currentCharIndex - 1));
          setCurrentCharIndex((prev) => prev - 1);
        }, 100);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    } else {
      if (currentCharIndex < currentWord.length) {
        setTimeout(() => {
          setDisplayedText(currentWord.slice(0, currentCharIndex + 1));
          setCurrentCharIndex((prev) => prev + 1);
        }, 150);
      } else {
        setTimeout(() => {
          setIsDeleting(true);
        }, 1000); 
      }
    }
  }, [currentCharIndex, isDeleting, currentWordIndex, words]);

  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      {/* Hero left side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-[#414141]'>
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            <p className='font-medium text-sm md:text-base'>
              <span className='text-orange-600'>OUR</span> BESTSELLERS
            </p>
          </div>

          <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>
            Latest <span className='text-orange-600'>{displayedText}</span>
          </h1>

          <div className='flex items-center gap-2'>
            <p className='font-semibold text-sm md:text-base'>
              <span className='text-orange-600'>SHOP</span> NOW
            </p>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
          </div>
        </div>
      </div>

      {/* Hero right side */}
      <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
    </div>
  );
};

export default Hero;
