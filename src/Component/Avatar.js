
import React from 'react'
import flower from "../images/flower.webp";
import "../styles/avatar.css";


const Avatar = () => {
  return (
    <div className='profile'>
     <img src={flower} alt="flower" />
    </div>
  )
}

export default Avatar