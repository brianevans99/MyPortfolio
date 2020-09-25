import React from 'react'
import { Link } from 'react-router-dom'

export default function CustomButton({ link, name, icon }) {
  return (
    <div className='flex justify-center items-center transition duration-200 ease-in-out hover:bg-blue-500 transform'>
      <Link to={link}>
        <div className='absolute top-0 left-0 w-full h-full' />
      </Link>
      {icon}
      <div className='capitalize mx-2'>{name}</div>
    </div>
  )
}
