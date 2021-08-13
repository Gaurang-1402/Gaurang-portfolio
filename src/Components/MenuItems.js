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
                  <a href={item.link1}>{item.icon1}</a>
                  <a href={item.link2}>{item.icon2}</a>
                </li>
              </ul>
            </div>
            <h5>{item.title}</h5>
            <p>Placeholder paragraph</p>
          </div>
        )
      })}
    </div>
  )
}

export default MenuItems
