import React from 'react'
import './style.css'

const IconButton = ({icon, className, onClick}) => {
  return (
    <button className={`iconbutton ${className}`} onClick={onClick}>{icon}</button>
  )
}

export default IconButton 
