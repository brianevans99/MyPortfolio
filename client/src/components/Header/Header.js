import React from 'react'
import milkyWay from '../../assets/images/backgrounds/milkyWay-min.webp'
import avatar from '../../assets/images/avatar.png'
import Avatar from '../Avatar/Avatar'
import CustomButton from '../CustomButton/CustomButton'
import Social from '../Social/Social'

const divStyle = {
  backgroundImage: `url(${milkyWay})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'top right',
}

export default function Header({ link1, name1, icon1, link2, name2, icon2 }) {
  return (
    <div className='grid grid-cols-4 grid-rows-5 sm:divide-x-4 divide-gray-900'>
      <div
        style={divStyle}
        className='col-span-4 sm:col-span-3 row-span-4 sm:row-span-5 flex flex-col items-center py-4'
      >
        <Avatar headshot={avatar} />
        <Social />
      </div>
      <div className='col-span-4 sm:col-span-1 sm:row-span-5 grid grid-cols-2 sm:grid-cols-1 divide-y-0 sm:divide-y-4 divide-x-4 sm:divide-x-0 divide-gray-900'>
        <CustomButton link={link1} name={name1} icon={icon1} />
        <CustomButton link={link2} name={name2} icon={icon2} />
      </div>
    </div>
  )
}
