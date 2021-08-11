import React from "react"

function ContactItem({ icon, text1, text2, title }) {
  return (
    <div className='contact-container'>
      <div className='contact-information'>
        <img src={icon} alt='' />
        <div className='contact-fields'>
          <h6>{title}</h6>
          <p>{text1}</p>
          <p>{text2}</p>
        </div>
      </div>
    </div>
  )
}

export default ContactItem
