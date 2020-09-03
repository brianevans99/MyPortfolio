import React, { Fragment } from 'react'
import hmmm from '../assets/images/hmmm.png'

const NotFound = props => {
  return (
    <Fragment>
      <div className='container'>
        <div id='notfound'>
          <h1 className='x-large'>
            <i className='fas fa-exclamation-triangle'></i> Page Not Found
          </h1>
          <p className='large'>
            Sorry, this page does not exist. Well, existentially it is{' '}
            <i>here</i>, but it's not an intentional page. Try one of the links
            at the top <i class='fas fa-arrow-up'></i>
          </p>
          <div>
            <img className='img-fluid' src={hmmm} alt='not found' />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default NotFound
