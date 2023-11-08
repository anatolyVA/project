import React from 'react'
import './style.css'

const TabButton = ({className, onClick, text}) => {
  return (
    <button className={className} onClick={onClick}>{text}</button>
  )
}

export default TabButton
