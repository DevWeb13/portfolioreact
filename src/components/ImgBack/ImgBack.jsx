import React, { useEffect, useRef } from 'react';
import addIntersectionObserver from '../../services/addIntersectionObserver';
import parallax from '../../services/parallax';

function ImgBack() {
  const monElementRef = useRef(null);

  if (monElementRef.current) {
    window.addEventListener('scroll', () =>
      parallax(monElementRef, '.parallax'),
    );
  }

  useEffect(() => {
    setTimeout(() => {
      const imgBackWrapper = document.querySelector('#imgBackWrapper');
      const observer = addIntersectionObserver('visibleImgBackWrapper');
      if (imgBackWrapper) observer.observe(imgBackWrapper);
    }, 3000);
  }, []);

  return (
    <div id="imgBackWrapper" ref={monElementRef}>
      <div className="parallax" />
    </div>
  );
}

export default ImgBack;
