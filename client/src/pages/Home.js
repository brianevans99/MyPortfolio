import React, { Component, Fragment } from 'react'
import avatar from '../assets/images/avatar.png'
import buzz from '../assets/images/Georgia_Tech_logo.png'
import Skills from '../components/Skills'
import Interests from '../components/Interests'

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 text-center' id='avatar'>
              <img
                src={avatar}
                alt='Brian Evans avatar'
                className='img-fluid'
              />
            </div>
            <div className='col-md-8 ' id='text'>
              <h2 className='animated fadeIn faster'>
                Full Stack Web Developer
              </h2>
              <h5 className='animated fadeIn fast'>
                <i>Hello!</i> I'm a full stack web developer, engineer and
                entrepreneur with 2 decades of experience in design, customer
                service and management. I'm currently looking for a professional
                setting to further develop my passion for web design.
              </h5>
              <Skills />
            </div>
          </div>
          <hr />

          <div className='row'>
            <div className='col-md-4 ' id='education'>
              <h2>My Education</h2>
              <h5>
                Georgia Institute of Technology{' '}
                <img src={buzz} alt='Georgia Tech' />
              </h5>
              <h6>Atlanta, GA</h6>

              <ul>
                <li>Term: Summer/Fall 2019</li>
                <li>Program: Full Stack Web Development Certification</li>
              </ul>
              <ul>
                <li>Term: 1994-1999</li>
                <li>
                  Program: Bachelor of Civil Engineering Undergraduate Degree
                </li>
              </ul>
            </div>
            <div className='col-md-4 ' id='experience'>
              <h2>My Experience</h2>
              <ul>
                <li>
                  Bravo Echo Web Development - Sole Proprietor, designing and
                  managing local business websites and ad campaigns
                </li>
                <li>
                  Design Options: Partnership - maintained ecommerce presence
                  through Shopify and Woocommerce
                </li>
              </ul>
            </div>
            <div className='col-md-4 ' id='interests'>
              <h2>My Interests</h2>
              <Interests />
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}
