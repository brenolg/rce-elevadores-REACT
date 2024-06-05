import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaClock, FaPhoneAlt } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { FixedContainer, StickyContainer } from './HeaderStyles';
import logo from '../assets/logo.png';

export default function Header() {
  return (
    <>
      <FixedContainer>
        <div className="header-nav-item">
          <MdEmail />
          <p>comercial@rce.com.br</p>
        </div>
        <p className="header-nav-item">
          <FaClock />
          <p>Atendimento 24 horas </p>
        </p>
        <p className="header-nav-item">
          <FaPhoneAlt />
          <p> (11) 9 9999-9999</p>
        </p>

        <div className="header-nav-item">
          Solicite um orçamento
          <IoIosArrowForward />
        </div>
      </FixedContainer>

      <StickyContainer>
        <img src={logo} alt="logo" className="logo-header" />
        <nav className="header-nav">
          <a href="#about">Quem somos</a>
          <a href="#contact">Serviços</a>
          <a href="#services">Contato</a>
        </nav>
      </StickyContainer>

    </>
  );
}
