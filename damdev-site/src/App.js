import { BrowserRouter, useLocation } from 'react-router-dom';
import './css/pages/App.scss';
import AnimationRoutes from './components/animationRoutes';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <BrowserRouter>
      <AnimatedApp />
    </BrowserRouter>
  );
}

function AnimatedApp() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <AnimationRoutes location={location} />
    </AnimatePresence>
  );
}

export default App;
