import React, { Fragment } from 'react'
import SocialData from './SocialData'

export default function Social() {
  const socialIcons = SocialData.socialIcons.map((icon) => (
    <li key={icon.id}>
      <a
        className={`text-2xl ${icon.anchor}`}
        href={icon.link}
        target='_blank'
        rel='noopener noreferrer'
      >
        {icon.icon}
      </a>
    </li>
  ))
  const contactInfo = SocialData.contactInfo.map((info) => (
    <li
      key={info.id}
      className='flex justify-center xl:justify-start items-center'
    >
      <div className='flex items-center'>
        <div className='mr-1'>{info.icon}</div>
        <div>:</div>
      </div>
      <div className='ml-1'>{info.text}</div>
    </li>
  ))
  return (
    <Fragment>
      <ul className='grid gap-4 grid-cols-4 text-xl pt-2'>{socialIcons}</ul>
      <ul className='font-semibold text-xl text-gray-300'>{contactInfo}</ul>
    </Fragment>
  )
}
