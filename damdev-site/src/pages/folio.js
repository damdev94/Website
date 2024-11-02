import React from 'react'
import '../css/pages/folio.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faSass, faNode, faJs } from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion'
import CardProject from '../components/cardProject'
import watchListImage from '../images/watch-list.jpg'
import ecotrackerImage from '../images/ecotracker.png'
import chatGroupImage from '../images/chatGroup.png'
import lightkitchImage from '../images/capture_ecran_lightkitch.png'
import rbnbImage from '../images/rbnb.png'
import devjobsImage from '../images/devjobs.png'
import coutriesImage from '../images/countries.png'
import rorLogo from '../images/rails-1.svg'
import reduxLogo from '../images/redux.svg'
import mongoLogo from '../images/mongodb-ar21.svg'

function Folio({pageVariants}) {

  const reactLogo = <FontAwesomeIcon icon={faReact} className='logo reactLogo'/>
  const scssLogo = <FontAwesomeIcon icon={faSass} className='logo scssLogo'/>
  const nodeLogo = <FontAwesomeIcon icon={faNode} className='logo nodeLogo'/>
  const javaScipt = <FontAwesomeIcon icon={faJs} className='logo javaScript'/>

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className='folio-container'
    >
      <div className="presentation">
        <h2 className='folio-title'>Portfolio</h2>
        <p>Vous trouverez ici, quelques une des mes créations.</p>
      </div>

      <div className='list-projects'>

      <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <CardProject
            link="https://lightkitch.fr"
            title='Lightkitch Website'
            image={lightkitchImage}
            react={reactLogo}
            scss={scssLogo}
            githubLink="https://github.com/damdev94/LightKitch"
            description="Création d'un site web responsive pour l'entreprise Light Kitch. Responsive."
          />

        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >

          <CardProject
            link="https://ecotracker-806ded6e78fc.herokuapp.com/"
            title='EcoTracker'
            image={ecotrackerImage}
            scss={scssLogo}
            javaScript={javaScipt}
            ror={rorLogo}
            githubLink="https://github.com/damdev94/ecotraker"
            description="Une application réalisée en équipe permettant d'estimer son empreinte carbone. Mobile uniquement."
          />
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <CardProject
            link="https://chatdamdev.netlify.app/"
            title='Chat Group'
            image={chatGroupImage}
            react={reactLogo}
            scss={scssLogo}
            node={nodeLogo}
            mongoLogo={mongoLogo}
            githubLink="https://github.com/damdev94/Group_chat"
            description="Une application de chat avec plusieurs canaux thématiques. Responsive."
          />
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <CardProject
            link="https://airbnb-inklooo-5fdd8cc40bd2.herokuapp.com/"
            title='CottageBNB'
            image={rbnbImage}
            scss={scssLogo}
            javaScript={javaScipt}
            ror={rorLogo}
            githubLink="https://github.com/Inklooo/CLONE_AIRBNB"
            description="Un clone d'Airbnb réalisé en équipe avec Ruby on Rails. Version ordinateur uniquement."
          />
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <CardProject
            link="https://countriesbydamdev94.netlify.app/"
            title='Countries-API'
            image={coutriesImage}
            react={reactLogo}
            reduxLogo={reduxLogo}
            githubLink="https://github.com/damdev94/Countries-API"
            description="Annuaire des Pays du monde avec filtres et darkmode. Responsive"
          />
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <CardProject
            link="https://devjobsbydamdev94.netlify.app/"
            title='Devjobs'
            image={devjobsImage}
            react={reactLogo}
            githubLink="https://github.com/damdev94/DevJobs-REACT"
            onClick={() => window.open("https://countriesbydamdev94.netlify.app/", "_blank")}
            description="Annuaire d'emploi avec filtres, darkmode et localstorage. Responsive"
          />
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <CardProject
            link="https://watch-listbydamdev94.netlify.app"
            title='Watch-List'
            image={watchListImage}
            react={reactLogo}
            scss={scssLogo}
            node={nodeLogo}
            mongoLogo={mongoLogo}
            githubLink="https://github.com/damdev94/Watch-List"
            description="Application de création de listes de films. Version ordinateur uniquement."
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Folio
