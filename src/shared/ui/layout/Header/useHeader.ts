import { useState, useEffect } from "react";
import { useTheme } from '@shared/context/';

export const useHeader = () => {
  const themeContext = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleTheme = (): void => {
    themeContext.toggleTheme();
  };

  const toggleMenu = (): void => {
    setIsMenuOpen((prev) => !prev);
  };

  const scrollToSection = (id: number, event: React.MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault();
    
    const section = document.querySelector(`[data-scroll-index="${id}"]`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false); // Collapse mobile menu after navigation
    }
  };

  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    isDark: themeContext.theme === 'dark',
    isMenuOpen,
    toggleTheme,
    toggleMenu,
    scrollToSection,
  };
};