export type SitePage = 'home' | 'faq' | 'changelog' | 'privacy'

export function getSitePage(): SitePage {
  const d = document.documentElement.getAttribute('data-page')
  if (d === 'faq' || d === 'changelog' || d === 'privacy') return d
  return 'home'
}

/** Root-relative URLs (Vercel + Vite dev). */
export const routes = {
  home: '/',
  faq: '/faq.html',
  changelog: '/changelog.html',
  privacy: '/privacy.html',
  about: '/#about',
  features: '/#features',
  requirements: '/#requirements',
  screenshots: '/#screenshots',
  download: '/#download',
} as const

export function desktopNavClass(active: boolean): string {
  const base =
    'nav-link px-2 lg:px-3 py-2 rounded-lg text-xs lg:text-sm font-medium transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-cyan-500'
  if (active) {
    return `${base} text-cyan-800 dark:text-cyan-200 bg-white dark:bg-slate-700/90 ring-1 ring-cyan-500/40 shadow-sm`
  }
  return `${base} text-gray-700 dark:text-gray-200 hover:bg-white/60 dark:hover:bg-slate-700/50`
}
