import React from 'react'
import SkillItem from '../components/SkillItem'
import skillData from '../data/skill'

export default function Skills() {
  const skillItems = skillData.map(item => (
    <SkillItem key={item.id} item={item} />
  ))
  return (
    <div className='animated fadeIn slow' id='list'>
      <ul>{skillItems}</ul>
    </div>
  )
}
