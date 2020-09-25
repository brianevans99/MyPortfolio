import React from 'react'
import { Link } from 'react-router-dom'
import milkyWay from '../assets/images/backgrounds/milkyWay-min.webp'
import avatar from '../assets/images/avatar.png'
import Avatar from '../components/Avatar/Avatar'
import { FaHome, FaFileAlt } from 'react-icons/fa'
import Social from '../components/Social/Social'
import Paragraph from '../components/Paragraph/Paragraph'
import PortfolioItem from '../components/PortfolioItem'
import PortfolioData from '../data/portfolio'
import Date from '../components/Date/Date'

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

function Portfolio() {
  const projects = PortfolioData.map((item) => (
    <div
      id={item.id}
      className={`${baseCSS} col-span-3 md:col-span-2 row-span-3 transition duration-200 ease-in-out hover:bg-gray-900`}
    >
      <PortfolioItem
        title={item.projectTitle}
        image={item.projectImg}
        description={item.description}
        github={item.githubUrl}
        url={item.deployUrl}
      />
    </div>
  ))
  return (
    <div className='bg-gray-900'>
      <div className='container-fluid grid grid-cols-6 gap-1 mx-auto p-0 overflow-hidden'>
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
          className={`${baseCSS} items-center col-span-2 text-gray-300 text-lg transition duration-200 ease-in-out hover:bg-blue-500 transform `}
        >
          <Link to='/'>
            <div className='absolute top-0 left-0 w-full h-full' />
          </Link>
          <FaHome />
          <div className='mx-2'>Home</div>
        </div>
        <div
          className={`${baseCSS} items-center col-span-2 text-gray-300 text-lg transition duration-200 ease-in-out hover:bg-blue-500 transform`}
        >
          <Link to='/resume'>
            <div className='absolute top-0 left-0 w-full h-full' />
          </Link>
          <FaFileAlt />
          <div className='mx-2'>Resume</div>
        </div>

        <div
          className={`${baseCSS} items-center col-span-6 row-span-1 text-gray-300 transition duration-200 ease-in-out hover:bg-gray-900 hover:scale-105 transform py-1`}
        >
          <Paragraph header='Some of my projects...' />
        </div>

        {projects}

        <div
          style={divStyle}
          className={`${baseCSS} col-span-6 row-span-1 py-1 `}
        >
          <Date />
        </div>
      </div>
    </div>
  )
}

export default Portfolio
