import React, { useState, useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import {
  MainContainer, FirstContainer, SecondContainer, ThirdContainer,
} from './CallToActionStyles';
import theme from '../../../styles/Theme';

export default function CallToAction() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const carouselRef = useRef(null);

  const handleClickGoAhead = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += window.innerWidth;
      setCurrentCardIndex((prevIndex) => Math.min(prevIndex + 1, 2));
    }
  };

  const handleClickGoBack = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= window.innerWidth;
      setCurrentCardIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    }
  };

  function getCircleColor(section) {
    return section === currentCardIndex ? theme.colors.DarkBlue : theme.colors.LightBlue;
  }
  return (
    <MainContainer>

      <div id="wrapper">
        <div id="carousel" ref={carouselRef}>
          <FirstContainer>
            <p>Assistência técnica e</p>
            <h1>MANUTENÇÃO DE ELEVADORES</h1>

            <button type="button" className="button">Saiba mais</button>
          </FirstContainer>
          <SecondContainer><h1>SEGURANÇA & TRANQUILIDADE</h1></SecondContainer>
          <ThirdContainer><h1>EFICIÊNCIA & COMPROMETIMENTO</h1></ThirdContainer>
        </div>
      </div>

      <button onClick={handleClickGoBack} type="button" className="return-button" aria-label="voltar">
        <IoIosArrowBack className="icon back" />

      </button>
      <button onClick={handleClickGoAhead} type="button" className="forward-button" aria-label="Go Forward">
        <IoIosArrowForward className="icon proximo" />
      </button>
      <div className="counter">
        <div className="counter-circle one" style={{ backgroundColor: getCircleColor(0) }} />
        <div className="counter-circle two" style={{ backgroundColor: getCircleColor(1) }} />
        <div className="counter-circle three" style={{ backgroundColor: getCircleColor(2) }} />
      </div>

    </MainContainer>
  );
}
