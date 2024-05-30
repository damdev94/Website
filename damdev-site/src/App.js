import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './css/pages/App.scss'
import Layout from './components/layout';
import Folio from './pages/folio'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Layout />} >
          <Route path='folio' element= {<Folio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
