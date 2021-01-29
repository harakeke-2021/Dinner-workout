import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const StarRating = () => {
  const onMouseEnter = (event) => {
    setStyle(
      {
        height: '10px',
        width: '10px',
        backgroundColor: 'blue'
      }
    )
  }

  const onMouseExit = (event) => {
    setStyle(
      {
        height: '10px',
        width: '10px',
        backgroundColor: 'red'
      }
    )
  }
  const [style, setStyle] = useState(
    {
      height: '10px',
      width: '10px',
      backgroundColor: 'red'
    }
  )
  return (
    <>
      <div style = {style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseExit}>
      </div>
    </>
  )
}

export default StarRating
