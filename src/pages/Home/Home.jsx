import React, { useEffect } from 'react';
import LogoLinks from '../../components/LogoLinks/LogoLinks';
import APropos from '../../components/APropos/APropos';

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
    </div>
  );
}

export default Home;
