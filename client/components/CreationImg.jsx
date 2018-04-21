import React from 'react'

// import {getCreAnimals} from '../api' // bringing in the data

const CreationImg = () => {
  // const data = props

  return (
      <div className = 'imgContainer'>
        <div className = 'imgHead'> ~*~ HEAD ~*~
          {/* {data.map(creAnimal => {
            return (
              <img src={creAnimal.img} alt={creAnimal.name} />
            )}
          )} */}
          </div>
          <div className = 'imgBody'> ~*~ BODY ~*~
            {/* {data.map(creAnimal => {
              return (
                <img src={creAnimal.img} alt={creAnimal.name} />
              )
            })} */}
          </div>
      </div>
  )
}

export default CreationImg
