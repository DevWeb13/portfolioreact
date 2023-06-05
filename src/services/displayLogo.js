import html from '../assets/html-5-svgrepo-com.svg';
import react from '../assets/react-svgrepo-com.svg';
import js from '../assets/js-svgrepo-com.svg';
import express from '../assets/express-svgrepo-com.svg';
import gulp from '../assets/gulp-svgrepo-com.svg';
import sass from '../assets/sass-svgrepo-com.svg';
import node from '../assets/nodejs-svgrepo-com.svg';
import mongo from '../assets/mongodb-svgrepo-com.svg';
import vercel from '../assets/vercel-svgrepo-com.svg';
import webpack from '../assets/webpack-svgrepo-com.svg';
import css from '../assets/css3-logo-svgrepo-com.svg';
import recharts from '../assets/recharts.png';
import bootstrap from '../assets/bootstrap-svgrepo-com.svg';
import gitHub from '../assets/github.svg';
import tailwind from '../assets/tailwindcss-svgrepo-com.svg';
import sanity from '../assets/sanity-svgrepo-com.svg';
import netlify from '../assets/netlify-svgrepo-com.svg';

const images = {
  html,
  react,
  js,
  express,
  gulp,
  sass,
  node,
  mongo,
  vercel,
  webpack,
  css,
  recharts,
  bootstrap,
  gitHub,
  tailwind,
  sanity,
  netlify,
};

/**
 * It takes a string as an argument and returns a logo image based on the string
 * @param {string} technology - the name of the technology you want to display
 * @returns {string} the logo of the technology that is passed in.
 */
export default function displayLogo(technology) {
  if (!images[technology]) return '';
  return images[technology];
}
