"use client";
import React, { useState } from 'react';
import HomePage from './HomePage';

const Slider = () => {
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
      {/* First div with description and buttons */}
      <div className='w-1/3 relative z-20 p-6 bg-white rounded-lg shadow-lg'>
        <h1 className='font-bold text-gray-900 text-3xl mb-4'>Explore My Portfolio Projects!</h1>
        <p className='font-semibold text-gray-700 mb-6'>
          Showcasing creativity, technical expertise, and modern web development skills to build amazing projects.
        </p>
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
        {/* First Slide */}
        <div className={`carousel-item ${currentSlide === 1 ? 'block' : 'hidden'} w-full h-full`}>
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
            <div className="text-white text-center">
              <h2 className="text-4xl font-extrabold mb-4">Welcome to My Portfolio</h2>
              <p className="text-lg">Check out my web development journey and explore my skills and projects.</p>
              <a href="https://tenassaimant.web.app" className="mt-6 inline-block bg-white text-orange-500 py-2 px-4 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition">Visit Website</a>
            </div>
          </div>
        </div>

        {/* Second Slide */}
        <div className={`carousel-item ${currentSlide === 2 ? 'block' : 'hidden'} w-full h-full`}>
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Third Slide */}
        <div className={`carousel-item ${currentSlide === 3 ? 'block' : 'hidden'} w-full h-full`}>
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Fourth Slide */}
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

export default Slider;
