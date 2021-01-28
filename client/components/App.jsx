import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'

// COMPONENTS
import Body from './Body'
import StarRating from './StarRating'
const App = () => {
  return (
    <>

      <Route exact path='/' component={Home} />
      <StarRating/>
      <h1>React development has begun!</h1>
      <Body/>

    </>
  )
}

export default App
