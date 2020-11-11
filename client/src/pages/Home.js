import React from 'react'
import { FaFolderOpen, FaFileAlt } from 'react-icons/fa'
import Header from '../components/Header/Header'
import Info from '../components/Info/Info'
import Paragraph from '../components/Paragraph/Paragraph'
import Skills from '../components/Skills/Skills'
import pageData from '../data/data'
import { Player } from 'video-react'
import video from '../assets/videos/myVideo.mp4'
import videoPoster from '../assets/images/videoPoster.gif'
import 'video-react/dist/video-react.css'

const baseCSS = 'cursor-pointer bg-black'
const hover =
  'transition duration-200 ease-in-out hover:bg-gray-900 hover:scale-105 transform'

function Home() {
  return (
    <div className='grid grid-cols-4 gap-1 bg-gray-900 text-gray-400 overflow-hidden'>
      <div className={`${baseCSS} col-span-4`}>
        <Header
          link1={'/portfolio'}
          name1={'portfolio'}
          icon1={<FaFolderOpen />}
          link2={'/resume'}
          name2={'resume'}
          icon2={<FaFileAlt />}
        />
      </div>
      <div
        className={`${baseCSS} ${hover} col-span-4 flex justify-center p-2 sm:p-8`}
      >
        <Info />
      </div>
      <div
        className={`${baseCSS} ${hover} col-span-4 lg:col-span-2 border-b-0 lg:border-b-4 border-gray-900 px-8`}
      >
        {/* <Paragraph
          header={pageData.opening.header}
          text={pageData.opening.text}
        /> */}
        <Player playsInline src={video} poster={videoPoster} />
      </div>
      <div
        className={`${baseCSS} ${hover} col-span-4 lg:col-span-2 flex flex-col justify-center items-center border-b-4 border-gray-900`}
      >
        <div className='font-semibold text-lg md:text-2xl py-1'>
          Skilled in...
        </div>
        <Skills />
      </div>
    </div>
  )
}

export default Home
