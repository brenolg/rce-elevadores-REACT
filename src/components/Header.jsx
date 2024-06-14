/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaClock, FaPhoneAlt } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { Link } from 'react-scroll';
import { FixedContainer, StickyContainer } from './HeaderStyles';
import logo from '../assets/logo.svg';

export default function Header() {
  const defaultScrollProps = {
    spy: true,
    smooth: 'easeInOutQuart',
    duration: 900,
    offset: -114,
    delay: 300,
  };

  return (
    <>
      <FixedContainer>
        <a
          className="header-nav-item"
          href="mailto:rceelevadores2000@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <MdEmail />
          <p>rceelevadores2000@gmail.com</p>
        </a>
        <a
          href="https://wa.me/5531988351557"
          rel="noopener noreferrer"
          target="_blank"
          className="header-nav-item"
        >
          <FaClock />
          <p>Atendimento 24 horas </p>
        </a>
        <a
          className="header-nav-item"
          href="https://wa.me/5531988351557"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaPhoneAlt />
          <p> (31)3271-7462  / (31)3224-2807</p>
        </a>

        <a
          href="https://wa.me/5531988351557"
          rel="noopener noreferrer"
          target="_blank"
          className="header-nav-item"
        >
          <BsWhatsapp className="icon" />
          Solicite um orçamento
        </a>
      </FixedContainer>

      <StickyContainer>
        <img src={logo} alt="logo" className="logo-header" />
        <nav className="header-nav">
          <Link to="about" className="link-scroll" {...defaultScrollProps}>
            Quem somos
          </Link>
          <Link to="services" {...defaultScrollProps} className="link-scroll">
            Serviços
          </Link>
          <Link to="contact" {...defaultScrollProps} className="link-scroll">
            Contato
          </Link>
        </nav>
      </StickyContainer>

    </>
  );
}
