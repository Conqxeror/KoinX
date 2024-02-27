import React from 'react'

export default function Button({children}) {
  return (
    <div className='rounded-md h-10 p-5 flex font-bold items-center'>
        { children }
    </div>
  )
}
