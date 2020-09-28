import React from 'react'
import { Link } from 'react-router-dom'
import milkyWay from '../assets/images/backgrounds/milkyWay-min.webp'
import hmmm from '../assets/images/hmmm.png'
import {
  FaExclamationTriangle,
  FaHome,
  FaFolderOpen,
  FaFileAlt,
} from 'react-icons/fa'
import Avatar from '../components/Avatar/Avatar'
import Social from '../components/Social/Social'

const divStyle = {
  backgroundImage: `url(${milkyWay})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  // backgroundPosition: 'bottom left',
}
const baseCSS =
  // transform breaks in Firefox
  'cursor-pointer flex justify-center items-center bg-black'
// hover:opacity-75 hover:scale-105 transition ease-in-out duration-500'

function NotFound() {
  return (
    <div className='h-screen bg-gray-900'>
      <div className='container-fluid h-full grid grid-cols-6 gap-1 mx-auto p-0 overflow-hidden'>
        <div
          style={divStyle}
          className={`${baseCSS} col-span-6 md:col-span-3 lg:col-span-4 row-span-3 sm:row-span-4 md:row-span-3`}
        >
          <div className='flex flex-col items-center'>
            <Avatar headshot={hmmm} />
            <Social />
          </div>
        </div>

        <div
          className={`${baseCSS} col-span-2 md:col-span-3 lg:col-span-2 md:row-span-1 text-gray-300 text-lg transition duration-200 ease-in-out hover:bg-blue-500 hover:scale-105 transform `}
        >
          <Link to='/'>
            <div className='absolute top-0 left-0 w-full h-full' />
          </Link>
          <FaHome />
          <div className='mx-2'>Home </div>
        </div>
        <div
          className={`${baseCSS} col-span-2 md:col-span-3 lg:col-span-2 md:row-span-1 text-gray-300 text-lg transition duration-200 ease-in-out hover:bg-blue-500 hover:scale-105 transform `}
        >
          <Link to='/portfolio'>
            <div className='absolute top-0 left-0 w-full h-full' />
          </Link>
          <FaFolderOpen />
          <div className='mx-2'>Portfolio </div>
        </div>
        <div
          className={`${baseCSS} col-span-2 md:col-span-3 lg:col-span-2 md:row-span-1 text-gray-300 text-lg transition duration-200 ease-in-out hover:bg-blue-500 hover:scale-105 transform`}
        >
          <Link to='/resume'>
            <div className='absolute top-0 left-0 w-full h-full' />
          </Link>
          <FaFileAlt />
          <div className='mx-2'>Resume</div>
        </div>

        <div
          className={`${baseCSS} col-span-6 row-span-6 sm:row-span-5 md:row-span-6 lg:row-span-4 transition duration-200 ease-in-out hover:bg-gray-900 hover:scale-105 transform`}
        >
          <div className='flex flex-col text-gray-300'>
            <div className='flex flex-col items-center text-4xl md:text-5xl'>
              <FaExclamationTriangle />
              <div>Page Not Found</div>
            </div>
            <div className='text-lg md:text-2xl'>
              <div className='flex flex-col items-center'>
                <div>Sorry, this page does not exist.</div>
                <div className='text-center px-2'>
                  Well, existentially it is <i>here</i>, but it's not an
                  intentional page.
                </div>
                <div className='text-center'>Try one of the links above.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
