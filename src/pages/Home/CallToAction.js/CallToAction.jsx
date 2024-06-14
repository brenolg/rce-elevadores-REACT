/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-scroll';
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

  const defaultScrollProps = {
    spy: true,
    smooth: 'easeInOutQuart',
    duration: 900,
    offset: -114,
    delay: 300,
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
            <Link to="services" className="link-scroll" {...defaultScrollProps}>
              <button type="button" className="call-to-action-btn">SAIBA MAIS</button>
            </Link>
            <div className="bg-call-to-action" />
          </FirstContainer>

          <SecondContainer>
            <p>Profissionalismo e</p>
            <h1>SEGURANÇA & TRANQUILIDADE</h1>
            <Link to="about" className="link-scroll" {...defaultScrollProps}>
              <button type="button" className="call-to-action-btn">SAIBA MAIS</button>
            </Link>
            <div className="bg-call-to-action" />
          </SecondContainer>

          <ThirdContainer>
            <p>Conhecimento técnico e</p>
            <h1>EFICIÊNCIA & COMPROMETIMENTO</h1>
            <Link to="diferenciais" className="link-scroll" {...defaultScrollProps}>
              <button type="button" className="call-to-action-btn">SAIBA MAIS</button>
            </Link>
            <div className="bg-call-to-action" />
          </ThirdContainer>
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
