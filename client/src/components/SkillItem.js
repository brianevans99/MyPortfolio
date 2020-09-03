import React from 'react'
import { FaRegCheckSquare, FaSpinner } from 'react-icons/fa'

const textStyle = {
  fontStyle: 'italic',
  fontWeight: 'normal',
}

export default function Skill(props) {
  return (
    <li>
      <h6>
        {!props.item.learning ? <FaRegCheckSquare /> : <FaSpinner />}

        {!props.item.learning ? (
          ` ${props.item.skill}`
        ) : (
          <span style={textStyle}>{` studying ${props.item.skill}`}</span>
        )}
      </h6>
    </li>
  )
}
