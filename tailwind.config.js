/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Schema of ultra-dark background inspired by premium interfaces (Vercel/Linear)
        slate: {
          900: '#0b0f19', // Background base more deep for highlighting the Bento Grid
          950: '#070a12', // Contours and backgrounds of deep sections
        },
        // Accent colors precisely chosen for your portfolio
        brand: {
          violet: '#6366F1', // Indigo nítido para llamadas a la acción principales
          emerald: '#10B981', // Emerald para indicadores de estados activos/producción
          cyan: '#06B6D4',   // Cyan para métricas secundarias de sistemas
        },
      },
      fontFamily: {
        // We enlace the fonts from HTML/fonts.css cleanly into the class system
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
        epilogue: ['Epilogue', 'sans-serif'],
        grotesk: ['Grotesk-Medium', 'sans-serif'],
      },
      borderRadius: {
        // Rounded corners optimized for modern Bento Grid and Glassmorphism Cards
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
      backdropBlur: {
        // For glassmorphism interfaces that let elements behind be visible
        xs: '2px',
      },
    },
  },
  plugins: [],
}