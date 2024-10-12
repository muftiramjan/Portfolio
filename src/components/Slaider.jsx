
"use client";
import React, { useState } from 'react';

const Slaider = () => {
  // State to track the current slide
  const [currentSlide, setCurrentSlide] = useState(1);

  // Total number of slides
  const totalSlides = 4;

  // Function to handle next and previous slide
  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === totalSlides ? 1 : prevSlide + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 1 ? totalSlides : prevSlide - 1));
  };

  return (
    <div className='flex justify-evenly mt-10'>
      {/* first div */}
      <div className='w-1/3 relative z-20 p-6 bg-white rounded-lg shadow-lg'>
        <h1 className='font-bold text-gray-900 text-2xl mb-4'>Explore My Portfolio Projects!</h1>
        <p className='font-semibold text-gray-700 mb-6'>
          Discover my latest projects showcasing creativity and technical expertise in modern web development
        </p>

        {/* Buttons below the first div */}
        <div className="flex justify-center space-x-4">
          <button onClick={handlePrevSlide} className="btn btn-circle bg-gray-800 text-white hover:bg-orange-400 transition-transform transform hover:scale-110">
            ❮ 
          </button>
          <button onClick={handleNextSlide} className="btn btn-circle bg-gray-800 text-white hover:bg-orange-400 transition-transform transform hover:scale-110">
      ❯
          </button>
        </div>
      </div>

      {/* 2nd div - Carousel */}
      <div className="carousel w-2/3 h-[300px] relative overflow-hidden rounded-lg shadow-lg">
        <div className={`carousel-item ${currentSlide === 1 ? 'block' : 'hidden'} w-full h-full`}>
          <img
            src="/image/100.png"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className={`carousel-item ${currentSlide === 2 ? 'block' : 'hidden'} w-full h-full`}>
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className={`carousel-item ${currentSlide === 3 ? 'block' : 'hidden'} w-full h-full`}>
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className={`carousel-item ${currentSlide === 4 ? 'block' : 'hidden'} w-full h-full`}>
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Slaider;
