import React from 'react';
import { HomeMain } from './HomeStyles';
import About from './About/About';
import Differential from './Differential/Differential';
import Maintenance from './Maintenance/Maintenance';
import CallToAction from './CallToAction.js/CallToAction';
import ContactUs from './ContactUs/ContactUs';

export default function Home() {
  return (
    <HomeMain>
      <CallToAction />
      <About />
      <Maintenance />
      <Differential />
      <ContactUs />
    </HomeMain>
  );
}
