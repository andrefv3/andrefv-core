export const NAV_ROUTES = {
  HOME: { id: 1, path: '#home', label: 'Home' },
  ABOUT: { id: 2, path: '#about', label: 'About' },
  PORTFOLIO: { id: 3, path: '#portfolio', label: 'Portfolio' },
  SKILLS: { id: 4, path: '#skills', label: 'Skills' },
  CONTACT: { id: 5, path: '#contact', label: 'Contact' },
} as const;

// TypeScript infiere automáticamente los tipos de las rutas a partir del objeto de configuración, garantizando consistencia y evitando errores manuales al definir tipos separados.
export type NavRoute = typeof NAV_ROUTES[keyof typeof NAV_ROUTES];

// Export the iterable array by mapping the configuration object
export const NAV_ITEMS: readonly NavRoute[] = Object.values(NAV_ROUTES);