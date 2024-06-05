import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import '../css/components/contact-card.scss'


function ContactCard() {
  return (
    <div className='cardContact'>
      <h1>Contactez-moi</h1>
        <div className="contact-logo">
          <Link to='https://github.com/damdev94'><FontAwesomeIcon icon={faGithub} /></Link>
          <Link to='https://www.linkedin.com/in/damien-viel-0a214b2a6/'><FontAwesomeIcon icon={faLinkedin} /></Link>
        </div>
      <h4>Email : damiendp94@gmail.com</h4>
      <h4>Tél : 438-338-6915 </h4>
    </div>
  )
}

export default ContactCard
