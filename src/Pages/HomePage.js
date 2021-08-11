import React from "react"
import {
  faGithub,
  faLinkedin,
  faMedium,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Link } from "react-router-dom"

function HomePage() {
  return (
    <div className='home-page'>
      <header className='home-header-container'>
        <h1 className='home-header-text'>
          Hi, I am
          <span> Lorem Ipsum.</span>
        </h1>
        <p className='home-header-subtext'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          facere, numquam vitae placeat consequatur corrupti officia quibusdam.
          Blanditiis doloremque nemo ex facilis neque. A sint ipsam earum nemo
          omnis et.
        </p>
        <div className='home-icons'>
          <Link to='test' className='home-icon-container'>
            <FontAwesomeIcon icon={faLinkedin} className='icon linkedin' />
          </Link>
          <Link to='test' className='home-icon-container'>
            <FontAwesomeIcon icon={faGithub} className='icon github' />
          </Link>
          <Link to='test' className='home-icon-container'>
            <FontAwesomeIcon icon={faMedium} className='icon medium' />
          </Link>
          <Link to='test' className='home-icon-container'>
            <FontAwesomeIcon icon={faTwitter} className='icon twitter' />
          </Link>
        </div>
      </header>
    </div>
  )
}

export default HomePage
