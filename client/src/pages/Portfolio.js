import React from 'react'
import { FaHome, FaFileAlt } from 'react-icons/fa'
import Header from '../components/Header/Header'
import Paragraph from '../components/Paragraph/Paragraph'
import PortfolioItem from '../components/PortfolioItem'
import PortfolioData from '../data/portfolio'

const baseCSS = 'cursor-pointer bg-black'
const hover =
  'transition duration-200 ease-in-out hover:bg-gray-900 hover:scale-105 transform'

function Portfolio() {
  const projects = PortfolioData.map((item) => (
    <div
      key={item.id}
      className={`${baseCSS} ${hover} col-span-4 sm:col-span-2 lg:col-span-1 text-justify p-2`}
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
    <div className='grid grid-cols-4 lg:grid-cols-3 gap-1 bg-gray-900 text-gray-400 overflow-hidden'>
      <div className={`${baseCSS} col-span-4 lg:col-span-3`}>
        <Header
          link1={'/'}
          name1={'home'}
          icon1={<FaHome />}
          link2={'/resume'}
          name2={'resume'}
          icon2={<FaFileAlt />}
        />
      </div>
      <div
        className={`${baseCSS} ${hover} col-span-4 lg:col-span-3 flex justify-center`}
      >
        <Paragraph header='Some of my projects...' />
      </div>
      {projects}
    </div>
  )
}

export default Portfolio
