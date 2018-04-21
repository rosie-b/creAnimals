import React from 'react'

import {getCreAnimals} from '../api' // bring in data

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
    <ul>
      {getCreAnimals((err, creAnimals) => {
        if (err) return console.log(err)
        creAnimals.map(creAnimal => {
          return (
            <li>{creAnimal.name}</li>
        )})
      })} 
    </ul>
      <Footer />
    </div>
  )
}

export default Home