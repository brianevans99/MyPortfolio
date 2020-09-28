import React from 'react'
import { FaCheck } from 'react-icons/fa'
import pageData from '../../data/data'

export default function Skills() {
  const skills = pageData.skills.map((item) => (
    <div key={item.id} className='flex items-center px-2'>
      <div className='text-green-500 mr-2'>{!item.learning && <FaCheck />}</div>
      <div className=''>{item.skill}</div>
    </div>
  ))
  return (
    <div className='grid grid-rows-5 grid-cols-2 grid-flow-col font-semibold text-base sm:text-lg md:text-xl py-4'>
      {skills}
    </div>
  )
}
