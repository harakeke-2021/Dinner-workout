import React from 'react'
import { Link } from 'react-router-dom'
import body from '../../data/bodyPartDatabase'

function Tips (props) {
  const paramsExercise = props.match.params.name
  const bodyPartName = props.match.params.bodyPart
  const keys = Object.keys(body)
  const key = keys.filter(item => item === bodyPartName)[0]
  const matchingExercise = body[key].filter(exercise => exercise.name === paramsExercise)[0]

  return (
    <>
      <h3>{matchingExercise.name}</h3>
      <p>{matchingExercise.tip}</p>
      <Link to={`/${key}/${matchingExercise.name}`}>Hide Tip</Link>
    </>
  )
}

export default Tips
