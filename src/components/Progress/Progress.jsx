import React, { useState, useEffect, useRef } from 'react';
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
  const progressRef = useRef(null);

  /**
   * It takes a year as an argument and returns the number of years since that year
   * @param {number} year - The year
   * @returns {number} - The number of years between the current year and the year passed in as an argument.
   */
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

    observer.observe(progressRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    // Si la taille d'écran est inférieur à 768px, on affiche la barre de progression pleine
    if (window.innerWidth < 768) {
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
    }
    // Si la taille d'écran est supérieur à 768px, on affiche la barre de progression en fonction de l'intersection
    if (window.innerWidth >= 768 && isVisibled) {
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
      }, 20);
      return () => clearInterval(interval);
    }
    return () => {};
  }, [count, isVisibled]);

  return (
    <section className="progressContainer">
      {displayLogo(technology) === '' ? (
        <h2 className="techName">{technology.toUpperCase()}</h2>
      ) : (
        <img
          src={displayLogo(technology)}
          alt={technology}
          key={technology}
          className="techImg"
        />
      )}

      <div ref={progressRef} className="progress">
        {displayCount <= 1 ? (
          <div className="progress-done" style={style}>
            <p>{`${technology.toUpperCase()}: ${displayCount}`} an</p>
          </div>
        ) : (
          <div className="progress-done" style={style}>
            <p className="techName">
              {`${technology.toUpperCase()}: ${displayCount}`} ans
            </p>
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
