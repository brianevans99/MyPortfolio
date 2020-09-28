import React from 'react'
import data from '../../data/data'

export default function Info() {
  return (
    <div className='flex flex-col justify-center text-lg md:text-xl'>
      <div className='flex'>
        <div className='mx-1 text-blue-600 '>{data.personalInfo[0]}</div>
        <div className='mx-1 text-blue-300'>{data.personalInfo[1]}</div>
        <div className='mx-1 text-white'>{data.personalInfo[2]}</div>
        <div className='mx-1 text-yellow-400'>{data.personalInfo[3]}</div>
      </div>
      <div className='flex items-center mx-4'>
        <div className='mx-1 text-blue-400 '>{data.personalInfo[4]}</div>
        <div className='mx-1 text-orange-600 text-xl md:text-2xl font-semibold'>
          {data.personalInfo[5]}
        </div>
      </div>
      <div className='flex items-center mx-4'>
        <div className='mx-1 text-blue-400 '>{data.personalInfo[6]}</div>
        <div className='mx-1 text-orange-600 sm:text-2xl font-semibold'>
          {data.personalInfo[7]}
        </div>
      </div>
      <div className='flex justify-start'>
        <div className='mx-1 text-yellow-400'>{data.personalInfo[8]}</div>
      </div>
    </div>
  )
}
