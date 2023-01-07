import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function AProposText() {
  useEffect(() => {
    const text = document.querySelector('.text');
    console.log(text);

    const paragraphs = document.querySelectorAll('h3');
    let delay = 0;
    const interval = 1000; // 1 seconde

    setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            } else {
              const element = entry.target;
              const content = element.innerHTML;
              const cacheKey = `cache-${element.id}`;
              caches.open('my-cache').then((cache) => {
                cache.put(cacheKey, new Response(content));
              });
            }
          }
        },
        { threshold: 1 },
      );

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
        Ma passion pour le développement web m&apos;a conduit à obtenir un
        diplôme RNCP de niveau 6 de &apos;développeur d&apos;applications&apos;.
        J&apos;ai également acquis une solide expérience dans ce domaine à
        travers mes études et mes projets personnels.
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
