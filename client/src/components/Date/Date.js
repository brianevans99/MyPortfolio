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
    <div className='grid grid-cols-3 lg:grid-cols-2 divide-x-4 divide-gray-900 py-2'>
      <div className='col-span-2 lg:col-span-1 flex flex-col lg:flex-row justify-center items-center'>
        <div className='text-center px-2'>{moment().format('dddd')}</div>
        <div className='text-center px-2'>{moment().format('MMMM Do')}</div>
        <div className='text-center px-2'>{time}</div>
      </div>
      <div className='flex justify-center col-span-1'>{ribbons}</div>
    </div>
  )
}

export default Date
