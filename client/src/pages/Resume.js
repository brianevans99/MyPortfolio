import React from 'react'
import Header from '../components/Header/Header'
import { FaHome, FaFolderOpen } from 'react-icons/fa'
import Paragraph from '../components/Paragraph/Paragraph'
import pageData from '../data/data'

const baseCSS = 'cursor-pointer bg-black'
const hover =
  'transition duration-200 ease-in-out hover:bg-gray-900 hover:scale-105 transform'
const headTextCSS =
  'font-mono font-bold text-center text-2xl leading-snug capitalize'

function Resume() {
  let edu = pageData.education
  const education = edu.periods.map((item) => (
    <ul key={item.id} className='my-4'>
      <li>
        <span className='font-bold'>Term: </span>
        <span className='text-gray-500'>{item.term}</span>
      </li>
      <li>
        <span className='font-bold'>Program: </span>
        <span className='text-gray-500'>{item.program}</span>
      </li>
    </ul>
  ))
  const experience = pageData.experience.map((item) => (
    <div className='my-4' key={item.id}>
      <span className='font-bold'>{item.company}:</span>
      <span className='text-gray-500'> {item.role}</span>
    </div>
  ))
  const interests = pageData.interests.map((item) => (
    <li key={item} className='text-gray-500'>
      {item}
    </li>
  ))
  return (
    <div className='grid grid-cols-4 lg:grid-cols-3 gap-1 bg-gray-900 text-gray-400 overflow-hidden'>
      <div className={`${baseCSS} col-span-4`}>
        <Header
          link1={'/'}
          name1={'home'}
          icon1={<FaHome />}
          link2={'/portfolio'}
          name2={'portfolio'}
          icon2={<FaFolderOpen />}
        />
      </div>
      <div className={`${baseCSS} ${hover} col-span-4 flex justify-center`}>
        <Paragraph header='About me...' />
      </div>
      <div
        className={`${baseCSS} ${hover} col-span-4 lg:col-span-1 border-b-0 lg:border-b-4 border-gray-900 py-2 px-8`}
      >
        <div className={headTextCSS}>education:</div>
        <div className='font-semibold text-center capitalize '>
          {edu.school}
        </div>
        <div className='font-semibold text-center capitalize '>
          {edu.location}
        </div>
        <div className='divide-y divide-gray-900'>{education}</div>
      </div>
      <div
        className={`${baseCSS} ${hover} col-span-4 lg:col-span-1 border-b-0 lg:border-b-4 border-gray-900 py-2 px-8`}
      >
        <div className={headTextCSS}>professional experience:</div>
        <div className='divide-y divide-gray-900'>{experience}</div>
      </div>
      <div
        className={`${baseCSS} ${hover} col-span-4 lg:col-span-1 border-b-4 border-gray-900 py-2 px-8`}
      >
        <div className={headTextCSS}>other interests:</div>
        <div className='flex justify-center px-8 capitalize'>
          <ul>{interests}</ul>
        </div>
      </div>
    </div>
  )
}

export default Resume
