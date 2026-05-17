import React from 'react';
import './guides.css';

interface GuidesProps {
  variant?: 'columns' | 'blueprint' | 'grid';
}

export const Guides = ({ variant = 'grid' }: GuidesProps): React.JSX.Element => {
  return (
    <div className={`grid-guides-system variant-${variant}`} aria-hidden="true">
      {/* 📐 Líneas horizontales del 404 fuera del wrapper para lograr w-full real */}
      {variant === 'blueprint' && (
        <div className="blueprint-horizontal-lines">
          <div className="horizontal-stroke stroke-top" />
          <div className="horizontal-stroke stroke-middle" />
          <div className="horizontal-stroke stroke-bottom" />
        </div>
      )}

      <div className="guides-wrapper-context">
        {/* Renderizamos los ejes verticales físicos solo si no estamos en modo grid total */}
        {variant !== 'grid' && (
          <>
            <div className="guide-axis line-1" />
            <div className="guide-axis line-2" />
            <div className="guide-axis line-3" />
            <div className="guide-axis line-4" />
            <div className="guide-axis line-5" />
          </>
        )}
        
        {/* Capa matemática nativa para el Hero Grid */}
        {variant === 'grid' && <div className="math-grid-overlay" />}
      </div>
    </div>
  );
};