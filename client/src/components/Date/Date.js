import React from 'react'
import moment from 'moment'
import Ribbon from '../Ribbon/Ribbon'
import RibbonData from '../Ribbon/RibbonData'

function Date() {
  let time = moment().format('h:mm A')
  const ribbons = RibbonData[moment().get('month')].map((item) => (
    <Ribbon key={item.id} image={item.ribbon} imgAlt={item.name} />
  ))
  return (
    <div className='grid grid-cols-2 divide-x'>
      <div className='flex flex-col items-center text-gray-400 md:text-lg font-mono leading-tight pr-4'>
        <div className='text-center'>{moment().format('dddd')}</div>
        <div className='text-center'>{moment().format('MMMM Do')}</div>
        <div className='text-center'>{time}</div>
      </div>
      <div className='flex justify-center'>{ribbons}</div>
    </div>
  )
}

export default Date
