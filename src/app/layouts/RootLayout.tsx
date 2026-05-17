import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Cursor, Header, Loader, ProgressScroll, Footer} from '@shared/ui'; 

export const RootLayout = (): React.JSX.Element => {
  const [showCursor, setShowCursor] = useState<boolean>(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 800px)');
    
    const handleScreenChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setShowCursor(e.matches);
    };

    handleScreenChange(mediaQuery);
    mediaQuery.addEventListener('change', handleScreenChange);

    return () => {
      mediaQuery.removeEventListener('change', handleScreenChange);
    };
  }, []);

  return (
    <div className="min-h-screen w-full relative bg-(--bg-app) text-(--text-app) transition-colors duration-300">
      {showCursor && <Cursor />}
      <Header />
      <Loader />
      <ProgressScroll />
      
      <main className="relative z-10">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};