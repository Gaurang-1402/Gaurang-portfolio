import React from "react"

function Title({ title }) {
  return (
    <div className='title-container'>
      <div className='title-content'>
        <h3>{title}</h3>
      </div>
    </div>
  )
}

export default Title
