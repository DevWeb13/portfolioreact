import React from 'react';
import PropTypes from 'prop-types';

function AnimatedTextAndShadow({ title }) {
  const letterArray = title.split('');

  return (
    <>
      <div className="text">
        {letterArray.map((letter, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className="wrapper" key={letter + index + title}>
            <div id={index} className="letter">
              {letter}
            </div>
            <div className="shadow">{letter}</div>
          </div>
        ))}
      </div>

      <div className="overlay" />
    </>
  );
}

export default AnimatedTextAndShadow;

AnimatedTextAndShadow.propTypes = {
  title: PropTypes.string.isRequired,
};
