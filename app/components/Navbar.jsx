import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../../public/Logo.png'
import Shape from '../../public/Shape.png'

const NavLink = ({ href, text, className }) => (
  <Link href={href} className={`rounded-md h-10 p-5 flex font-bold items-center ${className}`}>
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
        <NavLink href="#" text="Crypto Tax" className="hover:bg-gray-300" />
        <NavLink href="#" text="Free Tools" className="hover:bg-gray-300" />
        <NavLink href="#" text="Resource Center" className="hover:bg-gray-300" />
        <NavLink href="#" text="Get Started" className="bg-blue-700 text-white ml-2 hover:bg-blue-800" />
      </div>
      <div className='md:hidden'>
       <Image alt='L' src={Shape} />
      </div>
    </div>
  )
}
