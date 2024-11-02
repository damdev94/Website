import React from 'react'
import '../css/pages/apropos.scss'
import { motion } from 'framer-motion';

function Apropos({pageVariants}) {

  const slideVariants = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 1 } },
    exit: { x: -100, opacity: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} className='apropos-container'>
      <div className="presentation">
        <h2 className='apropos-title'>À propos</h2>
        <p>Tout savoir sur mon parcours.</p>
      </div>
      <motion.div  initial="initial" animate="animate" exit="exit" variants={slideVariants} className="apropos-content">
        <h2>Parcours</h2>

        <h3>Apprentissage autodidacte</h3>

        <p>Depuis septembre 2023, j'apprends le développement web en autodidacte. Cet apprentissage a éveillé en moi une véritable passion pour ce domaine. Les plateformes d'apprentissage telles que H2prog, OpenClassroom, Grafikart, et Udemy m'ont permis d'acquérir des compétences solides que j'ai pu mettre en pratique dans divers projets personnels.</p>

        <h3>Formation</h3>
        <p>Suite à ma formation de développeur web à l'école "Le Wagon", qui a consolidé et approfondi mes compétences autodidactes, j'ai été admis à la Wild Code School pour une formation avancée de 15 mois en alternance dans le développement web/mobile. Attaché aux valeurs du travail en équipe, de l'entraide, de la communication et de l'autonomie, je recherche activement une alternance en contrat d'apprentissage avec un rythme de 3 semaines en entreprise et 1 semaine à l'école, dans le but de valider mon année et de passer le titre “Concepteur Développeur d’Applications” inscrit au RNCP (équivalent bac + 3/4). Cette année de formation est pour moi une étape clé pour débuter ma carrière professionnelle dans ce domaine passionnant.</p>

        <h3>Objectifs</h3>
        <p>Passionné par le développement web, je cherche constamment à repousser mes limites, à créer de nouvelles applications, à apprendre les meilleures pratiques, et surtout à produire du code de qualité. La prochaine étape idéale pour moi serait d’approfondir mes compétences aux côtés de personnes expérimentées et d'acquérir un maximum de nouvelles connaissances.</p>

        <h3>Fullstack</h3>
        <p>Étant familier avec JavaScript, j'ai appris à mettre en place un back-end avec ce même langage. J'ai réalisé une application en utilisant le stack MERN (MongoDB, Express, React, Node.js) avec une architecture MVC pour tester et appliquer ces nouvelles technologies. La réalisation de projets avec le framework Ruby on Rails m’a également beaucoup plu, car elle m’a permis de découvrir une approche différente dans la création de projets. Pour la partie front-end, j’éprouve un grand intérêt pour la bibliothèque React, avec laquelle j’ai réalisé plusieurs projets. Je suis actuellement en train d'apprendre le langage Java et d'explorer le framework Spring, avec lequel je développe une application dédiée au sport. Ce langage me passionne particulièrement et m'offre de nombreuses possibilités.</p>
      </motion.div>
    </motion.div>
  )
}

export default Apropos
