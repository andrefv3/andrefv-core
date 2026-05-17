// src/shared/ui/Loader/Loader.tsx
import React, { useEffect, useState, useRef } from 'react';
import './loader.css';

export const Loader = (): React.JSX.Element => {
  const [isExiting, setIsExiting] = useState<boolean>(false);
  const [isDestroyed, setIsDestroyed] = useState<boolean>(false);
  const pathRef = useRef<SVGPathElement | null>(null);

  const PATH_CURVE = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
  const PATH_FLAT = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const textSequence = setTimeout(() => {
      setIsExiting(true);
      if (pathRef.current) {
        pathRef.current.style.transition = "d 0.6s cubic-bezier(0.76, 0, 0.24, 1)";
        pathRef.current.setAttribute('d', PATH_CURVE);
      }
    }, 1200);

    const fluidSequence = setTimeout(() => {
      if (pathRef.current) pathRef.current.setAttribute('d', PATH_FLAT);
    }, 1700);

    const destructionSequence = setTimeout(() => {
      document.body.style.overflow = '';
      setIsDestroyed(true);
    }, 2500);

    return () => {
      clearTimeout(textSequence);
      clearTimeout(fluidSequence);
      clearTimeout(destructionSequence);
      document.body.style.overflow = '';
    };
  }, []);

  if (isDestroyed) return <></>;

  return (
    <div className={`loader-container ${isExiting ? 'exit-active' : ''}`} role="alert" aria-busy="true">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path ref={pathRef} d="M0,1005S175,995,500,995s500,5,500,5V0H0Z" />
      </svg>
      <div className="loader-content">
        <h2 className="load-text font-grotesk">
          {"LOADING".split("").map((char, index) => (
            <span key={index} style={{ '--letter-idx': index } as React.CSSProperties}>
              {char}
            </span>
          ))}
        </h2>
      </div>
    </div>
  );
};