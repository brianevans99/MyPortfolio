import React from 'react'
import {
  Html5,
  Css3,
  Javascript,
  ReactJs,
  Redux,
  NodeDotJs,
  Mongodb,
  Wordpress,
} from '@icons-pack/react-simple-icons'
import { AiOutlineApi } from 'react-icons/ai'
import expressjs from '../assets/images/expressjsLogo.png'

export default {
  personalInfo: [
    'const',
    'info',
    '=',
    '{',
    'name:',
    "'Brian Evans',",
    'title:',
    "'Full Stack Web Developer'",
    '}',
  ],
  opening: {
    id: 1,
    header: 'Hello!',
    text:
      "I'm currently seeking a professional setting to further advance my passion for web design. Check out my resume and portfolio links above. Thanks!",
  },
  skills: [
    {
      id: 1,
      skill: 'HTML/HTML5',
      learning: false,
      icon: <Html5 color='#e34f26' />,
    },
    {
      id: 2,
      skill: 'CSS/CSS3',
      learning: false,
      icon: <Css3 color='#1572b6' />,
    },
    {
      id: 3,
      skill: 'Javascript/jQuery',
      learning: false,
      icon: <Javascript color='#f7df1e' />,
    },
    {
      id: 4,
      skill: 'React',
      learning: false,
      icon: <ReactJs color='#61DAFB' />,
    },
    {
      id: 5,
      skill: 'Redux',
      learning: false,
      icon: <Redux color='#764abc' />,
    },
    {
      id: 6,
      skill: 'Node.js',
      learning: false,
      icon: <NodeDotJs color='#339933' />,
    },
    {
      id: 7,
      skill: 'RESTful APIs',
      learning: false,
      icon: <AiOutlineApi color='#abcdef' />,
    },
    {
      id: 8,
      skill: 'MongoDB',
      learning: false,
      icon: <Mongodb color='#47a248' />,
    },
    {
      id: 9,
      skill: 'Express',
      learning: false,
      icon: <img className='w-6' src={expressjs} alt='express.js logo' />,
    },
    {
      id: 10,
      skill: 'WordPress',
      learning: false,
      icon: <Wordpress color='#21759b' />,
    },
  ],
  education: {
    school: ['georgia institute of technology'],
    location: 'atlanta, GA',
    periods: [
      {
        id: 1,
        term: 'summer / fall 2019',
        program: 'full stack web development certification',
      },
      {
        id: 2,
        term: 'Fall 1994 - Spring 1999',
        program: 'bachelor of civil engineering undergraduate degree',
      },
    ],
  },

  experience: [
    {
      id: 1,
      company: 'Bravo Echo Web Development',
      role:
        'Sole proprietor - Designing and managing local business websites and ad campaigns.',
    },
    {
      id: 2,
      company: 'Design Options',
      role:
        'Partnership - Maintained ecommerce presence using shopify and woocommerce.',
    },
    {
      id: 3,
      company: 'Southeastern Engineering',
      role:
        "Managed federally funded Ga. Department of Transportation projects for local government client's within the state. Recorded and managed database updates for project and client tracking and hosted monthly teleconferences with involved parties.",
    },
  ],
  interests: [
    'options trading',
    'fishing with my daughters',
    'college & pro football',
    'piano playing',
    'making videos',
    'current show: cobra kai',
  ],
}
