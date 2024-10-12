"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
import React from 'react';

const Navbar = () => {
  const pathname = usePathname(); 

  // Active link style
  const activeLinkStyle = {
    fontWeight: 'bold',
    color: '#f87171', // Tailwind red-400 equivalent
    borderBottom: '2px solid #f87171', // Border for active link
  };

  return (
    <div className="navbar bg-base-100 p-4  rounded-lg bg-white shadow-lg ring-1 ring-slate-100 fixed top-0 left-0 right-0 z-50 font-[family-name:var(--font-geist-sans)]">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
            <li>
              <Link href="/" style={pathname === "/" ? activeLinkStyle : {}}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/skills" style={pathname === "/skills" ? activeLinkStyle : {}}>
                Skills
              </Link>
            </li>
            <li>
              <Link href="/resume" style={pathname === "/resume" ? activeLinkStyle : {}}>
                Resume
              </Link>
            </li>
            <li>
              <Link href="/projects" style={pathname === "/projects" ? activeLinkStyle : {}}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" style={pathname === "/contact" ? activeLinkStyle : {}}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">My Portfolio</a>
      </div>
      <div className="navbar-center hidden  lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          <li>
            <Link href="/" style={pathname === "/" ? activeLinkStyle : {}}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/skills" style={pathname === "/skills" ? activeLinkStyle : {}}>
              Skills
            </Link>
          </li>
          <li>
            <Link href="/resume" style={pathname === "/resume" ? activeLinkStyle : {}}>
              Resume
            </Link>
          </li>
          <li>
            <Link href="/projects" style={pathname === "/projects" ? activeLinkStyle : {}}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" style={pathname === "/contact" ? activeLinkStyle : {}}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="border-b-2 font-bold w-28 border-b-orange-400 rounded-full text-red-400 p-2">Hire Me</button>
      </div>
    </div>
  );
};

export default Navbar;
