import React from 'react'

const Paragraph = ({ header, text }) => (
  <div className='flex flex-col items-center py-4 px-12'>
    <div className='font-mono text-2xl md:text-3xl text-center'>{header}</div>
    <div className='text-justify'>{text}</div>
  </div>
)

export default Paragraph
