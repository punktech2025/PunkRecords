import { LazyMotion, domAnimation, m } from "framer-motion"
import { ReactNode } from "react"

// Optimized animation variants
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 }
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 }
}

export const slideIn = {
  initial: { x: -20, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 20, opacity: 0 },
  transition: { duration: 0.3 }
}

interface AnimationProviderProps {
  children: ReactNode
}

export const AnimationProvider = ({ children }: AnimationProviderProps) => {
  return (
    <LazyMotion strict features={domAnimation}>
      {children}
    </LazyMotion>
  )
}

// Export optimized motion components
export const Motion = {
  div: m.div,
  section: m.section,
  article: m.article,
  header: m.header,
  footer: m.footer,
  nav: m.nav,
  main: m.main,
  aside: m.aside,
  button: m.button,
  a: m.a,
  p: m.p,
  span: m.span,
  h1: m.h1,
  h2: m.h2,
  h3: m.h3,
  h4: m.h4,
  h5: m.h5,
  h6: m.h6,
  ul: m.ul,
  li: m.li,
  img: m.img,
  svg: m.svg,
  form: m.form,
  input: m.input,
  textarea: m.textarea,
  label: m.label
}