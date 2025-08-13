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
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "gradient-x": "gradient-x 3s ease infinite",
        "gradient-xy": "gradient-xy 20s ease infinite",
        shimmer: "shimmer 2s linear infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "bounce-slow": "bounce 3s infinite",
        "spin-slow": "spin 3s linear infinite",
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        "text-reveal": "textReveal 0.8s ease forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
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
            "background-size": "400% 400%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(124, 179, 66, 0.3)" },
          "100%": { boxShadow: "0 0 30px rgba(124, 179, 66, 0.6)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        textReveal: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "glow-sm": "0 0 10px rgba(124, 179, 66, 0.3)",
        "glow-md": "0 0 20px rgba(124, 179, 66, 0.4)",
        "glow-lg": "0 0 30px rgba(124, 179, 66, 0.5)",
        premium: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)",
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      },
      transitionTimingFunction: {
        "bounce-in": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
