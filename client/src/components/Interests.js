import React from 'react'
import InterestItem from '../components/InterestItem'
import interestsData from '../data/interests'

export default function Interests() {
  const interestItems = interestsData.map(item => (
    <InterestItem key={item.index} item={item} />
  ))
  return <ul>{interestItems}</ul>
}
