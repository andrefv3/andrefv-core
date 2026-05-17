import { useEffect, useState, RefObject } from 'react';

interface UseScrollProgressProps {
  pathRef: RefObject<SVGPathElement | null>;
  circumference: number;
  offsetVisibility?: number;
}

export const useScrollProgress = ({
  pathRef,
  circumference,
  offsetVisibility = 150
}: UseScrollProgressProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    // Inicialización del trazo síncrono con el ciclo de vida del DOM
    path.style.strokeDasharray = `${circumference} ${circumference}`;
    path.style.strokeDashoffset = `${circumference}`;

    const handleScroll = (): void => {
      const currentScroll = window.scrollY;
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Control declarativo del estado de visibilidad
      setIsActive(currentScroll > offsetVisibility);

      // Mutación matemática directa sobre la referencia (Evita re-renders innecesarios)
      if (scrollableHeight > 0) {
        const strokeOffset = circumference - (currentScroll * circumference) / scrollableHeight;
        path.style.strokeDashoffset = `${strokeOffset}`;
      }
    };

    // Registro del listener pasivo para optimizar el rendimiento del hilo principal
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Sincronización inicial

    // Cleanup incondicional del listener global
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathRef, circumference, offsetVisibility]);

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return { isActive, scrollToTop };
};