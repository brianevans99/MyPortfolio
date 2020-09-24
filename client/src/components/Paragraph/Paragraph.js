import React from 'react'

const Paragraph = ({ text, header, classname }) => (
  <div className={classname}>
    <div className='font-mono text-2xl md:text-3xl text-center'>{header}</div>
    <div>{text}</div>
  </div>
)

export default Paragraph
