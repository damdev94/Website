import React from 'react'
import '../css/pages/contact.scss'
import ContactCard from '../components/contact-card'
import { motion } from 'framer-motion'

function Contact({pageVariants}) {
  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} className='contact-container'>
      <div className="presentation">
        <h2 className='contact-title'>Contact</h2>
        <p>Vous souhaitez me contacter ?</p>
      </div>
      <div className="contact-content">
        <ContactCard />
      </div>
    </motion.div>
  )
}

export default Contact
