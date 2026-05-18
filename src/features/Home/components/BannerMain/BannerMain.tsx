import React from 'react';
import { IoArrowDown } from "react-icons/io5";
import { Guides } from '@shared/ui';
import Avatar from '@images/content/memoji-hero.webp';
import { useHeader } from "@shared/ui";
import './banner.css';

export const BannerMain: React.FC = () => {
  const { scrollToSection } = useHeader();
    
  return (
    <section 
    id="MainBanner" 
    className="banner-layout-wrapper w-full dark"
    data-scroll-index="1"
    >
    <Guides variant='grid' />
      <div className="containBanner">
        {/* Left Content: Text and Actions */}
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
        
        {/* Right Content: Optimized 3D Illustration */}
        <div className="image__banner">
          <picture>
            <source srcSet={Avatar} type="image/webp" />
            <img 
              src={Avatar} 
              className="avatar-banner" 
              alt="Andrés Vega - Representación en avatar 3D sonriendo y saludando" 
              width={450} 
              height={446}
              loading="eager"
              fetchPriority="high"
              draggable="false"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};