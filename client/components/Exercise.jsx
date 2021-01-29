import React from 'react'
import { Link, Route } from 'react-router-dom'
import body from '../../data/bodyPartDatabase'
import Tips from './Tips'

const imgStyle = {
  width: '40vw'
}

const aTag = {
  textDecoration: 'none',
  color: 'black'
}

const exerciseStyle = {
  display: 'flex',
  textAlign: 'center'
}

const headerFont = {
  fontSize: '40px',
  textTransform: 'uppercase'
}

const pDetails = {
  fontSize: '20px',
  paddingTop: '15vh'
}

function Exercise (props) {
  const bodyPart = props.match.params.bodyPart
  const exerciseName = props.match.params.exercise

  const exercise = body[bodyPart]
  const individualExercise = exercise.filter(element => element.name === exerciseName)

  console.log(Tips)
  return (

    <div style={exerciseStyle}>
      <header>
        <h1 style={headerFont}>{individualExercise[0].name}</h1>
        <img style={imgStyle} src={individualExercise[0].image} />
      </header>
      <div style={pDetails}>
        <p>{individualExercise[0].description}</p>

        <Link to={`${props.match.url}/tips`}>Show Tips</Link>
        <Route exact path="/:bodyPart/:name/tips" component={Tips} />
        <br/>
        <Link to={`/${bodyPart}`} style={aTag}>BACK</Link>
      </div>
    </div>

  )
  // const bodyPart = props.match.params.bodyPart
  // const exerciseName = props.match.params.exercise

  // const exercise = body[bodyPart]

  // const individualExercise =  exercise.filter( element => element.name === exerciseName)

  // return (

  //        <div>
  //            <h1>{individualExercise[0].name}</h1>
  //            <p>{individualExercise[0].description}</p>
  //            <img src={individualExercise[0].image}/>

  //            <Link to={`${props.match.url}/tips`}>Show Tips</Link>
  //            <Route path="/:bodyPart/:name/tips" component={Tips} />
  //        </div>

  // )
}

export default Exercise
