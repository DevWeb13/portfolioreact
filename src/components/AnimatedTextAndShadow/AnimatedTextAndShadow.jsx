import React from 'react';
import PropTypes from 'prop-types';

function AnimatedTextAndShadow({ title }) {
  const letterObjectArray = title.split('').map((letter) => ({
    letter,
    id: Math.random(),
  }));
  return (
    <>
      <div className="text">
        {letterObjectArray.map((letter) => (
          <div className="wrapper" key={letter.letter + letter.id + title}>
            <div className="letter">{letter.letter}</div>
            <div className="shadow">{letter.letter}</div>
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
