import React from 'react'

export default function InfoBar() {
  return (
    <div className='flex gap-5 my-5 mt-8 border-b-2 border-gray-300 overflow-auto'>
        <div className='font-semibold text-gray-700 pb-3'>
            Overview
        </div>
        <div className='font-semibold text-gray-700 pb-3'>
            Fundamentals
        </div>
        <div className='font-semibold text-gray-700 pb-3 text-nowrap'>
            News Insigts
        </div>
        <div className='font-semibold text-blue-700 border-b-4 border-blue-700 pb-3'>
            Sentiments
        </div>
        <div className='font-semibold text-gray-700 pb-3'>
            Team
        </div>
        <div className='font-semibold text-gray-700 pb-3'>
            Technical
        </div>
        <div className='font-semibold text-gray-700 pb-3'>
            Technomics
        </div>
    </div>
  )
}
