import React from 'react'
import { Link } from 'react-router-dom'
import milkyWay from '../assets/images/backgrounds/milkyWay-min.webp'
import avatar from '../assets/images/avatar.png'
import Avatar from '../components/Avatar/Avatar'
import { FaCheck, FaFolderOpen, FaFileAlt } from 'react-icons/fa'
import Social from '../components/Social/Social'
import Date from '../components/Date/Date'
import Info from '../components/Info/Info'
import Paragraph from '../components/Paragraph/Paragraph'
import pageData from '../data/data'

const divStyle = {
  backgroundImage: `url(${milkyWay})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  // backgroundPosition: 'top right',
}
const baseCSS =
  // transform breaks in Firefox
  'cursor-pointer flex justify-center items-center bg-black'
// hover:opacity-75 hover:scale-105 transition ease-in-out duration-500'

function Home() {
  const skills = pageData.skills.map((item) => (
    <div key={item.id} className='flex items-center px-2'>
      <div className='text-green-500 mr-2'>{!item.learning && <FaCheck />}</div>
      <div className=''>{item.skill}</div>
    </div>
  ))
  return (
    <div className='bg-gray-900'>
      <div className='container-fluid h-screen grid grid-cols-6 md:grid-rows-10 lg:grid-rows-8 gap-1 mx-auto p-0 overflow-hidden'>
        <div
          style={divStyle}
          className={`${baseCSS} p-2 col-span-4 md:col-span-2 row-span-4 `}
        >
          <div className='flex flex-col items-center'>
            <Avatar headshot={avatar} />
            <Social />
          </div>
        </div>

        <div
          className={`${baseCSS} col-span-2 row-span-2 md:row-span-1 text-gray-300 text-lg transition duration-200 ease-in-out hover:bg-blue-500 hover:scale-105 transform `}
        >
          <Link to='/portfolio'>
            <div className='absolute top-0 left-0 w-full h-full' />
          </Link>
          <FaFolderOpen />
          <div className='mx-2'>Portfolio </div>
        </div>
        <div
          className={`${baseCSS} col-span-2 row-span-2 md:row-span-1 text-gray-300 text-lg transition duration-200 ease-in-out hover:bg-blue-500 hover:scale-105 transform`}
        >
          <Link to='/resume'>
            <div className='absolute top-0 left-0 w-full h-full' />
          </Link>
          <FaFileAlt />
          <div className='mx-2'>Resume</div>
        </div>

        <div
          className={`${baseCSS} col-span-6 md:col-span-4 row-span-2 md:row-span-3 transition duration-200 ease-in-out hover:bg-gray-900 hover:scale-105 transform py-2`}
        >
          <Info />
        </div>

        <div
          className={`${baseCSS} col-span-6 lg:col-span-3 row-span-3 lg:row-span-3 px-6 md:px-12 xl:px-24 font-semibold text-gray-300 text-justify text-lg md:text-xl transition duration-200 ease-in-out hover:bg-gray-900 hover:scale-105 transform md:py-24`}
        >
          <Paragraph text={pageData.opening.text} />
        </div>

        <div
          className={`${baseCSS} col-span-6 lg:col-span-3 row-span-2 lg:row-span-3 text-gray-300 font-semibold transition duration-200 ease-in-out hover:bg-gray-900 hover:scale-105 transform`}
        >
          <div className='grid grid-flow-col grid-rows-5 sm:grid-rows-3 py-2'>
            {skills}
          </div>
        </div>
        <div style={divStyle} className={`${baseCSS} col-span-6 py-1 `}>
          {/* <Paragraph text={pageData.opening.text} /> */}
          <Date />
        </div>
      </div>
    </div>
  )
}

export default Home
