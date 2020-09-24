import React from 'react'

export default function Ribbon({ image, imgAlt }) {
  return (
    <div className='flex justify-center items-center'>
      <img className='w-8 mx-2' src={image} alt={imgAlt} />
    </div>
  )
}
