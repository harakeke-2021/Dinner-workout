import React, { useState } from 'react'
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

const bodyImg = {
  width: '10vh',
  alignItems: 'baseline'
}

// export default Body
function Body (prop) {
  const bodyPartNames = Object.keys(data)

  const img = './images/blank.png'

  const [image, changeImage] = useState(img)

  function handleImage (part) {
    changeImage(`./images/${part}.png`)
  }

  return (
    <div style={nav}>

      <h1><Link to='/' style={aTag}>DINNER</Link></h1>
      <ul style={navUl}>
        {bodyPartNames.map(bodyPart => {
          return (
            <li style={navLink} key={bodyPart} onMouseEnter={ () => handleImage(bodyPart)}>
              <Link to={`/${bodyPart}`} style={aTag}>{bodyPart}</Link>
            </li>
          )
        })}
        <img src={image} style={bodyImg} />
      </ul>
    </div>
  )
}

export default Body
