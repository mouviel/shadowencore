type Entry = { version: string; date: string; lines: string[] }

const ENTRIES: Entry[] = [
  {
    version: '2.1.1',
    date: '2025-09-20',
    lines: [
      'Installer: improved default path handling on drives with non-Latin characters.',
      'Co-op: fixed rare desync when both players opened the same shrine gate in Verdant Hollow.',
      'Balance: slightly reduced early-game spike damage on Corrupted stalkers.',
    ],
  },
  {
    version: '2.1.0',
    date: '2025-08-03',
    lines: [
      'New Guardian ability chain unlocks in Chapter 3 (Shard Surge combo window).',
      'Talpa: added optional lore tablets in the Sunken Aqueduct zone.',
      'Audio: remastered boss sting for the Hollow Warden encounter.',
    ],
  },
  {
    version: '2.0.5',
    date: '2025-06-14',
    lines: [
      'Platforming: coyote-time tuned for ledge grabs near spike pits.',
      'Save system: backup slots now rotate correctly after long sessions.',
      'Localization: UI scale fixes for 125% Windows display scaling.',
    ],
  },
  {
    version: '2.0.0',
    date: '2025-04-01',
    lines: [
      'Major content pass: Blu’s journey through the Corrupted Spire arc.',
      'Local co-op beta: shared screen, revive tokens, split ability cooldowns.',
      'Performance: texture streaming on low-end GPUs; optional “Lite” preset.',
    ],
  },
]

function row(e: Entry): string {
  const bullets = e.lines.map((l) => `<li class="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">${l}</li>`).join('')
  return `
    <li class="relative pl-8 sm:pl-10 pb-10 last:pb-0 border-l-2 border-cyan-200 dark:border-cyan-800">
      <span class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 ring-4 ring-white dark:ring-slate-950" aria-hidden="true"></span>
      <div class="flex flex-wrap items-baseline gap-2 sm:gap-3 mb-3">
        <span class="text-lg sm:text-xl font-bold text-gray-900 dark:text-white font-mono">${e.version}</span>
        <time datetime="${e.date}" class="text-xs sm:text-sm text-gray-500 dark:text-gray-500">${e.date}</time>
      </div>
      <ul class="list-disc list-inside space-y-2 marker:text-cyan-500">${bullets}</ul>
    </li>
  `
}

export function Changelog(): string {
  return `
    <section id="changelog" class="max-w-3xl px-3 sm:px-4 md:px-6 lg:px-8 mx-auto w-full py-14 sm:py-16 scroll-mt-28" data-aos="fade-up" aria-labelledby="changelog-heading">
      <div class="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
        <p class="text-sm font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">Updates</p>
        <h2 id="changelog-heading" class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">Changelog</h2>
        <div class="w-12 sm:w-16 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 dark:from-cyan-400 dark:to-teal-400 mx-auto mb-4"></div>
        <p class="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
          Patch notes for Razor Shard (illustrative sample entries for the website).
        </p>
      </div>
      <ol class="space-y-0 list-none pl-0 m-0">
        ${ENTRIES.map(row).join('')}
      </ol>
    </section>
  `
}
