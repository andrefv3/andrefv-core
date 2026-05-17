import React from 'react';
import { useTheme } from '@shared/context';
import { IoArrowDown } from "react-icons/io5";
import { Guides } from '@shared/ui';
import Avatar from '@images/content/memoji-hero.webp';
import { useHeader } from "@shared/ui";
import './banner.css';

export const BannerMain: React.FC = () => {
  const { theme } = useTheme();
  const { scrollToSection } = useHeader();
    
  return (
    <section 
    id="MainBanner" 
    className={`banner-layout-wrapper w-full ${theme === 'dark' ? 'dark' : ''}`}
    data-scroll-index="1"
    >
    <Guides variant='grid' />
      <div className="containBanner">
        {/* Contenido Izquierdo: Textos y Acciones */}
        <div className="animate__contain">
          <h1 className="banner-title">
            Hi there <span className="wave-emoji">👋🏻</span>
            <br /> 
            I'm <span className="banner-name-stroke">Andrés Dev</span> 
          </h1>

          <div className="text-container">
            <p>
              Building Resilient Systems & Scalable Architectures. Focused on Clean Code, Performance, and Engineering Excellence.
            </p>
          </div>

          <div className="contain-btn-slide">
            {/* Accesibilidad Staff: Botón puro con onClick semántico, sin etiquetas <a> muertas */}
            <button 
              onClick={(e) => scrollToSection(2, e as unknown as React.MouseEvent<HTMLAnchorElement>)}
              className="btnSlideAbout"
              aria-label="Learn more about my experience"
            >
              <span>Learn more</span> 
              <IoArrowDown />
            </button>
          </div>
        </div>
        
        {/* Contenido Derecho: Ilustración 3D Optimizada */}
        <div className="image__banner">
          <picture>
            <source srcSet={Avatar} type="image/webp" />
            <img 
              src={Avatar} 
              className="avatar-banner" 
              alt="Andrés Vega - Representación en avatar 3D sonriendo y saludando" 
              width={450} 
              height={446}
              loading="eager" /* Carga inmediata: Es el LCP de la página */
              fetchPriority="high"
              draggable="false"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};