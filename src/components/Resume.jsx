'use client'
import React from 'react';
import { FiDownload } from "react-icons/fi";
const Resume = () => {
    return (
        <div className='font-[family-name:var(--font-geist-sans)] text-center mt-24 mx-auto max-w-screen-lg'>
            {/* Header with gradient and shadow */}
            <h1 className='font-bold text-4xl md:text-3xl text-gray-900 mb-8 p-4 bg-gradient-to-r from-emerald-400 to-emerald-600 text-white rounded-md shadow-lg animate-fadeInUp'>
                Summary Of My Resume 
                <hr className='mt-4 border-t-2 border-t-emerald-300' />
            </h1>

            <div className='flex flex-col md:flex-row justify-center items-center gap-10'>
                {/* First div with card style */}
                <div className='w-full md:w-1/2 bg-white p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 duration-500 animate-slideInLeft'>
                    <h1 className='font-bold text-2xl md:text-2xl text-gray-800 mb-6 border-b-2 border-emerald-400 pb-2'>
                        My Education
                    </h1>
                    <h2 className='font-bold text-3xl text-emerald-600 mb-6'>
                        Masters in Arabic Studies
                    </h2>
                    <p className='font-semibold text-gray-700 mb-6'>
                        Institution: Jamia Madania Baridhara, Dhaka, Bangladesh <br />
                        Duration: June 2014 - June 2017
                    </p>
                    <hr className='border-gray-300 mb-6' />
                    <p className='text-gray-600 leading-relaxed'>
                        Completed a comprehensive program in Arabic Language, focusing on advanced linguistics, literature, and cultural studies. Developed strong proficiency in Arabic grammar, syntax, and fluency. Conducted research and participated in seminars, enhancing analytical skills.
                    </p>
                </div>

                {/* Second div with card style */}
                <div className='w-full md:w-1/2 bg-white p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 duration-500 animate-slideInRight'>
                    <h1 className='font-bold text-2xl md:text-2xl text-gray-800 mb-6 border-b-2 border-emerald-400 pb-2'>
                        Exciting Achievement
                    </h1>
                    <h2 className='font-bold text-3xl text-emerald-600 mb-6'>
                        Certificate in Web Development
                    </h2>
                    <p className='font-semibold text-gray-700 mb-6'>
                        Institution: Programming-hero <br />
                        Duration: December 2023 - July 2024
                    </p>
                    <hr className='border-gray-300 mb-6' />
                    <p className='text-gray-600 leading-relaxed'>
                        Completed an intensive web development course covering MongoDB, Express.js, Node.js, HTML, CSS, JavaScript, React, and Next.js. Acquired practical experience in building responsive web applications, deploying projects effectively, and optimizing user experience with modern technologies.
                    </p>
                </div>
            </div>
            <button 
  className='p-2 mt-10 border-b-4 border-yellow-400 bg-red-300 rounded-full flex justify-center items-center gap-2 mx-auto' 
  style={{
    transition: 'all 0.5s ease-in-out',
    backgroundColor: 'rgba(252, 165, 165)', // bg-red-300 color in rgba
  }}
  onMouseEnter={(e) => {
    e.target.style.transform = 'scale(1.1)';
    e.target.style.backgroundImage = 'linear-gradient(135deg, rgba(248, 113, 113), rgba(254, 202, 202))'; // gradient on hover
    e.target.style.boxShadow = '0px 4px 20px rgba(0, 0, 0, 0.3)';
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = 'scale(1)';
    e.target.style.backgroundImage = 'none'; // reset to original color
    e.target.style.backgroundColor = 'rgba(252, 165, 165)'; // reset to bg-red-300
    e.target.style.boxShadow = 'none';
  }}
>
  <FiDownload /> Download Resume
</button>

        </div>
    );
};

export default Resume;

