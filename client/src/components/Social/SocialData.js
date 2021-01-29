import React from 'react'
import {
  FaLinkedin,
  FaGithubAlt,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaMobileAlt,
} from 'react-icons/fa'

export default {
  socialIcons: [
    {
      id: 1,
      icon: <FaLinkedin />,
      link: 'https://www.linkedin.com/in/brianevans99',
      anchor: 'text-blue-600 hover:text-blue-700',
    },
    {
      id: 2,
      icon: <FaGithubAlt />,
      link: 'https://www.github.com/brianevans99',
      anchor: 'text-yellow-600 hover:text-yellow-700',
    },
    {
      id: 3,
      icon: <FaInstagram />,
      link: 'https://www.instagram.com/brian_evans99',
      anchor: 'text-pink-600 hover:text-pink-700',
    },
  ],
  contactInfo: [
    {
      id: 1,
      icon: <FaEnvelope />,
      text: 'brianevans99@gmail.com',
    },
    {
      id: 2,
      icon: <FaMobileAlt />,
      text: '404.985.7506',
    },
  ],
}
