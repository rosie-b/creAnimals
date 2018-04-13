import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'


import Home from './Home'
import Profile from './Profile'
import CreateStep1 from './CreateStep1'
import CreateStep2 from './CreateStep2'

const App = () => {
  return ( 
    <Router>
      <div>
        <h1>App TEST</h1> 
        <Route exact path = '/' component = {Home} />
        <Route exact path = '/' component = {Profile} />
        <Route exact path = '/' component = {CreateStep1} />
        <Route exact path = '/' component = {CreateStep2} />
      </div>
    </Router>
  )
}

export default App
