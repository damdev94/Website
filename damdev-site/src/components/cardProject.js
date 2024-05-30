import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import '../css/components/cardProject.scss'


function CardProject({image, react, scss, node, javaScript, ror, reduxLogo, mongoLogo}) {

  const rorLogo = ror ? <img src={ror} alt="RoR Logo" className="ror-logo" width='60px'/> : null
  const redux = reduxLogo ? <img src={reduxLogo} alt="RoR Logo" className="ror-logo" width='30px'/> : null
  const mongo = mongoLogo ? <img src={mongoLogo} alt="RoR Logo" className="ror-logo" width='80px'/> : null

  return (
    <div className='card-project'>
      <div className="project-image">
        <img src={image} alt='firstProject'></img>
      </div>
      <div className="project-infos">
        <div className="project-technologies">
          {react}
          {scss}
          {node}
          {javaScript}
          {mongo}
          {rorLogo}
          {redux}
        </div>
        <div className="project-description">
          <p>Application full stack React, nodeJs Application full stack React, nodeJs </p>
          <Link><FontAwesomeIcon icon={faGithub}  className='githubLogo'/></Link>
        </div>
      </div>
    </div>
  )
}

export default CardProject
