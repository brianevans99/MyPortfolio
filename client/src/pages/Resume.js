import React, { Component } from 'react'
import resume from '../assets/images/BCE_resume_2020-03-20.jpg'
import resumePDF from '../assets/images/BCEresume.pdf'

export default class Resume extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <p className='text-right'>
              Click{' '}
              <a href={resumePDF} target='_blank' rel='noopener noreferrer'>
                here
              </a>{' '}
              for .pdf version
            </p>
            <img src={resume} className='img-fluid' alt='Brian Evans resume' />
          </div>
        </div>
      </div>
    )
  }
}
