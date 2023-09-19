"use client";

import Image from 'next/image';
import { CustomButton } from '../components';


const Hero = () => {
  const handScroll = () => {

  } 
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className='hero__title'>
          Search, Book or Rent your dream car quickly and easily!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <CustomButton 
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  )
}

export default Hero;
