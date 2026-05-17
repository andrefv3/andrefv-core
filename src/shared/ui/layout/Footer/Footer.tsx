import React from 'react';
import { SOCIAL_LINKS } from './footer.config';
import './footer.css';

export const Footer = (): React.JSX.Element => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        {/* Left Side: Credits minimal */}
        <div className="footer-credits">
          <p className="footer-copyright">
            &copy; {currentYear} <span className="brand-name">Andrés</span>
          </p>
          <span className="footer-tagline">Built with Clean Architecture</span>
        </div>

        {/* Right Side: Social Media Navigation with Icons + Tooltips */}
        <nav className="footer-social-nav" aria-label="Social Media">
          <ul className="footer-social-list">
            {SOCIAL_LINKS.map((link) => {
              const IconComponent = link.Icon;
              return (
                <li key={link.id} className="footer-social-item">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-icon-link link-${link.id}`}
                    aria-label={link.ariaLabel}
                  >
                    {/* Renderizado dinámico del icono */}
                    <IconComponent size={20} />
                    
                    {/* Tooltip flotante con CSS Puro */}
                    <span className="icon-tooltip" aria-hidden="true">
                      {link.id === 'instagram' ? 'Instagram' : link.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

      </div>
    </footer>
  );
};