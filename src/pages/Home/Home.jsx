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
        <p>
          <span>Bonjour à tous !! 👋</span>
        </p>
        <p>
          Je m&apos;appelle <span>Loic</span>.
          <br />
          Je suis <span>développeur front-end spécialisé React</span>.
        </p>
        <p>
          Je développe des sites web depuis <span>2019</span> et je suis
          actuellement la formation
          <br />
          <a href="https://openclassrooms.com/fr/paths/516-developpeur-dapplication-javascript-react">
            &quot;Développeur d&apos;application - JavaScript React&quot;
          </a>
          .
        </p>
        <p>
          {' '}
          En <span>apprentissage permanent</span>, cette formation me permet de
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
