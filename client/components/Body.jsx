import React from 'react'
import data from '../../data/bodyPartDatabase'

const nav = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  textTransform: 'uppercase'
}

const navUl = {
  listStyleType: 'none',
  display: 'flex'
}

const navLink = {
  paddingLeft: '10px'
}

function Body (prop) {
  const bodyPartNames = Object.keys(data)
  return (
    <div style={nav}>
      <h1>DINNER</h1>
      <ul style={navUl}>
        {bodyPartNames.map(bodyPart => {
          return (
            <li style={navLink} key={bodyPart}>
              {bodyPart}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Body
