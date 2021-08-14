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
          studying computer science and math at NYU Tandon School of
          Engineering.
        </p>
        <p className='about-text'>
          I consider myself a generalist, learning about a vast range of topics
          in tech, physics, biology, finance, and psychology. But at the core, I
          am an engineer. If left alone for a weekend, I'll naturally gravitate
          towards building something useful. I'm super obsessed with sci-fi and
          thriller movies(hit me up if you ever need recommendations). In my
          freetime, I spend time reading and playing Squash. Also, my pronouns
          are he/him 😄
        </p>
        <p className='about-text'>
          Lastly, I really appreciate you spending the time to know me, and if
          there's any way we can collaborate or if you wanna say hi, please
          email me at gaurang[dot]ruparelia02[at]gmail[dot]com
        </p>
        <a download href={gaurangResume}>
          <button className='about-button'>Download my resume</button>
        </a>
      </div>
    </div>
  )
}

export default ImageSection
