import Image from 'next/image';
import React from 'react';

const Skills = () => {
    return (
        <div className='font-[family-name:var(--font-geist-sans)] p-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 rounded-2xl justify-center items-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-2xl max-w-screen-xl mx-auto'>
            {
                [1,2,3,4,5,6,7,8,9,10,11,12]?.map((img) => {
                    return (
                        <div key={img} className="relative group overflow-hidden rounded-xl transform transition duration-500 hover:scale-105" >
                            {/* Image with fixed width and height */}
                            <Image 
                                src={`/image/${img}.png`} 
                                width={250} 
                                height={250} 
                                alt={`Skill ${img}`} 
                                className="rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:opacity-80 object-cover" 
                            />
                            {/* Fancy overlay with custom animation */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center rounded-lg">
                                <span className="text-white text-2xl font-bold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">Skill {img}</span>
                            </div>
                            {/* Animated border effect */}
                            <div className="absolute inset-0 border-4 border-transparent group-hover:border-indigo-400 rounded-xl transition-all duration-500 ease-in-out"></div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Skills;
