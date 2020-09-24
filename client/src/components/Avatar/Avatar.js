import React from 'react'

export default function Avatar({ headshot }) {
  return (
    <div className='w-5/12 sm:w-6/12 lg:w-8/12'>
      <img src={headshot} alt='' />
    </div>
  )
}
