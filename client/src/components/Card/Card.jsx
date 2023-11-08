import React from 'react'
import './style.css'

const Card = ({name, image, userRating, maxRating}) => {
  return (
    <div style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.00), #000 100%), url(${image})`}} className='card'>
        <div className='content'>
          {userRating>=0 && maxRating ? // нужно сделать по-человечески
            <p className='content-rating'>{userRating} / {maxRating}</p>
            :
            <p/>
          }
            <hr className='content-divider'></hr>
            <p className='content-text'>{name}</p>
        </div>
    </div>
  )
}


export default Card;