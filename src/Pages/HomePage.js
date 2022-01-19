import React from "react"
import {
  faGithub,
  faLinkedin,
  faMedium,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Helmet from "react-helmet"

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Gaurang Ruparelia</title>
        <meta
          name='description'
          content='Introduction to Gaurang Ruparelia and his portfolio website'
        ></meta>
        <meta
          name='keywords'
          content='Who is Gaurang Ruparelia, Gaurang Ruparelia introduction, what does Gaurang do'
        />
      </Helmet>
      <div className='home-page'>
        <header className='home-header-container'>
          <h1 className='home-header-text'>
            Hey there! My name is
            <span> Gaurang Ruparelia</span>
          </h1>
          {/* <p className='home-header-subtext'>Welcome to my website!</p> */}
          <div className='home-icons'>
            <a
              rel='noopener noreferrer'
              style={{ display: "table-cell" }}
              target='_blank'
              href='https://www.linkedin.com/in/gaurang-ruparelia/'
              className='home-icon-container'
            >
              <FontAwesomeIcon icon={faLinkedin} className='icon linkedin' />
            </a>
            <a
              rel='noopener noreferrer'
              style={{ display: "table-cell" }}
              target='_blank'
              href='https://github.com/gaurang-1402'
              className='home-icon-container'
            >
              <FontAwesomeIcon icon={faGithub} className='icon github' />
            </a>
            <a
              rel='noopener noreferrer'
              target='_blank'
              style={{ display: "table-cell" }}
              href='https://gaurang-ruparelia02.medium.com/'
              className='home-icon-container'
            >
              <FontAwesomeIcon icon={faMedium} className='icon medium' />
            </a>
            <a
              rel='noopener noreferrer'
              style={{ display: "table-cell" }}
              target='_blank'
              href='https://twitter.com/gaurangr2'
              className='home-icon-container'
            >
              <FontAwesomeIcon icon={faTwitter} className='icon twitter' />
            </a>
          </div>
        </header>
      </div>
    </>
  )
}

export default HomePage
