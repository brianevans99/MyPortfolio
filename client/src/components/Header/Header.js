import React from 'react'
import milkyWay from '../../assets/images/backgrounds/milkyWay-min.webp'
import avatar from '../../assets/images/avatar.png'
import Avatar from '../Avatar/Avatar'
import CustomButton from '../CustomButton/CustomButton'
import { FaFolderOpen, FaFileAlt } from 'react-icons/fa'
import Social from '../Social/Social'

const divStyle = {
  backgroundImage: `url(${milkyWay})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center center',
}

export default function Header() {
  return (
    <div className='grid grid-cols-3 grid-rows-2 divide-x-4 divide-gray-900'>
      <div
        style={divStyle}
        className='col-span-2 row-span-2 flex flex-col items-center '
      >
        <Avatar headshot={avatar} />
        <Social />
      </div>
      <div className='grid row-span-2 grid-rows-2 divide-y-4 divide-gray-900'>
        <CustomButton
          link='/portfolio'
          name='portfolio'
          icon={<FaFolderOpen />}
        />
        <CustomButton link='/resume' name='resume' icon={<FaFileAlt />} />
      </div>
    </div>
  )
}
