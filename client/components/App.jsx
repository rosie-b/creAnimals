import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'


import Home from './Home'
// import Profile from './Profile'
import CreateStep1 from './CreateStep1'
import CreateStep2 from './CreateStep2'

const App = () => {
  return ( 
    <Router>
      <div>
        <h1>App TEST</h1> 
        <Route exact path = '/' component = {Home} />
        <Route exact path = '/creAnimals' component = {Home} />
        {/* <Route exact path = '/creAnimals/profile' component = {Profile} /> */}
        <Route exact path = '/creAnimals/create/step1' component = {CreateStep1} />
        <Route exact path = '/creAnimals/create/step2' component = {CreateStep2} />
      </div>
    </Router>
  )
}

export default App
