import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import {getCreatures} from '../api'

import Home from './Home'
import Profile from './Profile'
import CreateStep1 from './CreateStep1'
import CreateStep2 from './CreateStep2'


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      creAnimals: []
    }
    this.refreshCreAnimals = this.refreshCreAnimals.bind(this)
    this.renderCreAnimals = this.renderCreAnimals.bind(this)
  }

  componentDidMount () {
    console.log("I am mounting")
    this.refreshCreAnimals()
  }

  renderCreAnimals (err, creAnimals) {
    console.log("I rendering the data")
    console.log("my data: " , creAnimals)
    this.setState ({
      error: err,
      creAnimals: creAnimals || []
    })
  }

  refreshCreAnimals (err) {
    console.log("I am refreshing")
    this.setState ({
      error: err,
    })
    getCreatures(this.renderCreAnimals)
  }

  render() {
    return (
      <div>
        <h1>App page rendering</h1>
        <ul>
          {this.state.creAnimals.map(creAnimal => <li>{creAnimal.name}</li>)}
        </ul>
        <Router>
          <div>
            <h1>Doing routes now</h1>
            <Route exact path = '/' component = {Home} />
            <Route exact path = '/creAnimals' component = {Home} />
            <Route exact path = '/creAnimals/profile' component = {Profile} />
            <Route exact path = '/creAnimals/create/step1' component = {CreateStep1} />
            <Route exact path = '/creAnimals/create/step2' component = {CreateStep2} />
          </div>
        </Router>
      </div>
    )
  }
}