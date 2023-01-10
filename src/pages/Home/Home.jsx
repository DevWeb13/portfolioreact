import React, { lazy } from 'react';
import LogoLinks from '../../components/LogoLinks/LogoLinks';
import AProposText from '../../components/AProposText/AProposText';

const ImgBack = lazy(() => import('../../components/ImgBack/ImgBack'));
const AnimatedTextAndShadow = lazy(() =>
  import('../../components/AnimatedTextAndShadow/AnimatedTextAndShadow'),
);
const Boxes = lazy(() => import('../../components/Boxes/Boxes'));

function Home() {
  return (
    <div id="home">
      <section id="wrapperH1LogoLinks">
        <h1>
          <span className="titleAppears">LA REPONSE DEV</span>
          <span className="titleAppears">Création de site web</span>
        </h1>
        <LogoLinks />
      </section>
      <AnimatedTextAndShadow title="À-PROPOS" />
      <AProposText />
      <ImgBack />
      <AnimatedTextAndShadow title="COMPÉTENCES" />
      <Boxes />
    </div>
  );
}

export default Home;
