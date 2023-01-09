import React, { useEffect } from 'react';
import jsLogo from '../../assets/js-svgrepo-com.svg';
import reactLogo from '../../assets/react-svgrepo-com.svg';
import sassLogo from '../../assets/sass-svgrepo-com.svg';
import mongoLogo from '../../assets/mongodb-svgrepo-com.svg';
import nodeLogo from '../../assets/nodejs-svgrepo-com.svg';
import expressLogo from '../../assets/express-svgrepo-com.svg';
import vercelLogo from '../../assets/vercel-svgrepo-com.svg';
import htmlLogo from '../../assets/html-5-svgrepo-com.svg';

function Boxes() {
  useEffect(() => {
    const boxes = document.querySelectorAll('.box');
    let current = 1;
    setInterval(() => {
      boxes.forEach((box) => {
        if (current > boxes.length) current = 1;

        if (Number(box.classList[1].split('-')[1]) === current) {
          box.classList.add('active');
        } else {
          box.classList.remove('active');
        }
      });
      current++;
    }, 5000);
  }, []);

  return (
    <div className="boxesContainer center">
      <div className="boxes center">
        <div className="box box-1 active ">
          <div className="top-side">
            <img src={jsLogo} alt="jsLogo" />
          </div>
          <div className="bottom-side">
            <img src={jsLogo} alt="jsLogo" />
          </div>
          <div className="front-side">
            <img src={jsLogo} alt="jsLogo" />
          </div>
          <div className="back-side">
            <img src={jsLogo} alt="jsLogo" />
          </div>
          <div className="right-side">
            <img src={jsLogo} alt="jsLogo" />
          </div>
          <div className="left-side">
            <img src={jsLogo} alt="jsLogo" />
          </div>
        </div>
        <div className="box box-2 ">
          <div className="top-side">
            <img src={reactLogo} alt="reactLogo" />
          </div>
          <div className="bottom-side">
            <img src={reactLogo} alt="reactLogo" />
          </div>
          <div className="front-side">
            <img src={reactLogo} alt="reactLogo" />
          </div>
          <div className="back-side">
            <img src={reactLogo} alt="reactLogo" />
          </div>
          <div className="right-side">
            <img src={reactLogo} alt="reactLogo" />
          </div>
          <div className="left-side">
            <img src={reactLogo} alt="reactLogo" />
          </div>
        </div>

        <div className="box box-3 ">
          <div className="top-side">
            <img src={mongoLogo} alt="mongoLogo" />
          </div>
          <div className="bottom-side">
            <img src={mongoLogo} alt="mongoLogo" />
          </div>
          <div className="front-side">
            <img src={mongoLogo} alt="mongoLogo" />
          </div>
          <div className="back-side">
            <img src={mongoLogo} alt="mongoLogo" />
          </div>
          <div className="right-side">
            <img src={mongoLogo} alt="mongoLogo" />
          </div>
          <div className="left-side">
            <img src={mongoLogo} alt="mongoLogo" />
          </div>
        </div>
        <div className="box box-4 ">
          <div className="top-side">
            <img src={nodeLogo} alt="nodeLogo" />
          </div>
          <div className="bottom-side">
            <img src={nodeLogo} alt="nodeLogo" />
          </div>
          <div className="front-side">
            <img src={nodeLogo} alt="nodeLogo" />
          </div>
          <div className="back-side">
            <img src={nodeLogo} alt="nodeLogo" />
          </div>
          <div className="right-side">
            <img src={nodeLogo} alt="nodeLogo" />
          </div>
          <div className="left-side">
            <img src={nodeLogo} alt="nodeLogo" />
          </div>
        </div>
        <div className="box box-5 ">
          <div className="top-side">
            <img src={expressLogo} alt="expressLogo" />
          </div>
          <div className="bottom-side">
            <img src={expressLogo} alt="expressLogo" />
          </div>
          <div className="front-side">
            <img src={expressLogo} alt="expressLogo" />
          </div>
          <div className="back-side">
            <img src={expressLogo} alt="expressLogo" />
          </div>
          <div className="right-side">
            <img src={expressLogo} alt="expressLogo" />
          </div>
          <div className="left-side">
            <img src={expressLogo} alt="expressLogo" />
          </div>
        </div>
        <div className="box box-6 ">
          <div className="top-side">
            <img src={sassLogo} alt="sassLogo" />
          </div>
          <div className="bottom-side">
            <img src={sassLogo} alt="sassLogo" />
          </div>
          <div className="front-side">
            <img src={sassLogo} alt="sassLogo" />
          </div>
          <div className="back-side">
            <img src={sassLogo} alt="sassLogo" />
          </div>
          <div className="right-side">
            <img src={sassLogo} alt="sassLogo" />
          </div>
          <div className="left-side">
            <img src={sassLogo} alt="sassLogo" />
          </div>
        </div>
        <div className="box box-7 ">
          <div className="top-side">
            <img src={vercelLogo} alt="vercelLogo" />
          </div>
          <div className="bottom-side">
            <img src={vercelLogo} alt="vercelLogo" />
          </div>
          <div className="front-side">
            <img src={vercelLogo} alt="vercelLogo" />
          </div>
          <div className="back-side">
            <img src={vercelLogo} alt="vercelLogo" />
          </div>
          <div className="right-side">
            <img src={vercelLogo} alt="vercelLogo" />
          </div>
          <div className="left-side">
            <img src={vercelLogo} alt="vercelLogo" />
          </div>
        </div>

        <div className="box box-8 ">
          <div className="top-side">
            <img src={htmlLogo} alt="vercelLogo" />
          </div>
          <div className="bottom-side">
            <img src={htmlLogo} alt="vercelLogo" />
          </div>
          <div className="front-side">
            <img src={htmlLogo} alt="vercelLogo" />
          </div>
          <div className="back-side">
            <img src={htmlLogo} alt="vercelLogo" />
          </div>
          <div className="right-side">
            <img src={htmlLogo} alt="vercelLogo" />
          </div>
          <div className="left-side">
            <img src={htmlLogo} alt="vercelLogo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Boxes;
