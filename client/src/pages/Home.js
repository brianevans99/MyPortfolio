import React from 'react'
import { Link } from 'react-router-dom'
import milkyWay from '../assets/images/backgrounds/milkyWay-min.webp'
import avatar from '../assets/images/avatar.png'
import Avatar from '../components/Avatar/Avatar'
import { FaCheck, FaFolderOpen, FaFileAlt } from 'react-icons/fa'
import Social from '../components/Social/Social'
import Paragraph from '../components/Paragraph/Paragraph'
import Info from '../components/Info/Info'
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

function Home() {
  const skills = pageData.skills.map((item) => (
    <div key={item.id} className='flex items-center px-2'>
      <div className='text-green-500 mr-2'>{!item.learning && <FaCheck />}</div>
      <div className=''>{item.skill}</div>
    </div>
  ))
  return (
    <div className='bg-gray-900 text-gray-400'>
      <div className='container-fluid lg:h-screen grid grid-cols-6 gap-1 mx-auto p-0 overflow-hidden'>
        <div
          style={divStyle}
          className={`${baseCSS} items-center p-2 col-span-4 row-span-2`}
        >
          <div className='flex flex-col items-center'>
            <Avatar headshot={avatar} />
            <Social />
          </div>
        </div>
        <div
          className={`${baseCSS} items-center col-span-2 text-gray-300 text-lg transition duration-200 ease-in-out hover:bg-blue-500 hover:scale-105 transform `}
        >
          <Link to='/portfolio'>
            <div className='absolute top-0 left-0 w-full h-full' />
          </Link>
          <FaFolderOpen />
          <div className='mx-2'>Portfolio</div>
        </div>
        <div
          className={`${baseCSS} items-center col-span-2 text-gray-300 text-lg transition duration-200 ease-in-out hover:bg-blue-500 hover:scale-105 transform`}
        >
          <Link to='/resume'>
            <div className='absolute top-0 left-0 w-full h-full' />
          </Link>
          <FaFileAlt />
          <div className='mx-2'>Resume</div>
        </div>
        <div
          className={`${baseCSS} items-center col-span-6 text-gray-300 transition duration-200 ease-in-out hover:bg-gray-900 hover:scale-105 transform py-4 sm:py-16 md:py-24`}
        >
          <Info />
        </div>
        <div
          className={`${baseCSS} col-span-6 lg:col-span-3 row-span-6 transition duration-200 ease-in-out hover:bg-gray-900 hover:scale-105 transform font-semibold text-gray-300 text-justify text-lg md:text-xl px-8 md:px-12 xl:px-24 py-16`}
        >
          <Paragraph text={pageData.opening.text} />
        </div>
        <div
          className={`${baseCSS} col-span-6 lg:col-span-3 row-span-6 font-semibold text-gray-300 transition duration-200 ease-in-out hover:bg-gray-900 hover:scale-105 transform `}
        >
          <div className='grid grid-flow-col grid-rows-5 sm:grid-rows-3 py-8 lg:py-24'>
            {skills}
          </div>
        </div>
        <div style={divStyle} className={`${baseCSS} col-span-6 py-1 `}>
          <Date />
        </div>
      </div>
    </div>
  )
}

export default Home
