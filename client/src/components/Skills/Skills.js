import React from 'react'
// import { FaCheck } from 'react-icons/fa'
import pageData from '../../data/data'

export default function Skills() {
  const skills = pageData.skills.map((item) => (
    <div key={item.id} className='flex items-center px-2'>
      <div className='mr-1 w-6 md:w-8 pb-1'>{item.icon}</div>
      <div className='pb-1'>{item.skill}</div>
    </div>
  ))
  return (
    <div className='grid grid-rows-5 grid-cols-2 grid-flow-col font-semibold text-base sm:text-lg md:text-xl pb-4'>
      {skills}
    </div>
  )
}
