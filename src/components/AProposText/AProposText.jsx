import React, { lazy, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import addIntersectionObserver from '../../services/addIntersectionObserver';

const ButtonLink = lazy(() => import('../ButtonLink/ButtonLink'));

function AProposText() {
  const containerRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    const paragraphs = container.querySelectorAll('.AProposeTextH3');
    let delay = 0;
    const interval = 500; // 1 seconde

    const observer = addIntersectionObserver('visible', { threshold: 0.5 });
    setTimeout(() => {
      paragraphs.forEach((paragraph) => {
        setTimeout(() => {
          observer.observe(paragraph);
        }, delay);
        delay += interval;
      });
    }, 3000);

    return () => {
      paragraphs.forEach((paragraph) => {
        observer.unobserve(paragraph);
      });
    };
  }, []);

  return (
    <section id="AProposTextWrapper" ref={containerRef}>
      <p className="AProposeTextH3">Bonjour et bienvenue sur mon site web!</p>
      <p className="AProposeTextH3">
        Je suis un développeur web passionné par les nouvelles technologies et
        j&apos;adore relever de nouveaux défis pour améliorer mes compétences.
      </p>
      <p className="AProposeTextH3">
        Si vous jetez un coup d&apos;œil à la page{' '}
        <NavLink to="/projets">Mes Projets</NavLink> , vous pourrez voir les
        différents projets sur lesquels j&apos;ai travaillé.
      </p>
      <p className="AProposeTextH3">
        Ma passion pour le développement web m&apos;a conduit à obtenir une
        certification RNCP de niveau 6 (bac +3/4) &apos;DÉVELOPPEUR
        D&apos;APPLICATION&apos;.
      </p>
      <p className="AProposeTextH3">
        <ButtonLink
          href="./titre-a-finalite-professionnelle_OpenClassrooms_Loic_Giuliano_20221221.pdf"
          text="Diplome"
          iconFontAwesome={faFilePdf}
        />
      </p>
      <p className="AProposeTextH3">
        J&apos;ai également acquis une solide expérience dans ce domaine à
        travers mes études et mes projets personnels.
      </p>

      <p className="AProposeTextH3">
        Vous cherchez un développeur web compétent et motivé pour réaliser vos
        projets de manière professionnelle et efficiente ?
      </p>
      <p className="AProposeTextH3">Je suis là pour vous !</p>
      <p className="AProposeTextH3">
        Mes compétences et mon expérience en développement d&apos;applications
        web sont à votre disposition pour vous aider à atteindre vos objectifs.
      </p>
      <p className="AProposeTextH3">
        N&apos;hésitez pas à me contacter pour plus d&apos;informations ou pour
        discuter de votre projet en détail. Je suis impatient de vous aider à
        réussir.
      </p>
    </section>
  );
}

export default AProposText;
