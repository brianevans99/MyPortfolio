import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <nav>
          <div>
            <Link to='/'>
              <h2>
                Brian Evans <i className='fas fa-terminal'></i>
              </h2>
            </Link>
          </div>
          <div>
            <ul>
              <li>
                <Link to='/portfolio'>
                  <h6>
                    <i className='fas fa-folder' /> Portfolio
                  </h6>
                </Link>
              </li>
              <li>
                <Link to='/resume'>
                  <h6>
                    <i className='fas fa-file' /> Resume
                  </h6>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a
                  href='https://github.com/brianevans99'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <h6>
                    <i className='fab fa-github-alt'></i>
                  </h6>
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/brianevans99'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <h6>
                    <i className='fab fa-linkedin'></i>
                  </h6>
                </a>
              </li>
              <li>
                <a
                  href='https://www.instagram.com/brian_evans99/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <h6>
                    <i className='fab fa-instagram'></i>
                  </h6>
                </a>
              </li>
              <li>
                <a
                  href='https://www.facebook.com/brianevans99/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <h6>
                    <i className='fab fa-facebook-f'></i>
                  </h6>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </Fragment>
    )
  }
}

export default Navbar
