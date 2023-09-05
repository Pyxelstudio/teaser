import React from 'react'
import '../styles/Profile.css';

const Profile = ({image}) => {
  return (
    <div className='Profile'>
        <img src={image} alt='profile picture' />
    </div>
  )
}

export default Profile;