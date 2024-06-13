import React from 'react'
import '../css/pages/folio.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faSass, faNode, faJs } from '@fortawesome/free-brands-svg-icons'
import CardProject from '../components/cardProject'
import watchListImage from '../images/watch-list.jpg'
import rbnbImage from '../images/rbnb.png'
import devjobsImage from '../images/devjobs.png'
import coutriesImage from '../images/countries.png'
import rorLogo from '../images/rails-1.svg'
import reduxLogo from '../images/redux.svg'
import mongoLogo from '../images/mongodb-ar21.svg'

function Folio() {

  const reactLogo = <FontAwesomeIcon icon={faReact} className='logo reactLogo'/>
  const scssLogo = <FontAwesomeIcon icon={faSass} className='logo scssLogo'/>
  const nodeLogo = <FontAwesomeIcon icon={faNode} className='logo nodeLogo'/>
  const javaScipt = <FontAwesomeIcon icon={faJs} className='logo javaScript'/>

  return (
    <div className='folio-container'>
    <div className="presentation">
      <h2 className='folio-title'>Portfolio</h2>
      <p>Vous trouverez ici, quelques une des mes créations.</p>
    </div>

      <div className='list-projects'>
        <CardProject
          link="https://watch-listbydamdev94.netlify.app"
          title= 'Watch-List'
          image= { watchListImage }
          react= {reactLogo}
          scss={scssLogo}
          node={nodeLogo}
          mongoLogo={mongoLogo}
          githubLink="https://github.com/damdev94/Watch-List"
          description="Application de création de listes de films. Version ordinateur uniquement."
        />

        <CardProject
          link="https://airbnb-inklooo-5fdd8cc40bd2.herokuapp.com/"
          title='CottageBNB'
          image= { rbnbImage }
          scss={scssLogo}
          javaScript={javaScipt}
          ror= {rorLogo}
          githubLink="https://github.com/Inklooo/CLONE_AIRBNB"
          description="Un clone d'Airbnb réalisé en équipe avec Ruby on Rails. Version ordinateur uniquement."
        />

        <CardProject
          link="https://countriesbydamdev94.netlify.app/"
          title='Countries-API'
          image= { coutriesImage }
          react= {reactLogo}
          reduxLogo={reduxLogo}
          githubLink="https://github.com/damdev94/Countries-API"
          description="Annuaire des Pays du monde avec filtres et darkmode. Responsive"
        />

        <CardProject
          link="https://devjobsbydamdev94.netlify.app/"
          title='Devjobs'
          image= { devjobsImage }
          react= {reactLogo}
          githubLink="https://github.com/damdev94/DevJobs-REACT"
          onClick={() => window.open("https://countriesbydamdev94.netlify.app/", "_blank")}
          description="Annuaire d'emploi avec filtres, darkmode et localstorage. Responsive"
        />

      </div>
    </div>
  )
}

export default Folio
