import React from 'react'

export default function Portfolio({ title, image, description, github, url }) {
  return (
    <div className='flex flex-col px-2 text-gray-500 lg:py-4'>
      <div className='flex-initial font-mono font-semibold text-lg md:text-xl text-center leading-tight '>
        {title}
      </div>
      <div className='flex-1 container mx-auto w-48 sm:w-56 md:w-2/3 py-2'>
        <img src={image} alt={title} />
      </div>
      <div className='flex-initial grid grid-cols-2 divide-x text-sm lg:text-base text-yellow-700'>
        <div className='text-center'>
          {github && (
            <a href={github} target='_blank' rel='noopener noreferrer'>
              Repo link
            </a>
          )}
        </div>
        <div className='text-center'>
          <a href={url} target='_blank' rel='noopener noreferrer'>
            URL link
          </a>
        </div>
      </div>
      <div className='text-sm md:text-base flex-auto md:px-4 lg:px-8'>
        {description}
      </div>
    </div>
  )
}
