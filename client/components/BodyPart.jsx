import React from 'react'
import { Link } from 'react-router-dom'
import body from '../../data/bodyPartDatabase'

const ulStyle = {
  paddingLeft: '0'

}

const workoutStyle = {
  textTransform: 'uppercase',
  listStyleType: 'none',
  fontSize: '30px'
}

const aTag = {
  textDecoration: 'none',
  color: 'black'
}

function BodyPart (props) {
  const bodyPart = props.match.params.bodyPart
  const workouts = body[bodyPart]

  console.log(workouts)
  return (
    <>
      <ul style={ulStyle}>
        {
          workouts.map(workout => {
            return (
              <>
                <li style={ workoutStyle} key={workout.id}>
                  <Link to={`/${bodyPart}/${workout.name}`} style={aTag}>{workout.name}</Link>
                </li>
              </>
            )
          })
        }
      </ul>
    </>
  )
}

export default BodyPart
