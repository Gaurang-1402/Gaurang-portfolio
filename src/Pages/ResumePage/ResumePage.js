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
          <embed
            className='resume'
            src=' https://drive.google.com/file/d/1vTkuhDtHjJfnD7_f2yrdeJ8uY3xSr2kH/view?usp=sharing'
          />
        </object>
      </div>
    </div>
  )
}

export default ResumePage
