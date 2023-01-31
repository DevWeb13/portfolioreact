import React, { useState, useEffect } from 'react';
import propType from 'prop-types';
import displayLogo from '../../services/displayLogo';

/**
 * It's a function component that display a progress bar.
 * @param {object} props - The props of the component
 * @param {string} props.technology - The technology name
 * @param {number} props.max - The max value of the progress bar
 * @param {number} props.date - The year when the technology was learned
 * @returns {JSX.Element} - The progress bar
 */
function Progress({ technology, max, date }) {
  const [style, setStyle] = useState({});
  const [count, setCount] = useState(0);
  const [displayCount, setDisplayCount] = useState(0);
  const [isVisibled, setIsVisibled] = useState(false);

  function findHowManyYears(year) {
    const newDate = new Date();
    const currentYear = newDate.getFullYear();
    const years = currentYear - year;
    return years;
  }

  const howManyYears = findHowManyYears(date);
  const howManyYearsPerCent = (howManyYears * 100) / max;

  useEffect(() => {
    // Verifier si l'element est visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisibled(true);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    observer.observe(
      document.querySelector(`#progress${technology}`) ||
        document.createElement('div'),
    );
  }, []);

  useEffect(() => {
    if (isVisibled) {
      const interval = setInterval(() => {
        if (count < howManyYearsPerCent) {
          const newProgress = {
            opacity: 1,
            width: `${count + 1}%`,
          };
          setStyle(newProgress);
          setCount(count + 1);
          if (displayCount !== Math.ceil((count * max) / 100)) {
            setDisplayCount(Math.ceil((count * max) / 100));
          }
        }
      }, 50);
      return () => clearInterval(interval);
    }
    return () => {};
  }, [count, isVisibled]);

  return (
    <section className="progressContainer">
      <img src={displayLogo(technology)} alt={technology} key={technology} />
      <div id={`progress${technology}`} className="progress">
        {displayCount <= 1 ? (
          <div className="progress-done" style={style}>
            {displayCount}an
          </div>
        ) : (
          <div className="progress-done" style={style}>
            {displayCount}ans
          </div>
        )}
      </div>
    </section>
  );
}
export default Progress;

Progress.propTypes = {
  technology: propType.string.isRequired,
  max: propType.number.isRequired,
  date: propType.number.isRequired,
};
