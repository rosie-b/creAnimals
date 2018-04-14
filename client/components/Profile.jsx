import React from 'react'

import CreationImg from './CreationImg'
import creanimals from '../../server/public/data/creanimals'

const Profile = () => {
  return (
    <div className = 'profile'>
      <p>(Profile page TEST)</p>
      <div className = 'profileImg'>
        <CreationImg />
      </div>
    </div>
  )
}

export default Profile
