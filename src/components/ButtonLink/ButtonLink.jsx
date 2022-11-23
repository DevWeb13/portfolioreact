import React from 'react';
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * It returns a button that, when clicked, opens a new tab with the given href
 * @param {object} props - props
 * @param {string} props.href - Link to the page
 * @param {string} props.text - Text to display
 * @param {{ icon: string[], iconName: import('@fortawesome/fontawesome-svg-core').IconName, prefix: import('@fortawesome/fontawesome-svg-core').IconPrefix }} props.iconFontAwesome - Icon to display
 * @returns A button element with a className of buttonLink or buttonLinkWithIcon, depending on whether
 * or not the iconFontAwesome prop is passed in.
 */
function ButtonLink({ href, text, iconFontAwesome }) {
  return (
    <button
      type="button"
      className={
        iconFontAwesome ? 'buttonLink buttonLinkWithIcon' : 'buttonLink'
      }
      onClick={() => window.open(href, '_blank')}
    >
      {text}
      {iconFontAwesome && (
        <FontAwesomeIcon className="icon" icon={iconFontAwesome} />
      )}
    </button>
  );
}

export default ButtonLink;

ButtonLink.propTypes = {
  href: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
  iconFontAwesome: propTypes.shape({
    iconName: propTypes.string.isRequired,
    prefix: propTypes.string.isRequired,
  }),
};

ButtonLink.defaultProps = {
  iconFontAwesome: null,
};
