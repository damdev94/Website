import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import '../css/components/cardProject.scss'

function CardProject({ image, react, scss, node, javaScript, ror, reduxLogo, mongoLogo, title, description, githubLink, link }) {
  const rorLogo = ror ? <img src={ror} alt="RoR Logo" className="ror-logo" width='60px' /> : null
  const redux = reduxLogo ? <img src={reduxLogo} alt="Redux Logo" className="redux-logo" width='30px' /> : null
  const mongo = mongoLogo ? <img src={mongoLogo} alt="MongoDB Logo" className="mongo-logo" width='80px' /> : null

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className='card-link'>
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
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className='githubLogo' />
            </a>
          </div>
        </div>
      </div>
    </a>
  )
}

export default CardProject
