import type { SitePage } from '../routes.ts'
import { desktopNavClass, routes } from '../routes.ts'

export function Header(page: SitePage): string {
  const idle = desktopNavClass(false)

  return `
    <header class="fixed top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm" id="top">
        <nav class="mt-2 md:mt-4 relative max-w-6xl w-full bg-gradient-to-r from-cyan-50 via-teal-50 to-blue-100 dark:from-slate-800 dark:via-purple-900/30 dark:to-blue-900/40 backdrop-blur-lg bg-opacity-95 dark:bg-opacity-95 border border-cyan-200/60 dark:border-purple-600/40 rounded-[20px] md:rounded-[28px] mx-2 flex flex-wrap md:flex-nowrap items-center justify-between p-2 md:p-1 ps-4 md:ps-5 md:py-0 sm:mx-auto shadow-lg shadow-cyan-500/10 dark:shadow-purple-900/20">
            <div class="flex items-center min-w-0 flex-1 md:flex-none">
            <a class="flex-none rounded-md text-base md:text-lg inline-block font-bold focus:outline-hidden focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300 truncate" href="${routes.home}" aria-label="Razor Shard — home">
                <span class="hidden xs:inline">RAZOR SHARD</span>
                <span class="xs:hidden">RS</span>
            </a>
            <div class="ms-1 sm:ms-2"></div>
            </div>

            <div class="hidden md:flex flex-wrap items-center gap-1 lg:gap-2 flex-1 justify-center min-w-0 px-1 lg:px-2">
              <a class="${idle}" href="${routes.about}">About</a>
              <a class="${idle}" href="${routes.features}">Features</a>
              <a class="${idle}" href="${routes.requirements}">Requirements</a>
              <a class="${idle}" href="${routes.screenshots}">Screenshots</a>
              <a class="${desktopNavClass(page === 'faq')}" href="${routes.faq}" ${page === 'faq' ? 'aria-current="page"' : ''}>FAQ</a>
              <a class="${desktopNavClass(page === 'changelog')}" href="${routes.changelog}" ${page === 'changelog' ? 'aria-current="page"' : ''}>Updates</a>
              <a class="${desktopNavClass(page === 'privacy')}" href="${routes.privacy}" ${page === 'privacy' ? 'aria-current="page"' : ''}>Privacy</a>
            </div>

            <div class="flex items-center gap-1 md:order-4 md:ms-4">
            <button type="button" onclick="downloadGame()" class="hidden sm:inline-flex w-full sm:w-auto whitespace-nowrap py-2 md:py-2.5 px-3 md:px-4 inline-flex justify-center items-center gap-x-2 text-xs md:text-sm font-medium rounded-full border border-gray-300/50 dark:border-gray-600/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-400/60 dark:hover:border-gray-500/60 hover:text-gray-800 dark:hover:text-gray-100 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-cyan-500 disabled:opacity-50 disabled:pointer-events-none transition-all duration-300 shadow-sm">
                <span class="hidden md:inline">Download Now!</span>
                <span class="md:hidden">Download</span>
            </button>

            <button type="button" onclick="downloadGame()" class="sm:hidden w-8 h-8 flex justify-center items-center border border-gray-300/50 dark:border-gray-600/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-full transition-all duration-300" title="Download Razor Shard Game">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
            </button>

            <div class="md:hidden">
                <button type="button" class="flex justify-center items-center w-10 h-10 border border-gray-300/50 dark:border-gray-600/50 text-gray-600 dark:text-gray-300 rounded-full hover:bg-gray-100/80 dark:hover:bg-gray-700/80 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-cyan-500 transition-all duration-300" id="nav-menu-toggle" aria-expanded="false" aria-controls="site-nav-panel" aria-label="Open menu">
                <svg id="nav-icon-open" class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
                <svg id="nav-icon-close" class="shrink-0 size-4 hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
            </div>
            </div>

            <div id="site-nav-panel" class="hidden md:!hidden overflow-hidden transition-all duration-300 basis-full grow w-full border-t border-gray-200/60 dark:border-gray-600/60 mt-3 pt-3">
            <div class="flex flex-col gap-1 pb-2">
                <button type="button" onclick="downloadGame()" class="w-full py-3 px-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-xl font-semibold text-center shadow-md mb-2">
                    Download Razor Shard
                </button>
                <a class="py-3 px-4 rounded-xl font-medium text-gray-800 dark:text-gray-100 hover:bg-white/70 dark:hover:bg-slate-700/50 transition-colors mobile-nav-link" href="${routes.about}">About</a>
                <a class="py-3 px-4 rounded-xl font-medium text-gray-800 dark:text-gray-100 hover:bg-white/70 dark:hover:bg-slate-700/50 transition-colors mobile-nav-link" href="${routes.features}">Features</a>
                <a class="py-3 px-4 rounded-xl font-medium text-gray-800 dark:text-gray-100 hover:bg-white/70 dark:hover:bg-slate-700/50 transition-colors mobile-nav-link" href="${routes.requirements}">Requirements</a>
                <a class="py-3 px-4 rounded-xl font-medium text-gray-800 dark:text-gray-100 hover:bg-white/70 dark:hover:bg-slate-700/50 transition-colors mobile-nav-link" href="${routes.screenshots}">Screenshots</a>
                <a class="py-3 px-4 rounded-xl font-medium text-gray-800 dark:text-gray-100 hover:bg-white/70 dark:hover:bg-slate-700/50 transition-colors mobile-nav-link" href="${routes.faq}">FAQ</a>
                <a class="py-3 px-4 rounded-xl font-medium text-gray-800 dark:text-gray-100 hover:bg-white/70 dark:hover:bg-slate-700/50 transition-colors mobile-nav-link" href="${routes.changelog}">Changelog</a>
                <a class="py-3 px-4 rounded-xl font-medium text-gray-800 dark:text-gray-100 hover:bg-white/70 dark:hover:bg-slate-700/50 transition-colors mobile-nav-link" href="${routes.privacy}">Privacy &amp; cookies</a>
            </div>
            </div>
        </nav>
    </header>
  `
}
