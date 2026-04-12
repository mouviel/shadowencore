/** Single source: download URL and archive password */
export const GAME_DOWNLOAD = {
  url: 'https://github.com/mouviel/shadowencore/releases/download/shadowencore/RazorShard.Setup.2.1.1.rar',
  fileName: 'RazorShard.Setup.2.1.1.rar',
  password: '97A8-55E5-C6B8-959E',
} as const

const TRANSITION_MS = 320

/**
 * Starts the file download without opening a new tab.
 * Uses a temporary in-page link; the browser stays on this site while the download runs
 * (Host should respond with Content-Disposition: attachment.)
 */
function executeDownload(): void {
  const link = document.createElement('a')
  link.href = GAME_DOWNLOAD.url
  link.download = GAME_DOWNLOAD.fileName
  link.rel = 'noopener noreferrer'
  link.referrerPolicy = 'no-referrer'
  link.style.display = 'none'
  document.body.appendChild(link)
  link.click()
  link.remove()
}

function getRoot(): HTMLElement | null {
  return document.getElementById('download-modal-root')
}

function getPanel(root: HTMLElement): HTMLElement | null {
  return root.querySelector('.download-modal-panel')
}

const PANEL_OPEN = ['opacity-100', 'translate-y-0', 'scale-100'] as const
const PANEL_CLOSED = ['opacity-0', 'translate-y-8', 'scale-[0.98]'] as const

export function closeDownloadModal(): void {
  const root = getRoot()
  if (!root) return

  const panel = getPanel(root)
  panel?.classList.remove(...PANEL_OPEN)
  panel?.classList.add(...PANEL_CLOSED)

  root.classList.remove('opacity-100', 'pointer-events-auto')
  root.classList.add('opacity-0', 'pointer-events-none', 'invisible')
  root.setAttribute('aria-hidden', 'true')

  window.setTimeout(() => {
    document.body.classList.remove('overflow-hidden')
  }, TRANSITION_MS)
}

export function openDownloadModal(): void {
  if (!getRoot()) setupDownloadModal()
  const root = getRoot()
  if (!root) return

  const alreadyOpen =
    root.classList.contains('opacity-100') && root.classList.contains('pointer-events-auto')

  if (alreadyOpen) {
    root.setAttribute('aria-hidden', 'false')
    document.body.classList.add('overflow-hidden')
    return
  }

  const panel = getPanel(root)
  if (panel) {
    panel.classList.remove(...PANEL_OPEN)
    panel.classList.add(...PANEL_CLOSED)
  }

  root.setAttribute('aria-hidden', 'false')
  document.body.classList.add('overflow-hidden')

  root.classList.remove('opacity-0', 'pointer-events-none', 'invisible')
  root.classList.add('opacity-100', 'pointer-events-auto')

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const p = getPanel(root)
      if (!p) return
      p.classList.remove(...PANEL_CLOSED)
      p.classList.add(...PANEL_OPEN)
    })
  })

  const title = root.querySelector('#download-modal-title')
  if (title instanceof HTMLElement) title.focus()
}

