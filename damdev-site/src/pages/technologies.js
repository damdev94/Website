import React from 'react'
import '../css/pages/technologies.scss'
import ruby from '../images/icons8-ruby-48.png'
import redux from '../images/redux.svg'
import js from '../images/logo-javascript.svg'
import react from '../images/react-2.svg'
import mongo from '../images/mongodb-icon-1.svg'
import express from '../images/icons8-express-js-40.png'
import node from '../images/nodejs-1.svg'
import rails from '../images/rails-1.svg'
import scss from '../images/sass-1.svg'
import git from '../images/git-icon-logo-svgrepo-com.svg'
import github from '../images/github-icon-2.svg'
import trello from '../images/trello.svg'
import vscode from '../images/visual-studio-code-1.svg'
import figma from '../images/figma-icon.svg'
import postman from '../images/postman.svg'
import heroku from '../images/heroku-4.svg'
import bootstrap from '../images/bootstrap-svgrepo-com.svg'
import insomnia from '../images/insomnia-svgrepo-com.svg'


function Technoligogies() {

  const rubyLogo = <img src={ruby} alt='ruby' width='60px' />
  const reduxLogo = <img src={redux} alt='redux' width='50px' />
  const jsLogo = <img src={js} alt='redux' width='50px' />
  const reactLogo = <img src={react} alt='redux' width='50px' />
  const mongoLogo = <img src={mongo} alt='redux' width='50px' />
  const expressLogo = <img src={express} alt='redux' width='50px' className='expressLogo' style={{ paddingLeft: '10px' }}/>
  const nodeLogo = <img src={node} alt='redux' width='70px' />
  const railsLogo = <img src={rails} alt='redux' width='70px' style={{ marginBottom: '20px' }} />
  const scssLogo = <img src={scss} alt='redux' width='50px' style={{ marginTop: '15px' }}/>
  const gitLogo = <img src={git} alt='redux' width='50px' />
  const githubLogo = <img src={github} alt='redux' width='50px' />
  const trelloLogo = <img src={trello} alt='redux' width='50px' />
  const vscodeLogo= <img src={vscode} alt='redux' width='50px' />
  const figmaLogo = <img src={figma} alt='redux' width='40px' />
  const postmanLogo = <img src={postman} alt='redux' width='50px' />
  const herokuLogo = <img src={heroku} alt='redux' width='50px' />
  const bootstrapLogo = <img src={bootstrap} alt='redux' width='50px' />
  const insomniaLogo = <img src={insomnia} alt='redux' width='50px' />


  return (
    <div className='technologies-container'>
      <div className="technologies-presentation">
        <h2 className='technologies-title'>Technologies</h2>
        <p>Voici ce que j'ai pu utiliser dans mes projets jusqu'à présent.</p>
      </div>

      <div className="technologies-cadre box">
        <div className="content-cadre">
          <div className="technologies">
            <h3>Technologies</h3>
            <div className="technologies-display technologies-display-techno">
              <div className="logo-display">
                {jsLogo}
                <p>javaScipt</p>
              </div>
              <div className="logo-display">
                {rubyLogo}
                <p>Ruby</p>
              </div>
              <div className="logo-display">
                {reactLogo}
                <p>React</p>
              </div>
              <div className="logo-display">
                {railsLogo}
                <p>Ruby on Rails</p>
              </div>
              <div className="logo-display">
                {nodeLogo}
                <p>NodeJs</p>
              </div>
              <div className="logo-display">
                {reduxLogo}
                <p>Redux</p>
              </div>
              <div className="logo-display">
                {mongoLogo}
                <p>MogoDb</p>
              </div>
              <div className="logo-display">
                {expressLogo }
                <p>ExpressJs</p>
              </div>
              <div className="logo-display">
                {scssLogo}
                <p>Scss</p>
              </div>
            </div>
          </div>
          <div className="outils">
            <h3>Outils</h3>
            <div className="technologies-display technologies-display-outils">
              <div className="logo-display">
                {gitLogo}
                <p>git</p>
              </div>
              <div className="logo-display">
                {githubLogo}
                <p>github</p>
              </div>
              <div className="logo-display">
                {trelloLogo}
                <p>Trello</p>
              </div>
              <div className="logo-display">
                {vscodeLogo}
                <p>VSCode</p>
              </div>
              <div className="logo-display">
                {figmaLogo}
                <p>Figma</p>
              </div>
              <div className="logo-display">
                {postmanLogo}
                <p>Postman</p>
              </div>
              <div className="logo-display">
                {herokuLogo}
                <p>Heroku</p>
              </div>
              <div className="logo-display">
                {bootstrapLogo}
                <p>Bootstrap</p>
              </div>
              <div className="logo-display">
                {insomniaLogo}
                <p>Insomnia</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Technoligogies
