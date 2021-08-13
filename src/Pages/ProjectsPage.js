import React from "react"
import Helmet from "react-helmet"
import allProjects from "../Components/ProjectData"
import Title from "../Components/Title"
import "../styles/_projects.scss"

function ProjectsPage() {
  return (
    <>
      <Helmet>
        <title>Projects Gaurang Ruparelia</title>
        <meta
          name='description'
          content='Personal and hackatho projects made and maintained by Gaurang Ruparelia.'
        ></meta>
        <meta
          name='keywords'
          content='Gaurang Ruparelia projects, Gaurang Ruparelia work, Gaurang portfolio, Gaurang Ruparelia coding'
        />
      </Helmet>
      <div>
        <div className='project-title'>
          <Title title={"Projects"} />
        </div>
        <div className='projects-page'>
          {allProjects.map((project) => {
            return (
              <div className='project' key={project.id}>
                <div className='project-content'>
                  <div className='image-container'>
                    <img src={project.image} alt='' />
                  </div>
                  <a
                    rel='noopener noreferrer'
                    style={{ display: "table-cell" }}
                    target='_blank'
                    href={project.link}
                    className='project-link'
                  >
                    {project.title}
                  </a>
                  <div
                    style={{
                      paddingTop: "15px",
                      display: "flex",
                      marginLeft: "5px",
                      marginRight: "5px",
                    }}
                    className='tags-container'
                  >
                    <div className='tag-container'>
                      <div
                        style={{
                          backgroundColor: `${
                            project.tech === "React"
                              ? "blue"
                              : project.tech === "C++"
                              ? "brown"
                              : project.tech === "Java"
                              ? "green"
                              : project.tech === "React Native"
                              ? "grey"
                              : project.tech === "MERN stack"
                              ? "#E75480"
                              : "black"
                          }`,
                          color: "white",
                          borderRadius: "25px",
                          display: "inline-block",
                          paddingLeft: "7px",
                          paddingRight: "7px",
                        }}
                      >
                        {project.tech}
                      </div>
                    </div>
                    <div className='tag-container'>
                      <div
                        style={{
                          backgroundColor: `${
                            project.teamType === "solo"
                              ? "black"
                              : project.teamType === "group"
                              ? "white"
                              : null
                          }`,
                          color: `${
                            project.teamType === "solo"
                              ? "white"
                              : project.teamType === "group"
                              ? "black"
                              : null
                          }`,
                          borderRadius: "25px",
                          display: "inline-block",
                          paddingLeft: "7px",
                          paddingRight: "7px",
                        }}
                      >
                        {project.teamType}
                      </div>
                    </div>

                    {project.isHackathon ? (
                      <div className='tag-container'>
                        <div
                          style={{
                            backgroundColor: "purple",
                            color: "white",
                            borderRadius: "25px",
                            display: "inline-block",
                            paddingLeft: "7px",
                            paddingRight: "7px",
                          }}
                        >
                          hackathon
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ProjectsPage
