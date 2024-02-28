'use client'

import React, { useRef } from 'react';
import news from '../../public/news.png';
import money from '../../public/money.png';
import Image from 'next/image';

export default function KeyEvents() {
  const containerRef = useRef(null);

  const scroll = (scrollOffset) => {
    containerRef.current.scrollBy({
      left: scrollOffset,
      behavior: 'smooth',
    });
  };

  return (
    <div className='w-full overflow-hidden relative'>
      <div className='gap-3 h-40 md:h-56 flex md:overflow-x-hidden overflow-x-auto' ref={containerRef}>
        <div className='bg-blue-300 w-80 md:w-2/3 flex-shrink-0 flex gap-1 rounded-md p-3'>
          <div className='w-32 h-fit bg-blue-500 rounded-full p-2'>
            <Image alt='L' src={news} width={300} height={300} />
          </div>
          <div className='flex flex-col'>
            <div className='font-semibold overflow-hidden overflow-ellipsis text-sm md:text-xl'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci eos assumenda magni minus
            </div>
            <div className='text-gray-800 overflow-hidden overflow-ellipsis text-xs md:text-lg'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit tempora obcaecati sit vel ullam repudiandae laudantium sed quae sequi iste porro ab accusamus soluta, nam quis at ipsum sunt veniam adipisci! Explicabo maiores ullam repellendus placeat vel quo consectetur possimus. Consectetur perspiciatis dignissimos 
            </div>
          </div>
        </div>
        <div className='bg-green-300 w-80 md:w-2/3 flex-shrink-0 flex gap-1 rounded-md p-3'>
          <div className='w-32 h-fit bg-green-500 rounded-full p-2'>
            <Image alt='L' src={money} width={300} height={300} />
          </div>
          <div className='flex flex-col'>
            <div className='font-semibold overflow-hidden overflow-ellipsis text-sm md:text-xl'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci eos assumenda magni minus
            </div>
            <div className='text-gray-800 overflow-hidden overflow-ellipsis text-xs md:text-lg'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit tempora obcaecati sit vel ullam repudiandae laudantium sed quae sequi iste porro ab accusamus soluta, nam quis at ipsum sunt veniam adipisci! Explicabo maiores ullam repellendus placeat vel quo consectetur possimus. Consectetur perspiciatis dignissimos 
            </div>
          </div>
        </div>
      </div>
      <button
        className='absolute top-1/2 transform -translate-y-1/2 left-0 bg-white opacity-80 hover:opacity-100 p-2 rounded-full ml-2 hidden md:flex'
        onClick={() => scroll(-150)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
        </svg>
      </button>
      <button
        className='absolute top-1/2 transform -translate-y-1/2 right-0 bg-white opacity-80 hover:opacity-100 p-2 rounded-full mr-2 hidden md:flex'
        onClick={() => scroll(150)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
        </svg>
      </button>
    </div>
  );
}
