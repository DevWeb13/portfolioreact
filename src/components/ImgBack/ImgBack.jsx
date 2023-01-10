import React, { useEffect, useRef } from 'react';
import addIntersectionObserver from '../../services/addIntersectionObserver';
import parallax from '../../services/parallax';

function ImgBack() {
  const monElementRef = useRef(null);

  useEffect(() => {
    if (monElementRef.current) {
      window.addEventListener('scroll', () =>
        parallax(monElementRef, '.parallax'),
      );
    }
  }, [monElementRef]);

  useEffect(() => {
    const imgBackWrapper = document.querySelector('#imgBackWrapper');
    const observer = addIntersectionObserver('visibleImgBackWrapper');
    if (imgBackWrapper) observer.observe(imgBackWrapper);
  }, []);

  return (
    <div id="imgBackWrapper" ref={monElementRef}>
      <div className="parallax" />
    </div>
  );
}

export default ImgBack;
