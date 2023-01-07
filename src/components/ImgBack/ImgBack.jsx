import React, { useState, useEffect } from 'react';

function ImgBack() {
  const [scrollY, setScrollY] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [scrollYRef, setScrollYRef] = useState(0);
  useEffect(() => {
    const imgBackWrapper = document.querySelector('#imgBackWrapper');

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            console.log(entry);

            entry.target.classList.add('visibleImgBackWrapper');
            setIsIntersecting(true);

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
    if (imgBackWrapper) {
      observer.observe(imgBackWrapper);
    }
  }, []);

  useEffect(() => {
    if (!isIntersecting) return;
    const scrollPosition = window.pageYOffset;
    setScrollYRef(scrollPosition);
  }, [isIntersecting]);

  function parallax() {
    if (!isIntersecting) return;
    console.log(window);
    const scrollPosition = window.pageYOffset;
    console.log(Math.floor((scrollPosition - scrollYRef) / 2));
    if (Math.floor((scrollPosition - scrollYRef) / 10) <= 0) setScrollY(100);
    else if (Math.floor((scrollPosition - scrollYRef) / 10) >= 100)
      setScrollY(0);
    else {
      console.log('else');
      setScrollY(Math.floor((scrollPosition - scrollYRef) / 10));
    }

    console.log({ scrollPosition });
    const parallaxElm = document.querySelector('.parallax');
    console.log({ parallaxElm });

    if (parallaxElm) {
      parallaxElm.style.backgroundPosition = `50% ${scrollY}%`;
    }
  }

  window.addEventListener('scroll', parallax);

  return (
    <div id="imgBackWrapper">
      <div className="parallax" />
    </div>
  );
}

export default ImgBack;
