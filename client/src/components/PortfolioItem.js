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
          ></a>
        </h5>
        <p className='small'>
          <a href={props.item.deployUrl}>URL link</a>
          <span style={{ display: !props.item.githubUrl && 'none' }}>
            {' | '}
            <a href={props.item.githubUrl}>Repo link</a>
          </span>
        </p>
        <p className='card-text'>{props.item.description}</p>
      </div>
    </div>
  )
}
