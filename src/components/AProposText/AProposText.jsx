import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import addIntersectionObserver from '../../services/addIntersectionObserver';

function AProposText() {
  useEffect(() => {
    const paragraphs = document.querySelectorAll('h3');
    let delay = 0;
    const interval = 500; // 1 seconde

    setTimeout(() => {
      const observer = addIntersectionObserver('visible');

      paragraphs.forEach((paragraph) => {
        setTimeout(() => {
          observer.observe(paragraph);
        }, delay);
        delay += interval;
      });
    }, 3000);
  }, []);

  return (
    <section id="AProposTextWrapper">
      <h3>Bonjour et bienvenue sur mon site web!</h3>
      <h3>
        Je suis un développeur web passionné par les nouvelles technologies et
        j&apos;adore relever de nouveaux défis pour améliorer mes compétences.
      </h3>
      <h3>
        Si vous jetez un coup d&apos;œil à la page{' '}
        <NavLink
          to="/projets"
          className={(nav) => (nav.isActive ? 'navActive' : 'nav')}
        >
          &apos;Mes Projets&apos;
        </NavLink>{' '}
        , vous pourrez voir les différents projets sur lesquels j&apos;ai
        travaillé.
      </h3>
      <h3>
        Ma passion pour le développement web m&apos;a conduit à obtenir une
        certification RNCP de niveau 6 (bac +3/4) &apos;DÉVELOPPEUR
        D&apos;APPLICATION&apos;. J&apos;ai également acquis une solide
        expérience dans ce domaine à travers mes études et mes projets
        personnels.
      </h3>

      <h3>
        Vous cherchez un développeur web compétent et motivé pour réaliser vos
        projets de manière professionnelle et efficiente ?
      </h3>
      <h3>Je suis là pour vous !</h3>
      <h3>
        Mes compétences et mon expérience en développement d&apos;applications
        web sont à votre disposition pour vous aider à atteindre vos objectifs.
      </h3>
      <h3>
        N&apos;hésitez pas à me contacter pour plus d&apos;informations ou pour
        discuter de votre projet en détail. Je suis impatient de vous aider à
        réussir.
      </h3>
    </section>
  );
}

export default AProposText;
