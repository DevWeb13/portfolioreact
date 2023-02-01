import React, { lazy } from 'react';

const LogoLinks = lazy(() => import('../../components/LogoLinks/LogoLinks'));
const AProposText = lazy(() =>
  import('../../components/AProposText/AProposText'),
);
const ImgBack = lazy(() => import('../../components/ImgBack/ImgBack'));
const AnimatedTextAndShadow = lazy(() =>
  import('../../components/AnimatedTextAndShadow/AnimatedTextAndShadow'),
);
// const Boxes = lazy(() => import('../../components/Boxes/Boxes'));
const Bars = lazy(() => import('../../components/Bars/Bars'));

function Home() {
  return (
    <div id="home">
      <section id="wrapperH1LogoLinks">
        <h1>
          <span className="titleAppears">LA RÉPONSE DEV</span>
          <span className="titleAppears">Création de site web</span>
        </h1>
        <LogoLinks />
      </section>
      <AnimatedTextAndShadow title="À-PROPOS" />
      <AProposText />
      <ImgBack />
      <AnimatedTextAndShadow title="COMPÉTENCES" />
      <Bars />
      {/* <Boxes /> */}
    </div>
  );
}

export default Home;
