import React from "react"
import allProjects from "../Components/ProjectData"
import Title from "../Components/Title"
import "../styles/_projects.scss"

function ProjectsPage() {
  return (
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
                  <ul className='hover-items'>
                    <li>
                      <a href={project.link1}>{project.icon1}</a>
                      <a href={project.link2}>{project.icon2}</a>
                    </li>
                  </ul>
                </div>
                <a href={project.link} className='project-link'>
                  {project.title}
                </a>
                <div style={{ paddingTop: "10px" }} className='tag-container'>
                  <div
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      borderRadius: "25px",
                      display: "inline-block",
                      paddingLeft: "7px",
                      paddingRight: "7px",
                    }}
                  >
                    neccesary
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProjectsPage
