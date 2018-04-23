import React from 'react'

import Profile from './Profile'

const Gallery = () => {
  return (
    <div className = 'gallery'>
      <h4>Gallery</h4>
      <h5> ~*~ fancy coverflow things here? ~*~ </h5>
      
      <div className = 'galleryImg'>
        <div className = 'imgContainer'>
          <div className = 'imgHead'> ~*~ HEAD ~*~ </div>
          <div className = 'imgBody'> ~*~ BODY ~*~ </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery