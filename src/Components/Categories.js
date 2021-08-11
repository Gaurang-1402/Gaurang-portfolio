import React from "react"
import "../styles/_categories.scss"

function Categories({ filter, categories }) {
  return (
    <div className='categories-container'>
      {categories.map((category, i) => {
        return (
          <button
            type='button'
            className='category-button'
            onClick={() => filter(category)}
            key={i}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
