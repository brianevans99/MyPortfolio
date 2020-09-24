import React, { Component, Fragment } from 'react'
import BackgroundData from './BackgroundData'
import moment from 'moment'

export default class Background extends Component {
  state = {
    backgroundImg: BackgroundData.backgrounds[moment().day()].image,
    class: BackgroundData.backgrounds[moment().day()].class,
  }

  render() {
    return (
      <Fragment>
        <div
          className={`fixed ${this.state.class}`}
          style={{ backgroundImage: `url(${this.state.backgroundImg})` }}
        >
          <div className='absolute bg-black bg-opacity-50 w-full h-full z-10' />
        </div>
      </Fragment>
    )
  }
}
