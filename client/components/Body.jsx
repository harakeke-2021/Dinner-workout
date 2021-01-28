import React from 'react'
import data from '../../data/bodyPartDatabase'
import { Link } from 'react-router-dom'

function Body (prop) {
  const bodyPartNames = Object.keys(data)

  return (
    <div>
      <ul>
        {bodyPartNames.map(bodyPart => {
          return (
            <li key={bodyPart}>
              <Link to={`/${bodyPart}`}>{bodyPart}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Body
Body