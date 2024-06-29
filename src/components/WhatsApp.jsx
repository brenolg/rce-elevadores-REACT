import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import MainContainer from './WhatsAppStyles';

export default function WhatsApp() {
  return (
    <MainContainer   
      href="https://wa.me/5531988351557"
      rel="noopener noreferrer"
      target="_blank"
    >
      <BsWhatsapp className="icon" />
    </MainContainer>
  );
}
