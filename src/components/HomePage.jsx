'use client'
import Skills from '@/components/Skills';
import WhatIdo from '@/components/WhatIdo';
import Image from 'next/image';
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const HomePage = () => {
  return (
    <div>
    <div className='lg:flex items-center justify-center mx-auto mt-20 font-[family-name:var(--font-geist-sans)] 
      
      animate-gradient-x min-h-screen'>
      {/* Added gradient background and min height */}
      <div>
        <div className='relative'>
          <div className='absolute right-[20px]'></div>
          <div className="avatar mr-6">
            <div className="w-112 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 bg-black 
              hover:ring-emerald-500 transition duration-300 ease-in-out 
              hover:scale-110 transform-gpu">
              {/* Added scale animation on hover */}
              <Image className='' src={'/image/rrrrrrrrrrr.png'} width={270} height={270} alt="Avatar Image"/>
            </div>
          </div>
        </div>
      </div>

      <div className='lg:w-1/2 bg-gradient-to-r from-green-100 via-blue-200 to-purple-600 rounded-3xl  hover:border-orange-300 border-2 '>
        <section className='flex z-20 flex-1 flex-col p-8 '>
          <h4 className='text-3xl font-medium lg:font-semibold animate-fade-in'>
            {/* Added fade-in animation */}
            Hello There
          </h4>
          <h1 className='text-3xl font-bold lg:font-bold animate-fade-in delay-100'>
            {/* Delayed fade-in animation */}
            I'm Romjan Ali
          </h1>
          <h2 className='text-2xl font-semibold capitalize animate-fade-in delay-200'>
            {/* Delayed fade-in for a smooth effect */}
            A {' '}
          </h2>
          <span className='text-2xl text-violet-600 hover:text-green-300'>
            <Typewriter
              words={['junior Full stack Developer....', 'Nice To Meet You']}
              loop={true}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
          <p className='font-semibold animate-fade-in delay-300'>
            As a dedicated developer, I excel in creating visually compelling frontend solutions. <br /> 
            I thrive on challenges, believing in learning from failures to achieve true success. <br /> 
            Diligent in administration, attainment, and organization.
          </p>
        </section>
      </div>
    </div>
    <WhatIdo></WhatIdo>
    <Skills></Skills>
    </div>
  );
};

export default HomePage;