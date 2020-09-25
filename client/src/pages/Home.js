import React from 'react'
import Header from '../components/Header/Header'
import Info from '../components/Info/Info'
import Paragraph from '../components/Paragraph/Paragraph'
import Skills from '../components/Skills/Skills'
import Date from '../components/Date/Date'
import pageData from '../data/data'

const baseCSS = 'cursor-pointer bg-black'
const hover =
  'transition duration-200 ease-in-out hover:bg-gray-900 hover:scale-105 transform'

function Home() {
  return (
    <div className='grid grid-cols-3 gap-1 bg-gray-900 text-gray-400 overflow-hidden'>
      <div className={`${baseCSS} col-span-3`}>
        <Header />
      </div>
      <div
        className={`${baseCSS} ${hover} col-span-3 lg:col-span-1 flex justify-center p-8`}
      >
        <Info />
      </div>
      <div className={`${baseCSS} ${hover} col-span-3 lg:col-span-1`}>
        <Paragraph
          header={pageData.opening.header}
          text={pageData.opening.text}
        />
      </div>
      <div
        className={`${baseCSS} ${hover} col-span-3 lg:col-span-1 flex justify-center`}
      >
        <Skills />
      </div>
      <div
        className={`bg-black hidden lg:flex row-span-2 col-span-3 h-64`}
      ></div>
      <div className={`${baseCSS} col-span-3 absolute bottom-0 w-full`}>
        <Date />
      </div>
    </div>
  )
}

export default Home
