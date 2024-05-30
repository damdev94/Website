import React from 'react'
import '../css/pages/folio.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faSass, faNode, faJs } from '@fortawesome/free-brands-svg-icons'
import CardProject from '../components/cardProject'
import image from '../images/cottage_141426904.jpg'
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
      <h2>Portfolio</h2>
      <p>Vous trouverez ici, quelques une des mes créations.</p>
    </div>

      <div className='list-projects'>
        <CardProject
          image= { image }
          react= {reactLogo}
          scss={scssLogo}
          node={nodeLogo}
          javaScript={javaScipt}
          ror= {rorLogo}
          reduxLogo={reduxLogo}
          mongoLogo={mongoLogo}
        />

        <CardProject
          image= { image }
          react= {reactLogo}
          scss={scssLogo}
          node={nodeLogo}
          javaScript={javaScipt}
          ror= {rorLogo}
          reduxLogo={reduxLogo}
          mongoLogo={mongoLogo}
        />

        <CardProject
          image= { image }
          react= {reactLogo}
          scss={scssLogo}
          node={nodeLogo}
          javaScript={javaScipt}
          ror= {rorLogo}
          reduxLogo={reduxLogo}
          mongoLogo={mongoLogo}
        />

        <CardProject
          image= { image }
          react= {reactLogo}
          scss={scssLogo}
          node={nodeLogo}
          javaScript={javaScipt}
          ror= {rorLogo}
          reduxLogo={reduxLogo}
          mongoLogo={mongoLogo}
        />

        <CardProject
          image= { image }
          react= {reactLogo}
          scss={scssLogo}
          node={nodeLogo}
          javaScript={javaScipt}
          ror= {rorLogo}
          reduxLogo={reduxLogo}
          mongoLogo={mongoLogo}
        />
      </div>
    </div>
  )
}

export default Folio
