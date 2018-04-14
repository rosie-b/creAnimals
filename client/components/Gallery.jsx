import React from 'react'

import CreationImg from './CreationImg'

const Gallery = () => {
  return (
    <div className = 'gallery'>
      <h4>Gallery</h4>
      <h5> ~*~ fancy coverflow things here ~*~ </h5>
      <div className = 'galleryImg'>
        <CreationImg />
      </div>
      {/* coverflow code for all existing profiles to be viewed */}
    </div>
  )
}

export default Gallery