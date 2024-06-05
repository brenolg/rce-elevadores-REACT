import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot, FaClock } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { MainContainer, NavContainer } from './ContactUsStyles';
import logo from '../../../assets/logo.png';

export default function ContactUs() {
  return (
    <MainContainer>

      <img src={logo} className="logo-contact-us" alt="logo" />

      <NavContainer>
        <div className="nav-item">
          <BsWhatsapp className="icon" />
          <p>(11) 9 9999-9999</p>
        </div>
        <div className="nav-item">
          <FaPhoneAlt />
          <p> (11) 9 9999-9999</p>
        </div>
        <div className="nav-item">
          <MdEmail />
          <p>comercial@rce.com.br</p>
        </div>
        <div className="nav-item">
          <FaLocationDot />
          <p>Avenida do Contorno, 2905 - 4º andar- Santa Efigênia</p>
        </div>

        <div className="nav-item">
          <FaClock />
          <p>Atendimento 24 horas </p>
        </div>
        <div className="nav-item">
          <FaInstagram className="icon" />
          <p>Instagram</p>
        </div>
      </NavContainer>

    </MainContainer>
  );
}
