'use clint'
import React from 'react';
import Slider from './Slider';


const ProjectShow = () => {
    return (
        <div className='font-[family-name:var(--font-geist-sans)] text-center mt-40 mx-auto max-w-screen-md'>
            {/* fist dive */}
           <div>
            <h1 className='font-bold text-4xl md:text-3xl text-gray-900 mb-8 p-4 bg-gradient-to-r from-emerald-400 to-emerald-600 text-white rounded-md shadow-lg animate-fadeInUp'>Project Showcase</h1>
            <p className='font-semibold text-lg md:text-xl text-gray-600 leading-relaxed'>Discover a variety of projects showcasing creativity and problem-solving skills. Each project reflects dedication to quality and innovation in web development, spanning front-end, back-end, and full-stack applications</p>
           </div>
           {/* 2 div */}
           <div>
<Slider></Slider>
           </div>
        </div>
    );
};

export default ProjectShow;