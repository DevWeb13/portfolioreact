import React, { useEffect } from 'react';
import LogoLinks from '../../components/LogoLinks/LogoLinks';
import APropos from '../../components/APropos/APropos';
import TypingEffect from '../../components/TypingEffect/TypingEffect';
import ProcessDev from '../../components/ProcessDev/ProcessDev';

function Home() {
  // Remettre scroll à 0 lors du rechargement de la page
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div id="home">
      <section id="wrapperH1LogoLinks">
        <h1>
          <span className="titleAppears">Giuliano Loic</span>
          <span className="titleAppears">Développeur web</span>
        </h1>
        <LogoLinks />
      </section>
      <APropos />
      <TypingEffect />
      <ProcessDev />
    </div>
  );
}

export default Home;
