/** Official WinRAR 64-bit Windows installer (win-rar.com). */
export const WINRAR_X64_DOWNLOAD_URL =
  'https://www.win-rar.com/fileadmin/winrar-versions/winrar/winrar-x64-720.exe'

const iconHelp = `
  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
    <path d="M12 17h.01"/>
  </svg>
`

const iconChevron = `
  <svg class="w-5 h-5 text-cyan-600 dark:text-cyan-400 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="m6 9 6 6 6-6"/>
  </svg>
`

function item(question: string, answerHtml: string): string {
  return `
    <details class="group faq-item relative isolate z-10 rounded-2xl border border-slate-200/90 dark:border-slate-700/90 bg-white dark:bg-slate-900/70 shadow-sm hover:shadow-md open:shadow-lg open:shadow-cyan-500/10 dark:open:shadow-cyan-900/20 transition-shadow duration-300">
      <summary class="relative z-20 cursor-pointer list-none flex items-start gap-3 sm:gap-4 px-4 sm:px-5 py-4 sm:py-5 select-none [&::-webkit-details-marker]:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950 rounded-2xl bg-white/80 dark:bg-slate-900/80">
        <span class="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/15 to-teal-500/10 dark:from-cyan-400/20 dark:to-teal-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center ring-1 ring-cyan-500/20 dark:ring-cyan-400/25 pointer-events-none" aria-hidden="true">
          ${iconHelp}
        </span>
        <span class="flex-1 min-w-0 pt-0.5 text-left font-semibold text-gray-900 dark:text-gray-100 text-sm sm:text-base leading-snug">
          ${question}
        </span>
        <span class="shrink-0 w-9 h-9 rounded-lg bg-slate-100/80 dark:bg-slate-800/80 flex items-center justify-center self-center ring-1 ring-slate-200/80 dark:ring-slate-600/50 pointer-events-none" aria-hidden="true">
          ${iconChevron}
        </span>
      </summary>
      <div class="relative z-10 grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-open:grid-rows-[1fr]">
        <div class="min-h-0 overflow-hidden group-open:overflow-visible">
          <div class="border-t border-slate-100 dark:border-slate-800/90 px-4 sm:px-5 pb-4 sm:pb-5 pt-1 text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed pointer-events-auto">
            <div class="faq-answer-body pt-3 sm:pt-4 space-y-3 sm:pl-[3.25rem] max-[380px]:pl-0">
              ${answerHtml}
            </div>
          </div>
        </div>
      </div>
    </details>
  `
}

export function Faq(): string {
  const winrarBlock = `
    <p>You can open the archive with <strong class="text-gray-800 dark:text-gray-200">7-Zip</strong> (free), <strong class="text-gray-800 dark:text-gray-200">WinRAR</strong>, or Windows’ built-in tools when they support the format. When prompted for a password, paste the key from our download modal exactly (hyphens included).</p>
    <div class="flex flex-col items-start gap-2 pt-2">
      <a
        href="${WINRAR_X64_DOWNLOAD_URL}"
        class="relative z-30 inline-flex w-full min-h-[44px] sm:w-auto sm:min-w-0 items-center justify-center gap-2 px-4 py-3 sm:py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg class="w-4 h-4 shrink-0 opacity-90 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
        <span>Download WinRAR (64-bit, official)</span>
      </a>
      <p class="text-xs text-gray-500 dark:text-gray-500 max-w-md leading-relaxed pointer-events-none">Installer from <span class="font-medium text-gray-600 dark:text-gray-400">win-rar.com</span> · Windows x64</p>
    </div>
  `

  const entries: { q: string; html: string }[] = [
    {
      q: 'What is a .rar file and why is the download a .rar?',
      html: `<p>A .rar file is a compressed archive—similar to a .zip. We ship the Windows installer inside a password-protected .rar so the download stays intact. Extract the archive first, then run the setup (.exe) inside.</p>`,
    },
    {
      q: "I don't have WinRAR. How do I open the archive?",
      html: winrarBlock,
    },
    {
      q: 'Where do I enter the archive password?',
      html: `<p>When you extract the .rar, your app (7-Zip, WinRAR, etc.) will ask for a password. Copy it from our site’s download dialog, paste it in full (including hyphens), then continue. This password is only for the archive—not a game login.</p>`,
    },
    {
      q: 'The installer won’t run or Windows SmartScreen warns me.',
      html: `<p>Lesser-known games often trigger SmartScreen. If you trust this official site, choose <strong class="text-gray-800 dark:text-gray-200">More info</strong> → <strong class="text-gray-800 dark:text-gray-200">Run anyway</strong>. If antivirus quarantines the installer, restore it or add an exception for the setup you just extracted, then try again.</p>`,
    },
    {
      q: 'Do I need administrator rights?',
      html: `<p>Usually yes. Right-click the setup <code class="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">.exe</code> → <strong class="text-gray-800 dark:text-gray-200">Run as administrator</strong> so it can install under Program Files.</p>`,
    },
    {
      q: 'Can I play on Mac or Linux?',
      html: `<p>This build targets <strong class="text-gray-800 dark:text-gray-200">Windows</strong>. Other platforms may be added later—email <a class="text-cyan-600 dark:text-cyan-400 hover:underline font-medium" href="mailto:help@razorshard.com">help@razorshard.com</a> for news.</p>`,
    },
    {
      q: 'Download failed or the file looks corrupt.',
      html: `<p>Try another browser, pause VPN briefly, and free disk space. Delete any partial .rar, download again, and extract with the password. If extraction still fails, the file may not have finished downloading.</p>`,
    },
  ]

  const items = entries.map((e) => item(e.q, e.html)).join('')

  return `
    <section id="faq" class="max-w-3xl px-3 sm:px-4 md:px-6 lg:px-8 mx-auto w-full py-14 sm:py-20 scroll-mt-28" data-aos="fade-up" aria-labelledby="faq-heading">
      <div class="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
        <p class="text-sm font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">Help</p>
        <h2 id="faq-heading" class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">Installation &amp; download FAQ</h2>
        <div class="w-12 sm:w-16 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 dark:from-cyan-400 dark:to-teal-400 mx-auto mb-4"></div>
        <p class="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
          .rar files, passwords, WinRAR, and getting Razor Shard running on Windows.
        </p>
      </div>
      <div class="space-y-3 sm:space-y-4">
        ${items}
      </div>
    </section>
  `
}
