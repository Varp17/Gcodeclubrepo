/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          dark: '#1E40AF',
        },
        secondary: {
          DEFAULT: '#9333EA',
          dark: '#7C3AED',
        },
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6',
        background: {
          DEFAULT: '#F9FAFB',
          dark: '#0F172A',
        },
        card: {
          DEFAULT: '#FFFFFF',
          dark: '#1E293B',
        },
        text: {
          DEFAULT: '#111827',
          dark: '#E5E7EB',
        },
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        code: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'heading-1': ['clamp(2.5rem, 5vw, 3.5rem)', { lineHeight: '1.2' }],
        'heading-2': ['clamp(2rem, 4vw, 2.5rem)', { lineHeight: '1.3' }],
        'heading-3': ['clamp(1.5rem, 3vw, 1.75rem)', { lineHeight: '1.4' }],
        body: ['clamp(1rem, 2vw, 1.125rem)', { lineHeight: '1.6' }],
        caption: ['clamp(0.875rem, 1.5vw, 0.95rem)', { lineHeight: '1.5' }],
        code: ['0.95rem', { lineHeight: '1.5' }],
      },
      spacing: {
        section: 'clamp(4rem, 10vw, 6rem)',
        container: 'clamp(1rem, 5vw, 2rem)',
        xs: '0.5rem',
        sm: '1rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem',
      },
      borderRadius: {
        card: '1rem',
        button: '0.5rem',
        badge: '0.25rem',
        '2xl': '2rem',
      },
      boxShadow: {
        card: '0 4px 12px rgba(0, 0, 0, 0.1)',
        cardDark: '0 4px 12px rgba(0, 0, 0, 0.3)',
        hover: '0 8px 24px rgba(0, 0, 0, 0.15)',
        glow: '0 0 12px rgba(37, 99, 235, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-hover': 'scaleHover 0.3s ease-out',
        'bounce': 'bounce 0.3s ease-in-out',
        'shimmer': 'shimmer 1.5s infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleHover: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 12px rgba(37, 99, 235, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(37, 99, 235, 0.5)' },
        },
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(to bottom, rgba(37, 99, 235, 0.1), transparent)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}