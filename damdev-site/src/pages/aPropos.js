import React from 'react'
import '../css/pages/apropos.scss'

function Apropos() {
  return (
    <div className='apropos-container'>
      <div className="presentation">
        <h2 className='apropos-title'>À propos</h2>
        <p>Tout savoir sur mon parcours.</p>
      </div>
      <div className="apropos-content">
        <h2>Parcours</h2>

        <h3>Apprentissage autodidacte</h3>

        <p>Depuis septembre 2023, j'apprends le développement web en autodidacte. Cet apprentissage a éveillé en moi une véritable passion pour ce domaine, avec un profond intérêt pour le langage JavaScript. Les plateformes d'apprentissage telles que H2prog, OpenClassroom, Grafikart, et Udemy m'ont permis d'acquérir des compétences solides que j'ai pu mettre en pratique dans divers projets personnels.</p>

        <h3>Formation</h3>
        <p>J’ai récemment terminé ma formation de développeur web Fullstack à l’école "Le Wagon" sur le campus de Montréal. Cette formation a consolidé et approfondi les compétences acquises de manière autodidacte et m'a permis de découvrir plus en profondeur le back-end, une partie qui m’a également beaucoup plu. J'ai réalisé des applications de A à Z, travaillé en équipe, et appris le langage Ruby. L'entraide, la communication, et l'autonomie sont des compétences et des valeurs que j'ai mises en pratique durant ces projets.</p>

        <h3>Objectifs</h3>
        <p>Passionné par le développement web, je cherche constamment à repousser mes limites, à créer de nouvelles applications, à apprendre les meilleures pratiques, et surtout à produire du code de qualité. La prochaine étape idéale pour moi serait d’approfondir mes compétences aux côtés de personnes expérimentées et d'acquérir un maximum de nouvelles connaissances.</p>

        <h3>Fullstack</h3>
        <p>Étant familier avec JavaScript, j'ai appris à mettre en place un back-end avec ce même langage. J'ai réalisé une application en utilisant le stack MERN (MongoDB, Express, React, Node.js) avec une architecture MVC pour tester et appliquer ces nouvelles technologies. La réalisation de projets avec le framework Ruby on Rails m’a également beaucoup plu, car elle m’a permis de découvrir une approche différente dans la création de projets. Pour la partie front-end, j’éprouve un grand intérêt pour la bibliothèque React, avec laquelle j’ai réalisé plusieurs projets.</p>
      </div>
    </div>
  )
}

export default Apropos
