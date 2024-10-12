import React from 'react';

const WhatIdo = () => {
    return (
        <div className='font-[family-name:var(--font-geist-sans)] text-center m-12 mx-auto max-w-screen-md'>
            <h1 className='font-bold text-4xl md:text-3xl text-gray-900 mb-8 p-4 bg-gradient-to-r from-emerald-400 to-emerald-600 text-white rounded-md shadow-lg animate-fadeInUp'> 
                What I Do
                <hr />
            </h1>
            <p className='font-semibold text-lg md:text-xl text-gray-600 leading-relaxed'>
                Below is a quick overview of my main technical skill sets and technologies I use.<br />
                Want to find out more about my skills and experience? Check out my 
                <a href="/resume" className="text-indigo-500 hover:underline mx-1">online resume</a> 
                and 
                <a href="/projects" className="text-indigo-500 hover:underline mx-1">project portfolio</a>.
            </p>
        </div>
    );
};

export default WhatIdo;