export function setupDownloadModal(): void {
  if (document.getElementById('download-modal-root')) return

  const pw = GAME_DOWNLOAD.password
  const fn = GAME_DOWNLOAD.fileName

  const root = document.createElement('div')
  root.id = 'download-modal-root'
  root.className = [
    'fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-4',
    'invisible opacity-0 pointer-events-none transition-opacity duration-300 ease-out',
  ].join(' ')
  root.setAttribute('aria-hidden', 'true')

  root.innerHTML = `
    <div
      class="download-modal-backdrop absolute inset-0 z-0 bg-slate-950/75 backdrop-blur-md transition-opacity duration-300 ease-out"
      data-download-modal-backdrop
      tabindex="-1"
      aria-hidden="true"
    ></div>
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="download-modal-title"
      class="download-modal-panel relative z-10 w-full sm:max-w-lg max-h-[92vh] overflow-y-auto overflow-x-hidden rounded-t-2xl sm:rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xl shadow-cyan-900/25 pointer-events-auto origin-bottom sm:origin-center transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] opacity-0 translate-y-8 scale-[0.98]"
    >
      <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex items-start justify-between gap-3">
        <h2 id="download-modal-title" tabindex="-1" class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white pr-2">
          Download started
        </h2>
        <button type="button" class="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-cyan-500" data-download-modal-close aria-label="Close">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>

      <div class="p-5 sm:p-6 space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
        <p>
          Your download should begin immediately. The file is a <strong class="text-slate-900 dark:text-white">.rar</strong> archive
          (<code class="text-xs sm:text-sm bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">${fn}</code>).
          You&apos;ll need to <strong class="text-slate-900 dark:text-white">extract</strong> it before running the installer.
        </p>

        <div class="rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/60 p-4">
          <p class="font-semibold text-amber-900 dark:text-amber-200 mb-2 flex items-center gap-2">
            <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            Password-protected archive
          </p>
          <p class="text-amber-900/90 dark:text-amber-100/90 text-sm">
            WinRAR, 7-Zip, or Windows will prompt for a password. Paste the key below <strong>exactly</strong> as shown, including hyphens.
          </p>
        </div>

        <div>
          <p class="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-2">Archive password</p>
          <div class="flex flex-col xs:flex-row gap-2">
            <code id="download-modal-password" class="flex-1 font-mono text-sm sm:text-base px-3 py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-cyan-200 border border-slate-200 dark:border-slate-600 break-all select-all">${pw}</code>
            <button type="button" data-download-copy-password class="shrink-0 px-4 py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-semibold transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900">
              Copy
            </button>
          </div>
        </div>

        <ol class="list-decimal list-inside space-y-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 pl-1">
          <li>When the download finishes, open the <code class="text-xs bg-slate-100 dark:bg-slate-800 px-1 rounded">.rar</code> from your Downloads folder.</li>
          <li>Extract the archive; enter the password when asked.</li>
          <li>Run the setup (<code class="text-xs bg-slate-100 dark:bg-slate-800 px-1 rounded">.exe</code>) and follow the on-screen steps.</li>
        </ol>

        <p class="text-xs text-slate-500 dark:text-slate-400">
          Need help? Email <a class="text-cyan-600 dark:text-cyan-400 hover:underline font-medium" href="mailto:help@razorshard.com">help@razorshard.com</a>.
        </p>
      </div>

      <div class="p-5 sm:p-6 pt-0 flex justify-end">
        <button type="button" data-download-modal-dismiss class="w-full sm:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900">
          Got it
        </button>
      </div>
    </div>
  `

  document.body.appendChild(root)

  const closeSelectors =
    '[data-download-modal-close], [data-download-modal-dismiss], [data-download-modal-backdrop]'
  root.querySelectorAll(closeSelectors).forEach((el) => {
    el.addEventListener('click', () => {
      closeDownloadModal()
    })
  })

  root.querySelector('[data-download-copy-password]')?.addEventListener('click', async () => {
    const btn = root.querySelector('[data-download-copy-password]') as HTMLButtonElement
    try {
      await navigator.clipboard.writeText(pw)
      const prev = btn.textContent
      btn.textContent = 'Copied!'
      window.setTimeout(() => {
        btn.textContent = prev
      }, 2000)
    } catch {
      const el = document.getElementById('download-modal-password')
      if (el) {
        const range = document.createRange()
        range.selectNodeContents(el)
        const sel = window.getSelection()
        sel?.removeAllRanges()
        sel?.addRange(range)
      }
    }
  })

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return
    if (root.classList.contains('invisible') || root.classList.contains('opacity-0')) return
    closeDownloadModal()
  })
}

/** First click: start download and show guidance modal (English, in line with the site). */
export function downloadGame(): void {
  executeDownload()
  openDownloadModal()
}

if (typeof window !== 'undefined') {
  ;(window as unknown as { downloadGame: typeof downloadGame }).downloadGame = downloadGame
}
