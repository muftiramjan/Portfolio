import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-200 py-16 px-10 md:px-20 mt-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* About Section */}
                <div>
                    <h2 className="text-lg font-bold text-white mb-4">About Me</h2>
                    <p className="text-sm text-gray-400">
                        I am a passionate web developer with a strong background in frontend and backend technologies. Always looking to solve complex problems and build stunning applications.
                    </p>
                    <Link href="/about" className="text-emerald-400 hover:text-emerald-600 transition-colors mt-4 inline-block">Read More</Link>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-lg font-bold text-white mb-4">Quick Links</h2>
                    <ul className="text-sm text-gray-400">
                        <li className="mb-2">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/skills" className="hover:text-white transition-colors">Skills</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div>
                    <h2 className="text-lg font-bold text-white mb-4">Contact Information</h2>
                    <p className="text-sm text-gray-400 mb-2">
                        Email: <a href="mailto:your-email@example.com" className="text-emerald-400 hover:text-emerald-600 transition-colors">alibinalaluddin@gmail.com.com</a>
                    </p>
                    <p className="text-sm text-gray-400 mb-2">
                        Phone: <a href="tel:+1234567890" className="text-emerald-400 hover:text-emerald-600 transition-colors">+08801774491140</a>
                    </p>
                    <p className="text-sm text-gray-400">
                        Location: Dhaka, Bangladesh
                    </p>
                </div>

                {/* Social Media */}
                <div>
                    <h2 className="text-lg font-bold text-white mb-4">Follow Me</h2>
                    <div className="flex space-x-4">
                        <a href="https://twitter.com" target="_blank" className="text-emerald-400 hover:text-emerald-600 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M24 4.557a9.839 9.839 0 01-2.828.775 4.937 4.937 0 002.165-2.724c-.944.559-1.988.965-3.1 1.184a4.927 4.927 0 00-8.39 4.482c-4.09-.205-7.719-2.165-10.148-5.144a4.822 4.822 0 00-.666 2.475c0 1.708.869 3.214 2.188 4.097a4.922 4.922 0 01-2.229-.615v.061a4.932 4.932 0 003.946 4.834 4.896 4.896 0 01-2.224.085 4.937 4.937 0 004.604 3.417A9.876 9.876 0 010 21.542a13.945 13.945 0 007.548 2.212c9.057 0 14.01-7.496 14.01-13.986 0-.212-.005-.425-.014-.637A10.025 10.025 0 0024 4.557z" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/md-ramjan-ali-programar/" target="_blank" className="text-emerald-400 hover:text-emerald-600 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M22.23 0H1.77C.792 0 0 .774 0 1.725v20.548C0 23.227.792 24 1.77 24h20.46C23.208 24 24 23.227 24 22.273V1.725C24 .774 23.208 0 22.23 0zm-13.46 20.452H4.54v-11.41h4.13v11.41zm-2.066-13.06a2.368 2.368 0 01-2.38-2.375 2.37 2.37 0 012.38-2.376c1.314 0 2.38 1.062 2.38 2.376 0 1.312-1.066 2.375-2.38 2.375zm13.094 13.06h-4.13v-5.597c0-1.328-.474-2.235-1.66-2.235-.906 0-1.446.616-1.682 1.213-.087.214-.107.51-.107.806v5.813H9.678v-7.598h4.013v1.037c.53-.818 1.487-1.987 3.622-1.987 2.64 0 4.61 1.727 4.61 5.437v7.111z" />
                            </svg>
                        </a>
                        <a href="https://github.com/muftiramjan" target="_blank" className="text-emerald-400 hover:text-emerald-600 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.11.82-.258.82-.577v-2.167c-3.338.726-4.043-1.416-4.043-1.416-.546-1.387-1.332-1.756-1.332-1.756-1.09-.744.082-.729.082-.729 1.205.085 1.838 1.238 1.838 1.238 1.07 1.834 2.807 1.304 3.492.998.108-.776.419-1.304.762-1.604-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.467-2.38 1.235-3.222-.124-.303-.535-1.524.117-3.176 0 0 1.007-.322 3.3 1.23a11.518 11.518 0 013.004-.404c1.02.004 2.048.138 3.004.404 2.29-1.552 3.294-1.23 3.294-1.23.653 1.652.242 2.873.12 3.176.77.842 1.234 1.912 1.234 3.222 0 4.61-2.807 5.622-5.48 5.922.43.37.814 1.1.814 2.217v3.293c0 .324.216.694.824.577C20.565 21.796 24 17.303 24 12 24 5.373 18.627 0 12 0z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center text-gray-500 text-sm mt-10">
                &copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
