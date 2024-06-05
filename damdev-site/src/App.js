import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './css/pages/App.scss'
import Layout from './components/layout';
import Folio from './pages/folio'
import Home from './pages/home';
import Technologies from './pages/technologies'
import Apropos from './pages/aPropos';
import Contact from './pages/contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Layout />} >
          <Route path='/' element= {<Home />} />
          <Route path='technologies' element= {<Technologies />} />
          <Route path='folio' element= {<Folio />} />
          <Route path='apropos' element= {<Apropos />} />
          <Route path='Contact' element= {<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
