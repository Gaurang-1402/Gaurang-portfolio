import React from "react"

function HobbiesSection({ image, title, text }) {
  return (
    <div className='hobbies-section'>
      <div className='hobby-container'>
        <div className='hobby-content'>
          <img src={image} alt={title} />
          <h5 className='hobby-title'>{title}</h5>
          <p className='hobby-text'>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default HobbiesSection
