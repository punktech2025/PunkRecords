import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { imagetools } from "vite-imagetools"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), imagetools()],
  publicDir: 'public',
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom", "framer-motion"],
  },
  build: {
    target: 'es2020',
    minify: 'terser',
    cssMinify: true,
    reportCompressedSize: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
          animation: ["framer-motion"],
          ui: [
            "@radix-ui/react-accordion",
            "@radix-ui/react-alert-dialog",
            "@radix-ui/react-avatar",
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-label",
            "@radix-ui/react-select",
            "@radix-ui/react-slot",
            "@radix-ui/react-tabs",
            "@radix-ui/react-toast"
          ]
        },
        inlineDynamicImports: false,
        compact: true,
        preserveModules: false
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.trace'],
      },
    },
  },
  server: {
    hmr: { overlay: false },
    watch: {
      usePolling: false,
    },
  },
})
