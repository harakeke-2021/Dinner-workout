import React from 'react'
import data from '../../data/bodyPartDatabase'
import { Link } from 'react-router-dom'

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

const aTag = {
  textDecoration: 'none',
  color: 'black'
}

// export default Body
function Body (prop) {
  const bodyPartNames = Object.keys(data)

  return (
    <div style={nav}>

      <h1><Link to='/' style={aTag}>DINNER</Link></h1>
      <ul style={navUl}>
        {bodyPartNames.map(bodyPart => {
          return (
            <li style={navLink} key={bodyPart}>
              <Link to={`/${bodyPart}`} style={aTag}>{bodyPart}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Body
