import React from 'react'

const Paragraph = ({ header, text }) => (
  <div className='flex flex-col items-center py-4'>
    <div className='font-mono font-bold text-2xl md:text-4xl text-center'>
      {header}
    </div>
    <div className='font-semibold text-justify text-lg md:text-xl'>{text}</div>
  </div>
)

export default Paragraph
