import React, { useEffect, useRef, useState } from 'react';
import '../css/pages/home.scss';

function Home() {
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const [isH1Complete, setIsH1Complete] = useState(false);

  function typeEffect(element, speed, callback) {
    const text = element.innerHTML;
    element.innerHTML = "";

    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        element.append(text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
        if (callback) callback();
      }
    }, speed);
  }

  useEffect(() => {
    const speed = 75;
    const h1 = h1Ref.current;

    typeEffect(h1, speed, () => {
      setIsH1Complete(true);
    });
  }, []);

  useEffect(() => {
    if (isH1Complete) {
      const p = pRef.current;
      p.style.display = "inline-block";
      typeEffect(p, 50);
    }
  }, [isH1Complete]);

  return (
    <div className='home-container'>
      <div className="text">
        <div id="table">
          <div id="centeralign">
            <h1 className='home-title' ref={h1Ref}>Bienvenue sur mon site !</h1>
            <p className='home-text' ref={pRef} style={{ display: 'none' }}>
              Vous êtes actuellement dans le menu principal.
              Pour en savoir plus sur moi, veuillez naviguer sur le menu de votre choix.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
