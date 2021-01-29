import React from 'react'

// import BodyParts from './BodyParts'

const centerLeft = {
  marginTop: '20vh',
  border: 'solid black',
  padding: '0 33.2px'
}

const spacing = {
  marginBottom: '0',
  fontSize: '40px'
}

const hook = {
  fontSize: '40px',
  marginTop: '5px'
}
function Home () {
  return (
    <section>
      <div style={centerLeft}>
        <h1 style={spacing}>WHY LOOK LIKE A SNACK</h1>
        <h2 style={hook}>WHEN YOU CAN LOOK LIKE THE MAIN MEAL</h2>
      </div>
    </section>
  )
}

export default Home
