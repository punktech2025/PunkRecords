module.exports = {
  darkMode: ["class"],
  content: [
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        '3xl': '1600px',
        '4xl': '1920px',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom Avocado colors
        "avocado-green": "#7CB342",
        "avocado-dark": "#0A0A0A",
        "avocado-gray": "#1A1A1A",
        "avocado-light-gray": "#2A2A2A",
        "avocado-text": "#E0E0E0",
        "avocado-blue": "#4FC3F7",
        "avocado-purple": "#AB47BC",
        "avocado-orange": "#FF9800",
        "mint": "#96CEB4",
        "light-green": "#8BC34A",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "linear-gradient(135deg, rgba(124, 179, 66, 0.1) 0%, rgba(10, 10, 10, 0.9) 100%)",
        "premium-gradient": "linear-gradient(135deg, #7CB342 0%, #4FC3F7 50%, #AB47BC 100%)",
        "glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
        "mesh-gradient":
          "radial-gradient(at 40% 20%, hsla(124, 45%, 55%, 1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(195, 85%, 65%, 1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(271, 45%, 55%, 1) 0px, transparent 50%)",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "gradient-x": "gradient-x 4s ease infinite",
        "gradient-xy": "gradient-xy 25s ease infinite",
        shimmer: "shimmer 3s linear infinite",
        glow: "glow 3s ease-in-out infinite alternate",
        "bounce-slow": "bounce 4s infinite",
        "spin-slow": "spin 4s linear infinite",
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "scale-in": "scaleIn 0.4s ease-out",
        "text-reveal": "textReveal 1s ease forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) translateZ(0)" },
          "50%": { transform: "translateY(-15px) translateZ(0)" },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "gradient-xy": {
          "0%, 100%": {
            "background-position": "0% 0%",
          },
          "25%": {
            "background-position": "100% 0%",
          },
          "50%": {
            "background-position": "100% 100%",
          },
          "75%": {
            "background-position": "0% 100%",
          },
        },
        shimmer: {
          "0%": {
            "background-position": "-200% 0",
          },
          "100%": {
            "background-position": "200% 0",
          },
        },
        glow: {
          "0%, 100%": {
            "box-shadow": "0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor",
          },
          "50%": {
            "box-shadow": "0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px) translateZ(0)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) translateZ(0)",
          },
        },
        slideUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px) translateZ(0)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) translateZ(0)",
          },
        },
        scaleIn: {
          "0%": {
            opacity: "0",
            transform: "scale(0.9) translateZ(0)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1) translateZ(0)",
          },
        },
        textReveal: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px) translateZ(0)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) translateZ(0)",
          },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // Custom plugin for performance optimizations
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.gpu-accelerated': {
          'transform': 'translateZ(0)',
          'backface-visibility': 'hidden',
          'perspective': '1000px',
        },
        '.will-change-transform': {
          'will-change': 'transform',
        },
        '.will-change-opacity': {
          'will-change': 'opacity',
        },
        '.contain-layout': {
          'contain': 'layout',
        },
        '.contain-paint': {
          'contain': 'paint',
        },
        '.contain-style': {
          'contain': 'style',
        },
        '.contain-all': {
          'contain': 'layout style paint',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
