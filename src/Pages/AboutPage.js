import React from "react"
import ImageSection from "../Components/ImageSection"
import ServicesSection from "../Components/ServicesSection"
import design from "../img/design.svg"
import intelligence from "../img/intelligence.svg"
import gamedev from "../img/game-dev.svg"
import Title from "../Components/Title"

function AboutPage() {
  return (
    <div className='about-page'>
      <Title title={"About Me"} />
      <ImageSection />

      <Title title={"Services"} />
      <div className='services-container'>
        <ServicesSection
          image={design}
          title={"Web design"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
        <ServicesSection
          image={intelligence}
          title={"Artificial Intelligence"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
        <ServicesSection
          image={gamedev}
          title={"Game Development"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
      </div>
    </div>
  )
}

export default AboutPage
