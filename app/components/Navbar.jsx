import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../../public/Logo.png'
import Shape from '../../public/Shape.png'

const NavLink = ({ href, text, className }) => (
  <Link href={href} className={`hover:bg-gray-300 rounded-md h-10 p-5 flex font-bold items-center ${className}`}>
    {text}
  </Link>
);

export default function Navbar() {
  return (
    <div className='flex justify-between items-center p-2 bg-white md:px-16 max-w-full shadow-md mb-3 md:shadow sticky top-0 z-50'>
      <div>
        <Image src={Logo} alt='L' width={'auto'} height={'auto'} />
      </div>
      <div className='hidden md:flex'>
        <NavLink href="#" text="Crypto Tax" />
        <NavLink href="#" text="Free Tools" />
        <NavLink href="#" text="Resource Center" />
        <NavLink href="#" text="Get Started" className="hover:bg-blue-800 bg-blue-700 text-white" />
      </div>
      <div className='md:hidden'>
       <Image src={Shape} />
      </div>
    </div>
  )
}
