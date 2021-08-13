import React from "react"

function MenuItems({ menuItem }) {
  return (
    <div className='research-content'>
      {menuItem.map((item) => {
        return (
          <div className='research-card' key={item.id}>
            <div className='research-image-container'>
              <img src={item.image} alt={item.title} />
              <ul className='research-hover-items'>
                <li>
                  <a download href={item.downloadLink}>
                    View
                  </a>
                </li>
              </ul>
            </div>
            <h5>{item.title}</h5>
            <p>{item.paragraph}</p>
          </div>
        )
      })}
    </div>
  )
}

export default MenuItems
