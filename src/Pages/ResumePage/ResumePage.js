import React from "react"
import Title from "../../Components/Title"
import resumePDF from "../../PDFs/Gaurang_Ruparelia_Resume.pdf"

const ResumePage = () => {
  return (
    <div class='ResumePage'>
      <Title title={"My resume"} />
      <div className='resume-container'>
        <object
          className='resume'
          data={resumePDF + "#view=FitH"}
          type='application/pdf'
        >
          <p>Oops! Your browser doesn't support PDFs!</p>
          <p>
            <a download href={resumePDF}>
              <button className='about-button'>
                Download my resume instead
              </button>
            </a>
          </p>
        </object>
      </div>
    </div>
  )
}

export default ResumePage
