import React from "react"
import ContactItem from "../Components/ContactItem"
import phone from "../img/phone.svg"
import email from "../img/emailme.svg"
import location from "../img/location.svg"
import Title from "../Components/Title"
import Helmet from "react-helmet"

function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Gaurang Ruparelia</title>
        <meta
          name='description'
          content="Gaurang Ruparelia's contact information, address, and email"
        ></meta>
        <meta
          name='keywords'
          content='contact Gaurang Ruparelia, contact Gaurang, Gaurang Ruparelia email, Gaurang Ruparelia address'
        />
      </Helmet>
      <div>
        <div className='contact-title-container'>
          <Title title={"Contact me"} />
        </div>
        <div className='contact-page'>
          <div className='map-sect'>
            <iframe
              title='map'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193747.65734576355!2d-74.08508155679834!3d40.645159363485455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24416947c2109%3A0x82765c7404007886!2sBrooklyn%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1628881636089!5m2!1sen!2sin'
              width='600'
              height='450'
              frameBorder='0'
              style={{ border: 0 }}
              allowFullScreen=''
              aria-hidden='false'
              tabIndex='0'
            ></iframe>
          </div>
          <div className='contact-sect'>
            <ContactItem
              icon={phone}
              text1={"+1 718-500-1897"}
              title={"Phone"}
            />
            <ContactItem
              icon={email}
              text1={"gaurang[dot]ruparelia02[at]gmail[dot]com"}
              title={"Email"}
            />
            <ContactItem
              icon={location}
              text1={"Brooklyn, New York"}
              text2={"United States"}
              title={"Address"}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactPage
