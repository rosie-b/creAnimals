import React from 'react'

export default function Profile ({creAnimal, nextIndex, prevIndex}) {

  return (
    <div className="profile">
      <p>{creAnimal.species}</p>
      <p>{creAnimal.likes}</p>
      <p>{creAnimal.dislikes}</p>
      <p>{creAnimal.diet}</p>
      <p>{creAnimal.habitat}</p>
      <p> SOUND TO COME </p>
    </div>
  )
}
