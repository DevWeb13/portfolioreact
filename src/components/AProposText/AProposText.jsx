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
              console.log(entry);

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
      <h3>
        Bonjour, je suis un développeur web diplômé en développement
        d&apos;application Javascript/React RNCP de niveau 6.
      </h3>
      <h3>
        J&apos;ai acquis une solide expérience dans le développement
        d&apos;applications web grâce à mes études et à mes projets personnels.
      </h3>
      <h3>
        Je suis passionné par les nouvelles technologies et j&apos;aime relever
        de nouveaux défis pour améliorer mes compétences. La page{' '}
        <NavLink
          to="/projets"
          className={(nav) => (nav.isActive ? 'navActive' : 'nav')}
        >
          &apos;Mes Projets&apos;
        </NavLink>{' '}
        montre les différents projets sur lesquels j&apos;ai travaillé, ainsi
        que mes compétences en développement web.
      </h3>
      <h3>
        Je suis motivé et prêt à mettre mes compétences à votre service pour
        réussir vos projets. Si vous êtes intéressé par mes services,
        n&apos;hésitez pas à me contacter pour plus d&apos;informations.
      </h3>
    </section>
  );
}

export default AProposText;
