import React from 'react'

export default function Avatar({ headshot }) {
  return (
    <div className='flex justify-center h-48 w-48 md:h-64 md:w-64'>
      <img
        className=''
        src={headshot}
        alt='Brian Evans - full stack developer'
      />
    </div>
  )
}
