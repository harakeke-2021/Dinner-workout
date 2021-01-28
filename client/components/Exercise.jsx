import React from 'react'
import { Link } from 'react-router-dom'
import body from '../../data/bodyPartDatabase'

function Exercise (props) {
  const bodyPart = props.match.params.bodyPart
  const exerciseName = props.match.params.exercise

  const exercise = body[bodyPart]

  const individualExercise = exercise.filter(element => element.name === exerciseName)

  return (

    <div>
      <h1>{individualExercise[0].name}</h1>
      <p>{individualExercise[0].description}</p>
      <img src={individualExercise[0].image}/>
    </div>

  )
}

export default Exercise
