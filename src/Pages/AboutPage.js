import React from "react"
import ImageSection from "../Components/ImageSection"
import HobbiesSection from "../Components/HobbiesSection"
import nature from "../img/nature.svg"
import book from "../img/book.svg"
import squash from "../img/squash.svg"
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
            image={squash}
            title={"Squash"}
            text={
              "I'm both obsessed and geeky about Squash so much so that I wrote three research papers on how one can improve their game(checkout the research section). Nothing can make my morning better than an hour of playing Squash!"
            }
          />
          <HobbiesSection
            image={nature}
            title={"Hiking"}
            text={
              "What holiday would you prefer: beaches or mountains? I like to go with mountains especially ones with great hiking routes"
            }
          />
          <HobbiesSection
            image={book}
            title={"Reading"}
            text={
              "Reading is my go-to way of getting entertained. I'd love to befriend you on goodreads!"
            }
          />
        </div>
      </div>
    </>
  )
}

export default AboutPage
