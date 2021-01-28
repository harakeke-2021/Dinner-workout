import React from 'react'
const nav = {
  display: 'flex',
  justifyContent: 'space-between'
}

const navLink = {
  listStyleType: 'none',
  display: 'flex',
  flex: 'space-between'
}

const Nav = () => {
  return (
    <nav style={nav}>
      <h1>DINNER</h1>
      <ul style={navLink}>
        <li>lkdjasf</li>
        <li>lkdjasf</li>
        <li>lkdjasf</li>
        <li>lkdjasf</li>
        <li>lkdjasf</li>
      </ul>
    </nav>
  )
}

export default Nav
