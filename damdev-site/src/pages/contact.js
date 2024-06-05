import React from 'react'
import '../css/pages/contact.scss'
import ContactCard from '../components/contact-card'

function Contact() {
  return (
    <div className='contact-container'>
      <div className="presentation">
        <h2 className='contact-title'>Contact</h2>
        <p>Vous souhaitez me contacter ?</p>
      </div>
      <div className="contact-content">
        <ContactCard />
      </div>
    </div>
  )
}

export default Contact
