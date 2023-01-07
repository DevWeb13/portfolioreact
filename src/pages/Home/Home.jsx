import React, { useEffect } from 'react';
import LogoLinks from '../../components/LogoLinks/LogoLinks';
import APropos from '../../components/APropos/APropos';
import AProposText from '../../components/AProposText/AProposText';
import ProcessDev from '../../components/ProcessDev/ProcessDev';
import ImgBack from '../../components/ImgBack/ImgBack';

function Home() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  return (
    <div id="home">
      <section id="wrapperH1LogoLinks">
        <h1>
          <span className="titleAppears">LA REPONSE DEV</span>
          <span className="titleAppears">Création de site web</span>
        </h1>
        <LogoLinks />
      </section>
      <APropos />
      <AProposText />
      <ImgBack />
      <ProcessDev />
    </div>
  );
}

export default Home;
