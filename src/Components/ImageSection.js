import React from "react"
import about from "../img/about.jpeg"
import gaurangResume from "../PDFs/Gaurang_Ruparelia_Resume.pdf"
import gaurangPronounciation from "../img/gaurang.mp3"
function ImageSection() {
  return (
    <div className='image-section'>
      <div className='img-container'>
        <img src={about} alt='' />
      </div>
      <div className='about-info'>
        <h4>
          Call me <span> Gaurang (pronounced goo-rung)</span>
          <div style={{ paddingTop: "15px" }}>
            <audio
              id='player'
              controls
              src={gaurangPronounciation}
              type='audio/mp3'
            />
          </div>
        </h4>
        <p className='about-text'>
          Born and raised in Mumbai, India, I'm an international student
          studying computer science at NYU Tandon School of Engineering. I'm
          also . If left alone . I'm more of a generalist and I'm super obsessed
          with sci-fi and thriller movies(hit me up if you ever need
          recommendations) In my freetime, I spend time reading and playing
          Squash.
        </p>
        <a download href={gaurangResume}>
          <button className='about-button'>Download my resume</button>
        </a>
      </div>
    </div>
  )
}

export default ImageSection
