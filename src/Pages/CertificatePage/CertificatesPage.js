import React from "react"
import Title from "../../Components/Title"
import resumePDF from "../../PDFs/Gaurang_Ruparelia_Resume.pdf"

const CertificatePage = () => {
  return (
    <div class='CertificatePage'>
      <Title title={"My certificate"} />
      <div className='certificate-container'>
        <embed
          className='certificate'
          type='application/pdf'
          src={resumePDF + "#view=FitH"}
        />
      </div>
      <div className='certificate-container'>
        <embed
          className='certificate'
          type='application/pdf'
          src={resumePDF + "#view=FitH"}
        />
      </div>
      <div className='certificate-container'>
        <embed
          className='certificate'
          type='application/pdf'
          src={resumePDF + "#view=FitH"}
        />
      </div>
      <div className='certificate-container'>
        <embed
          className='certificate'
          type='application/pdf'
          src={resumePDF + "#view=FitH"}
        />
      </div>
      <div className='certificate-container'>
        <embed
          className='certificate'
          type='application/pdf'
          src={resumePDF + "#view=FitH"}
        />
      </div>
    </div>
  )
}

export default CertificatePage
