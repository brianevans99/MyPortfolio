import React from 'react'
import { Link } from 'react-router-dom'
import milkyWay from '../assets/images/backgrounds/milkyWay-min.webp'
import avatar from '../assets/images/avatar.png'
import Avatar from '../components/Avatar/Avatar'
import { FaHome, FaFolderOpen } from 'react-icons/fa'
import Social from '../components/Social/Social'
import Paragraph from '../components/Paragraph/Paragraph'
import Date from '../components/Date/Date'
import pageData from '../data/data'

const divStyle = {
  backgroundImage: `url(${milkyWay})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center center',
}
const baseCSS =
  // transform breaks in Firefox
  'cursor-pointer flex justify-center bg-black'
// hover:opacity-75 hover:scale-105 transition ease-in-out duration-500'

function Resume() {
  let edu = pageData.education
  const education = edu.periods.map((item) => (
    <ul key={item.id} className='m-2'>
      <li>
        <span className='font-bold'>term: </span>
        {item.term}
      </li>
      <li>
        <span className='font-bold'>program: </span>
        {item.program}
      </li>
    </ul>
  ))
  const experience = pageData.experience.map((item) => (
    <div className='my-2' key={item.id}>
      <span className='font-bold'>{item.company}:</span>
      <span className=''> {item.role}</span>
    </div>
  ))
  const interests = pageData.interests.map((item) => <li>{item}</li>)
  return (
    <div className='bg-gray-900 text-gray-400'>
      <div className='container-fluid h-full grid grid-cols-6 xl:grid-rows-12 gap-1 mx-auto p-0 overflow-hidden'>
        <div
          style={divStyle}
          className={`${baseCSS} items-center p-2 col-span-4 row-span-2 xl:row-span-4`}
        >
          <div className='flex flex-col items-center'>
            <Avatar headshot={avatar} />
            <Social />
          </div>
        </div>

        <div
          className={`${baseCSS} items-center col-span-2 xl:row-span-2 text-gray-300 text-lg transition duration-200 ease-in-out hover:bg-blue-500 transform `}
        >
          <Link to='/'>
            <div className='absolute top-0 left-0 w-full h-full' />
          </Link>
          <FaHome />
          <div className='mx-2'>Home</div>
        </div>
        <div
          className={`${baseCSS} items-center col-span-2 xl:row-span-2 text-gray-300 text-lg transition duration-200 ease-in-out hover:bg-blue-500 transform`}
        >
          <Link to='/portfolio'>
            <div className='absolute top-0 left-0 w-full h-full' />
          </Link>
          <FaFolderOpen />
          <div className='mx-2'>Portfolio</div>
        </div>

        <div
          className={`${baseCSS} items-center col-span-6 row-span-1 text-gray-300 transition duration-200 ease-in-out hover:bg-gray-900 hover:scale-105 transform py-1`}
        >
          <Paragraph header='About me...' />
        </div>

        <div
          className={`${baseCSS} flex flex-col col-span-6 xl:col-span-2 xl:row-span-6 transition duration-200 ease-in-out hover:bg-gray-900 px-1 capitalize`}
        >
          <div className='font-bold text-center text-2xl leading-snug'>
            {edu.school}
          </div>
          <div className='font-semibold text-center text-lg'>
            {edu.location}
          </div>
          <div className='px-8 flex justify-center'>{education}</div>
        </div>
        <div
          className={`${baseCSS} flex flex-col col-span-6 xl:col-span-2 xl:row-span-6 transition duration-200 ease-in-out hover:bg-gray-900 px-2 `}
        >
          <div className='font-bold text-center text-2xl leading-snug capitalize'>
            Professional experience
          </div>
          <div className='px-8'>{experience}</div>
        </div>
        <div
          className={`${baseCSS} flex flex-col col-span-6 xl:col-span-2 xl:row-span-6 transition duration-200 ease-in-out hover:bg-gray-900 px-2 `}
        >
          <div className='font-bold text-center text-2xl leading-snug capitalize'>
            Other interests
          </div>
          <div className='flex justify-center px-8 capitalize'>
            <ul>{interests}</ul>
          </div>
        </div>

        <div style={divStyle} className={`${baseCSS} col-span-6 py-1 `}>
          <Date />
        </div>
      </div>
    </div>
  )
}

export default Resume
