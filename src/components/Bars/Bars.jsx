import React, { useEffect, lazy } from 'react';
import addIntersectionObserver from '../../services/addIntersectionObserver';

const Progress = lazy(() => import('../Progress/Progress'));

function Bars() {
  function findMaxValue() {
    const date = new Date();
    const currentYear = date.getFullYear();
    const maxValue = currentYear - 2019;
    return maxValue;
  }

  const progressMaxValue = findMaxValue();

  useEffect(() => {
    const bars = document.querySelectorAll('.progress');

    setTimeout(() => {
      const observer = addIntersectionObserver('progressVisible', {
        threshold: 0.5,
      });

      bars.forEach((bar) => {
        observer.observe(bar);
      });
    }, 1000);
  }, []);

  return (
    <section id="bars">
      <Progress technology="html" max={progressMaxValue} date={2019} />
      <Progress technology="css" max={progressMaxValue} date={2019} />
      <Progress technology="sass" max={progressMaxValue} date={2020} />
      <Progress technology="js" max={progressMaxValue} date={2020} />
      <Progress technology="react" max={progressMaxValue} date={2021} />
      <Progress technology="node" max={progressMaxValue} date={2021} />
      <Progress technology="express" max={progressMaxValue} date={2021} />
      <Progress technology="mongo" max={progressMaxValue} date={2021} />
      <Progress technology="vercel" max={progressMaxValue} date={2021} />
    </section>
  );
}

export default Bars;
