import React from 'react'

import {getCreatures} from '../api'

import DisplayImage from './DisplayImage'
import Profile from './Profile'


export default class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      creAnimals: [],
      creAnimal: null,
      index: 0,
      showProfile: false
    }
    this.refreshCreAnimals = this.refreshCreAnimals.bind(this)
    this.renderCreAnimals = this.renderCreAnimals.bind(this)  
    this.nextIndex = this.nextIndex.bind(this)
    this.prevIndex = this.prevIndex.bind(this)
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

  nextIndex () {
    var next = this.state.index == this.state.creAnimals.length -1 ? 0 : this.state.index + 1
    this.setState ({
      index: next
    })
  }

  prevIndex () {
    var prev = this.state.index == 0 ? this.state.creAnimals.length -1 :this.state.index -1
    this.setState ({
      index: prev
    })
  }

  handleUpdate (index) {
    const {showProfile} = this.state

    if(this.state.creAnimals.length > 0){
    return (
        <div className = 'gallery'>
            <DisplayImage creAnimal = {this.state.creAnimals[index]} nextIndex={this.nextIndex} prevIndex={this.prevIndex} />

            {showProfile
                ? <Profile  creAnimal = {this.state.creAnimals[index]} nextIndex={this.nextIndex} prevIndex={this.prevIndex} />
                : <p>Want to learn about this creature?</p>
            }
            
            <button onClick={this.toggleButton.bind(this)}>{showProfile ? "Argh! Hide please." : "Show me more!"}</button>
        </div>
    )}
  }

  toggleButton() {
      this.setState({showProfile: !this.state.showProfile})
  }

  render() {
    return (
      <div>
        <div>
        {this.handleUpdate(this.state.index)}
        </div>
      </div>
    )
  }
}