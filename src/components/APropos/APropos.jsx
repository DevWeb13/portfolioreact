import React from 'react';
import PropTypes from 'prop-types';

function APropos({ title }) {
  const titleArray = title.split('');

  return (
    <>
      <div className="text">
        {titleArray.map((letter, index) => (
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

export default APropos;

APropos.propTypes = {
  title: PropTypes.string.isRequired,
};
