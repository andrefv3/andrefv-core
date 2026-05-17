import React from 'react';
import { BannerMain } from './components/BannerMain/BannerMain';
// import { About } from './components/About/About';
// import { Portfolio } from './components/Portfolio/Portfolio';
// import { Contact } from './components/Contact/Contact';

export const HomePage = (): React.JSX.Element => {
  return (
    <>
      <BannerMain />

      {/* 🧩 Próximas secciones organizadas bajo la misma arquitectura:
      
      <About />
      
      <Portfolio />
      
      <Contact /> 
      
      */}
    </>
  );
};