import htmlLogo from '../assets/html-5-svgrepo-com.svg';
import reactLogo from '../assets/react-svgrepo-com.svg';
import jsLogo from '../assets/js-svgrepo-com.svg';
import expressLogo from '../assets/express-svgrepo-com.svg';
import gulpLogo from '../assets/gulp-svgrepo-com.svg';
import sassLogo from '../assets/sass-svgrepo-com.svg';
import nodeLogo from '../assets/nodejs-svgrepo-com.svg';
import mongoLogo from '../assets/mongodb-svgrepo-com.svg';
import vercelLogo from '../assets/vercel-svgrepo-com.svg';
import webpackLogo from '../assets/webpack-svgrepo-com.svg';
import cssLogo from '../assets/css3-logo-svgrepo-com.svg';

/**
 * It takes a string as an argument and returns a logo image based on the string
 * @param {string} technology - the name of the technology you want to display
 * @returns {string} the logo of the technology that is passed in.
 */
export default function displayLogo(technology) {
  if (technology === 'html') {
    return htmlLogo;
  }
  if (technology === 'react') {
    return reactLogo;
  }
  if (technology === 'js') {
    return jsLogo;
  }
  if (technology === 'express') {
    return expressLogo;
  }
  if (technology === 'gulp') {
    return gulpLogo;
  }
  if (technology === 'sass') {
    return sassLogo;
  }
  if (technology === 'node') {
    return nodeLogo;
  }
  if (technology === 'mongo') {
    return mongoLogo;
  }
  if (technology === 'vercel') {
    return vercelLogo;
  }
  if (technology === 'webpack') {
    return webpackLogo;
  }
  if (technology === 'css') {
    return cssLogo;
  }
  return '';
}
