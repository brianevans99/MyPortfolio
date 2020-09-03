import React, { Component } from 'react'
import './Background.css'
import Video from '../../assets/mp4/Blurred Video of Scripts Being Typed.mp4'

export default class Background extends Component {
  render() {
    return (
      <div>
        <div id='overlay'></div>
        <video
          playsinline='playsinline'
          autoplay='autoplay'
          muted='muted'
          loop='loop'
        >
          <source src={Video} type='video/mp4' />
        </video>
      </div>
    )
  }
}
