import './style.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { inject } from '@vercel/analytics'
import { Header } from './components/header.ts'
import { BackgroundHero } from './components/backgroundHero.ts'
import { Hero, setupMediaGallery } from './components/hero.ts'
import { Features } from './components/features.ts'
import { Screenshots, setupScreenshotLightbox } from './components/screenshots.ts'
import { Footer } from './components/footer.ts'
import { setupDownloadModal } from './components/downloadModal.ts'

inject({
  mode: import.meta.env.DEV ? 'development' : 'production',
})

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${Header()}
  ${BackgroundHero()}
  ${Hero()}
  ${Features()}
  ${Screenshots()}
  ${Footer()}
`

function setupSiteNav(): void {
  const toggle = document.getElementById('nav-menu-toggle')
  const panel = document.getElementById('site-nav-panel')
  const iconOpen = document.getElementById('nav-icon-open')
  const iconClose = document.getElementById('nav-icon-close')
  if (!toggle || !panel) return

  let menuOpen = false

  const syncIcons = () => {
    if (!iconOpen || !iconClose) return
    iconOpen.classList.toggle('hidden', menuOpen)
    iconClose.classList.toggle('hidden', !menuOpen)
  }

  const apply = () => {
    const desktop = window.matchMedia('(min-width: 768px)').matches
    if (desktop) {
      menuOpen = false
      panel.classList.add('hidden')
      toggle.setAttribute('aria-expanded', 'false')
      toggle.setAttribute('aria-label', 'Open menu')
      syncIcons()
      return
    }
    if (menuOpen) {
      panel.classList.remove('hidden')
      toggle.setAttribute('aria-expanded', 'true')
      toggle.setAttribute('aria-label', 'Close menu')
    } else {
      panel.classList.add('hidden')
      toggle.setAttribute('aria-expanded', 'false')
      toggle.setAttribute('aria-label', 'Open menu')
    }
    syncIcons()
  }

  toggle.addEventListener('click', () => {
    menuOpen = !menuOpen
    apply()
  })

  window.addEventListener('resize', () => apply())

  document.querySelectorAll<HTMLAnchorElement>('.mobile-nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      menuOpen = false
      apply()
    })
  })

  apply()
}

setupDownloadModal()
setupMediaGallery()
setupScreenshotLightbox()
setupSiteNav()

// Animate on scroll – smooth, run once per element
AOS.init({
  duration: 700,
  easing: 'ease-out-cubic',
  offset: 60,
  once: true,
  delay: 0
})
