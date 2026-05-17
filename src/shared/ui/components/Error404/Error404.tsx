import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@shared/ui/'; 
import { Guides } from '@shared/ui/';
import { useTheme } from '@shared/context';
import Memoji404 from '@images/content/memoji-404.webp';
import './error404.css';

export const Error404 = (): React.JSX.Element => {
  const { theme } = useTheme(); 
  const isDark = theme === 'dark';

  return (
    <div className={`error-page-layout ${isDark ? 'theme-dark' : 'theme-light'}`}>
      <Header />
      <Guides variant="blueprint" />

      {/* 3. Container for the Error Message */}
     
        <div className="textNotFound">
          
          <div className="image__notFound">
            <img 
              src={Memoji404} 
              alt="Ilustración Error 404 Página no encontrada" 
              loading="eager"
            />
          </div>

          <h2 className="error-heading">Page not found!</h2>
          
          <p className="error-subtext">
            Sorry, but the page you were looking for could not be found.
          </p>

          <Link to="/" className="return-link-wrapper">
            <button 
              className={`btn-return-main ${isDark ? 'btn-dark' : 'btn-light'}`}
              aria-label="Regresar a la página principal"
            >
              Go to the main page
            </button>
          </Link>

        </div>
    
    </div>
  );
};