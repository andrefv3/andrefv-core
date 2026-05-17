import React, { useRef, useEffect, useState } from 'react';
import { useScrollProgress } from '@shared/hooks';
import './progressScroll.css';

export const ProgressScroll = (): React.JSX.Element => {
  const pathRef = useRef<SVGPathElement | null>(null);
  const CIRCUMFERENCE = 307.87;
  const [isAppReady, setIsAppReady] = useState<boolean>(false);

  const { isActive, scrollToTop } = useScrollProgress({
    pathRef,
    circumference: CIRCUMFERENCE
  });

  useEffect(() => {
    const handleLoaderFinished = () => {
      requestAnimationFrame(() => {
        setIsAppReady(true);
      });
    };

    window.addEventListener('app-loader-finished', handleLoaderFinished);

    if (document.body.style.overflow !== 'hidden') {
      setIsAppReady(true);
    }

    return () => {
      window.removeEventListener('app-loader-finished', handleLoaderFinished);
    };
  }, []);

  // Combination of scroll logic from the hook with our architectural initialization safeguard
  const shouldBeVisible = isActive && isAppReady;

  return (
    <button 
      onClick={scrollToTop}
      className={`progress-wrap ${shouldBeVisible ? 'active-progress' : ''}`}
      aria-label="Scroll back to top"
    >
      <svg className="progress-circle" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path ref={pathRef} d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
      <div className="iconUpProgress" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </div>
    </button>
  );
};