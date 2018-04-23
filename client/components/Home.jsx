import React from 'react'

import Banner from './Banner'
import About from './About'
import Gallery from './Gallery'
import Footer from './Footer'

const Home = () => {
  return (
    <div className = 'home'>
      <p>(Home page TEST)</p>
      <Banner />
      <About />
      <Gallery />
      <Footer />
    </div>
  )
}

export default Home