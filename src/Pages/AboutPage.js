import React from "react"
import ImageSection from "../Components/ImageSection"
import HobbiesSection from "../Components/HobbiesSection"
import design from "../img/design.svg"
import intelligence from "../img/intelligence.svg"
import gamedev from "../img/game-dev.svg"
import Title from "../Components/Title"
import { Helmet } from "react-helmet"

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Gaurang Ruparelia</title>
        <meta
          name='description'
          content='A short description about Gaurang Ruparelia, his hobbies, who Gaurang Ruparelia is'
        ></meta>
        <meta
          name='keywords'
          content='About Gaurang, what does Gaurang Ruparelia do, about Ruparelia,'
        />
      </Helmet>
      <div className='about-page'>
        <Title title={"About Me"} />
        <ImageSection />

        <Title title={"Hobbies"} />
        <div className='services-container'>
          <HobbiesSection
            image={design}
            title={"Web design"}
            text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
          />
          <HobbiesSection
            image={intelligence}
            title={"Artificial Intelligence"}
            text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
          />
          <HobbiesSection
            image={gamedev}
            title={"Game Development"}
            text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
          />
        </div>
      </div>
    </>
  )
}

export default AboutPage
