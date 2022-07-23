import React from 'react'
import './HomeScreen.css'

import Banner from './Banner'
import Nav from './Nav'

function HomeScreen() {
  return (
    <div className="homeScreen">
        {/* Nav */}
        <Nav />

        {/* Banner */}
        <Banner />

        {/* Rows */}
    </div>
  )
}

export default HomeScreen
