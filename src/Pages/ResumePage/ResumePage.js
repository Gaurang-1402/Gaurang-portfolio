import React from "react"
import Title from "../../Components/Title"
import resumePDF from "../../PDFs/Gaurang_Ruparelia_Resume.pdf"

const ResumePage = () => {
  return (
    <div class='ResumePage'>
      <Title title={"My resume"} />
      <div className='resume-container'>
        <embed
          className='resume'
          type='application/pdf'
          src={resumePDF + "#view=FitH"}
        />
      </div>
    </div>
  )
}

export default ResumePage
