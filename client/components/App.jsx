import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'

// COMPONENTS
import Body from './Body'

import Nav from './Nav'

const zero = {
  margin: '0',
  fontFamily: 'Arial, Helvetica, sans-serif',
  border: 'solid'
}

const App = () => {
  return (
    <div style={zero}>
      <Route exact path='/' component={Home} />
      <Nav />
      <Body/>
    </div>

  )
}

export default App
