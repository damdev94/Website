import React from 'react'
import { Routes, Route } from 'react-router-dom'
import '../css/pages/App.scss'
import Layout from '../components/layout';
import Folio from '../pages/folio'
import Home from '../pages/home';
import Technologies from '../pages/technologies'
import Apropos from '../pages/aPropos';
import Contact from '../pages/contact';

function AnimationRoutes() {

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 , transition: { duration: 1.2} },
    exit: { opacity: 0, transition: { duration: 1.2} }
  };

  return (
  <Routes>
    <Route path='/' element= {<Layout pageVariants={pageVariants}/>} >
      <Route index element= {<Home pageVariants={pageVariants}/>} />
      <Route path='technologies' element= {<Technologies pageVariants={pageVariants}/>} />
      <Route path='folio' element= {<Folio pageVariants={pageVariants}/>} />
      <Route path='apropos' element= {<Apropos pageVariants={pageVariants}/>} />
      <Route path='Contact' element= {<Contact pageVariants={pageVariants}/>} />
    </Route>
  </Routes>
  )
}

export default AnimationRoutes
