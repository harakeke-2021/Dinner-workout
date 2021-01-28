import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'

//COMPONENTS
import Body from './Body'
import Workouts from './Workouts'


const App = () => {
  return (
    <>

    <Route exact path='/' component={Home} />

    <h1>React development has begun!</h1>
    <Body/>
    <Route path='/workouts' component={Workouts} />

    </>
  )
}

export default App
