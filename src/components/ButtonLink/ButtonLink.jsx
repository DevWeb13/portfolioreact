import React from 'react';
import propTypes from 'prop-types';

function ButtonLink({ href, text }) {
  return (
    <button type="button" className="buttonLink">
      <a className="link" href={href} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    </button>
  );
}

export default ButtonLink;

ButtonLink.propTypes = {
  href: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
};
