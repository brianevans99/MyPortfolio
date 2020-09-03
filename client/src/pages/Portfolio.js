import React from 'react'
import PortfolioItem from '../components/PortfolioItem'
import portfolioData from '../data/portfolio'

export default function Portfolio() {
  const portfolioItems = portfolioData.map(item => (
    <PortfolioItem key={item.id} item={item} />
  ))
  return (
    <div className='container portfolio'>
      <h2>A few of my projects....</h2>
      <div className='portfolio'>{portfolioItems}</div>
    </div>
  )
}
