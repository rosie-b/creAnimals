import React from 'react'

import {getCreAnimals} from '../api'
import Banner from './Banner'
import About from './About'
import Gallery from './Gallery'
import Footer from './Footer'

export default class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      error: null,
      creAnimals: [],
      creAnimal: null,
      showDescription: false
    }
    // BINDS GO HERE
  }

  componentDidMount () {
    this.refreshCreAnimals()
  }

  renderCreAnimals (err, creAnimals) {
    this.setState ({
      error: err,
      creAnimals: creAnimals || []
    })
  }

  refreshCreAnimals (err) {
    console.log("refreshing creAnimals")
    this.setState ({
      error: err,
    })
    getCreAnimals(this.renderCreAnimals)
  }

  render () {
    return (
      <div>
        <h1> CreAnimals! </h1>
        <ul>
          this.state.creAnimals.map(creAnimal => {creAnimal.name})
        </ul>
      </div>
    )
  }

}