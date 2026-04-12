const shots = [
  { src: '/assets/images/gameplay1.jpg', alt: 'Razor Shard — combat and exploration' },
  { src: '/assets/images/gameplay2.jpg', alt: 'Razor Shard — platforming in Talpa' },
  { src: '/assets/images/gameplay3.jpg', alt: 'Razor Shard — Guardian abilities' },
  { src: '/assets/images/gameplay4.jpg', alt: 'Razor Shard — corrupted environments' },
]

export function Screenshots(): string {
  const grid = shots
    .map(
      (s) => `
    <a href="${s.src}" class="screenshot-lightbox group block rounded-xl overflow-hidden border-2 border-transparent hover:border-cyan-400 dark:hover:border-cyan-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-cyan-500/20" data-fullsrc="${s.src}" data-alt="${s.alt.replace(/"/g, '&quot;')}">
      <img class="w-full h-48 sm:h-56 object-cover group-hover:scale-[1.03] transition-transform duration-500" src="${s.src}" alt="${s.alt}" loading="lazy" width="800" height="450">
    </a>`
    )
    .join('')

  return `
    <section id="screenshots" class="max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 mx-auto w-full py-14 sm:py-16 scroll-mt-28" data-aos="fade-up">
      <div class="mb-8 sm:mb-10">
        <p class="text-sm font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">Gallery</p>
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">Screenshots</h2>
        <div class="w-12 sm:w-16 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 dark:from-cyan-400 dark:to-teal-400"></div>
        <p class="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl text-sm sm:text-base">In-game captures from Talpa—click an image to view it full size.</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        ${grid}
      </div>
    </section>
  `
}

export function setupScreenshotLightbox(): void {
  const overlay = document.createElement('div')
  overlay.id = 'screenshot-lightbox-overlay'
  overlay.className =
    'fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-200'
  overlay.setAttribute('role', 'dialog')
  overlay.setAttribute('aria-modal', 'true')
  overlay.setAttribute('aria-label', 'Screenshot enlarged')
  overlay.innerHTML = `
    <button type="button" class="absolute inset-0 w-full h-full cursor-default" aria-label="Close gallery" data-lightbox-backdrop></button>
    <figure class="relative max-w-5xl max-h-[90vh] z-[1] scale-95 transition-transform duration-200">
      <button type="button" class="absolute -top-2 -right-2 sm:top-0 sm:right-0 translate-x-0 sm:-translate-y-full sm:mb-2 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/20" aria-label="Close" data-lightbox-close>
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
      <img class="max-h-[85vh] w-auto max-w-full rounded-lg shadow-2xl object-contain mx-auto" alt="" data-lightbox-img />
    </figure>
  `
  document.body.appendChild(overlay)

  const imgEl = overlay.querySelector<HTMLImageElement>('[data-lightbox-img]')!
  const close = () => {
    overlay.classList.add('opacity-0', 'pointer-events-none')
    overlay.classList.remove('opacity-100')
    const fig = overlay.querySelector('figure')
    fig?.classList.add('scale-95')
    fig?.classList.remove('scale-100')
    document.body.classList.remove('overflow-hidden')
  }

  const open = (src: string, alt: string) => {
    imgEl.src = src
    imgEl.alt = alt
    overlay.classList.remove('opacity-0', 'pointer-events-none')
    overlay.classList.add('opacity-100')
    const fig = overlay.querySelector('figure')
    fig?.classList.remove('scale-95')
    fig?.classList.add('scale-100')
    document.body.classList.add('overflow-hidden')
  }

  overlay.querySelector('[data-lightbox-backdrop]')?.addEventListener('click', close)
  overlay.querySelector('[data-lightbox-close]')?.addEventListener('click', (e) => {
    e.stopPropagation()
    close()
  })
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('opacity-100')) close()
  })

  document.querySelectorAll<HTMLElement>('.screenshot-lightbox').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault()
      const src = el.getAttribute('data-fullsrc') || el.getAttribute('href') || ''
      const alt = el.getAttribute('data-alt') || ''
      if (src) open(src, alt)
    })
  })
}
