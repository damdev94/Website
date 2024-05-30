import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import '../css/components/cardProject.scss'


function CardProject({image, react, scss, node, javaScript, ror, reduxLogo, mongoLogo, title, description, githubLink, link}) {

  const rorLogo = ror ? <img src={ror} alt="RoR Logo" className="ror-logo" width='60px'/> : null
  const redux = reduxLogo ? <img src={reduxLogo} alt="RoR Logo" className="ror-logo" width='30px'/> : null
  const mongo = mongoLogo ? <img src={mongoLogo} alt="RoR Logo" className="ror-logo" width='80px'/> : null

  return (
    <Link className='Link-card-project' to={link}>
      <div className='card-project'>
        <div className="card-title">
          {title}
        </div>
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
            <p>{description}</p>
            <Link to={githubLink}><FontAwesomeIcon icon={faGithub}  className='githubLogo'/></Link>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CardProject
