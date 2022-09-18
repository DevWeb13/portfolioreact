import React, { useState, useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

import Loading from '../../components/Loading/Loading';
import { getZeldaGamesList } from '../../services/dataManager';

function Zelda() {
  const [zelda, setZelda] = useState([
    {
      description: '',
      developer: '',
      id: null,
      name: '',
      publisher: '',
      released_date: '',
    },
  ]);

  const [loader, setLoader] = useState(true);

  const scrollRef = useRef(null);

  function sortList(data) {
    const sortedList = data.sort((a, b) => {
      return (
        Number(new Date(a.released_date)) - Number(new Date(b.released_date))
      );
    });
    return sortedList;
  }

  async function getData() {
    const data = await getZeldaGamesList();
    const sortedList = sortList(data.data);
    console.log(sortedList);
    setZelda(sortedList);
    setLoader(false);
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (!loader) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        tablet: { smooth: true },
        smartphone: { smooth: true },
      });
    }
  }, [loader]);

  return loader ? (
    <Loading />
  ) : (
    <div className="zeldaContainer" ref={scrollRef}>
      <div className="zelda">
        <section
          className="zeldaPagePresentation"
          data-scroll-section
          data-scroll-container
        >
          <p
            data-scroll
            data-scroll-speed="-80"
            data-scroll-position="top"
            data-scroll-direction="horizontal"
            className="scroll-trigger"
          >
            Made with
          </p>
          <a href="https://www.npmjs.com/package/locomotive-scroll">
            <h1>Locomotive Scroll</h1>
            <div className="locomotiveLogo" />
          </a>
          <p>Scroll Down</p>
          <div className="arc" />
        </section>
        {zelda.map((game, index) => {
          return (
            <section className="zeldaGame" key={game.id}>
              <h2 className="zeldaGameName">{game.name}</h2>
              <p className="zeldaGameDescription">{game.description}</p>
              <p className="zeldaGameDevelopper">{game.developer}</p>
              <p className="zeldaGamePublisher">{game.publisher}</p>
              <p className="zeldaGameReleaseDate">{game.released_date}</p>
              <div className={`zeldaImg${index}`} />
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default Zelda;
