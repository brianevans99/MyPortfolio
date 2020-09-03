import React from 'react'

export default function Portfolio(props) {
  return (
    <div className='card portfolio-item'>
      <a href={props.item.deployUrl} target='_blank' rel='noopener noreferrer'>
        <img
          src={props.item.projectImg}
          className='card-img-top'
          alt={props.item.projectImgAlt}
        />
      </a>
      <div className='card-body'>
        <h5 className='card-title'>
          {`${props.item.projectTitle} `}
          <a
            href={props.item.githubUrl}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i
              style={{ display: !props.item.githubUrl && 'none' }}
              className='fab fa-github'
            />
          </a>
        </h5>
        <p className='card-text'>{props.item.description}</p>
      </div>
    </div>
  )
}
