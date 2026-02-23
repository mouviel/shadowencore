import './style.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { Header } from './components/header.ts'
import { BackgroundHero } from './components/backgroundHero.ts'
import { Hero, setupMediaGallery } from './components/hero.ts'
// import { Screenshots } from './components/screenshots.ts'
// import { Logos } from './components/logos.ts'
import { Footer } from './components/footer.ts'

// ${Logos()}
// ${Screenshots()}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${Header()}
  ${BackgroundHero()}
  ${Hero()}
  ${Footer()}
`

// Initialize media gallery after DOM is rendered
setupMediaGallery()

// Animate on scroll – smooth, run once per element
AOS.init({
  duration: 700,
  easing: 'ease-out-cubic',
  offset: 60,
  once: true,
  delay: 0
})
