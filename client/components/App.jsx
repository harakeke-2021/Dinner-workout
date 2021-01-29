import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'

// COMPONENTS
import Body from './Body'

import StarRating from './StarRating'
import Workouts from './BodyPart'
import Exercise from './Exercise'
const App = () => {
  return (
    <>
      <StarRating/>
      <Route exact path='/' component={Home} />

      <h1>React development has begun!</h1>
      <Body/>
      <Route path='/:bodyPart' component={Workouts} />
      <Route path='/:bodyPart/:exercise' component={Exercise} />

    </>
  )
}

export default App
