import React from 'react';
import LogoLinks from '../../components/LogoLinks/LogoLinks';

function Home() {
  return (
    <div className="home">
      <div className="homeContainer">
        <h1>Developpeur Javascript/React</h1>
        <p>
          <span>&quot;La Réponse Dev&quot;</span> vous souhaite la bienvenue.
        </p>
        <p>Bonjour à tous !! 👋</p>
        <p>
          Je suis <span>Loic</span>.
          <br />
          <span>Développeur front-end spécialisé React</span>.
        </p>
        <p>
          Passionneé par le développement web, je développe des sites web en
          autodidacte depuis <span>2019</span>.
          <br />
          Je suis à votre disposition pour réaliser vos projets.
        </p>
        <p>
          <span>Je vous invite à découvrir mes réalisations</span> et à me
          contacter pour plus d&apos;informations.
        </p>
        <p>
          J&apos;ai recemment obtenu mon diplome certifiée RNCP <br />
          <span>Titre de niveau 6 (RNCP27099)</span>
          <br />
          <a href="https://openclassrooms.com/fr/paths/516-developpeur-dapplication-javascript-react">
            &quot;Développeur d&apos;application - JavaScript React&quot;
          </a>
        </p>
        <p>
          {' '}
          En <span>apprentissage permanent</span>, cette formation m&apos;a
          permis de
          <span> renforcer mes acquis</span> et d&apos;
          <span>acquérir les compétences</span> clés de la profession de
          développeur.
        </p>

        <LogoLinks />
      </div>
    </div>
  );
}

export default Home;
