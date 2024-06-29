import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot, FaClock } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { MainContainer, NavContainer } from './ContactUsStyles';
import logo from '../../../assets/logo.svg';

export default function ContactUs() {
  return (
    <MainContainer id="contact">
      <div className="contact-bg" />

      <img src={logo} className="logo-contact-us" alt="logo" />

      <NavContainer>
        <a
          className="nav-item"
          href="https://wa.me/5531988351557"
          rel="noopener noreferrer"
          target="_blank"
        >
          <BsWhatsapp className="icon" />
          <p>(31)988351557</p>
        </a>
        <a
          className="nav-item"
          href="https://wa.me/5531988351557"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaPhoneAlt />
          <p> (31)3271-7462  / (31)3224-2807</p>
        </a>
        <a
          className="nav-item"
          href="mailto:rceelevadores2000@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <MdEmail />
          <p>rceelevadores2000@gmail.com</p>
        </a>
        <a
          className="nav-item"
          href="https://www.google.com/maps/place/RCE+Elevadores/@-19.9233145,-43.9403997,17z/data=!3m1!4b1!4m6!3m5!1s0xa699e4697d06a1:0x79c903ae82dd15fb!8m2!3d-19.9233145!4d-43.9378248!16s%2Fg%2F1td21h8v?entry=ttu"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaLocationDot />
          <p>Rua dos Goitacazes, 71 - Centro, Belo Horizonte</p>
        </a>

        <a
          className="nav-item"
          href="https://wa.me/5531988351557"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaClock />
          <p>Atendimento 24 horas </p>
        </a>
        <a
          className="nav-item"
          href="https://www.instagram.com/rceelevadores/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaInstagram className="icon" />
          <p>Instagram</p>
        </a>
      </NavContainer>

    </MainContainer>
  );
}
