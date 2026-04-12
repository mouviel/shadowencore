export function Features(): string {
  return `
    <section id="features" class="max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 mx-auto w-full py-14 sm:py-20 scroll-mt-28" data-aos="fade-up">
      <div class="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
        <p class="text-sm font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">Why play</p>
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Built for exploration &amp; momentum</h2>
        <p class="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
          Hand-crafted levels, Guardian powers, and a corrupted world to reclaim—tuned for both quick sessions and deep runs.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        <article class="group rounded-2xl border border-cyan-200/60 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 backdrop-blur-sm p-6 sm:p-7 shadow-sm hover:shadow-lg hover:shadow-cyan-500/10 dark:hover:shadow-cyan-900/20 transition-all duration-300" data-aos="fade-up" data-aos-delay="0">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center text-white mb-5 group-hover:scale-105 transition-transform">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Tight platforming</h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">Reflex-driven jumps, hazards, and puzzles that reward learning each biome of Talpa.</p>
        </article>

        <article class="group rounded-2xl border border-cyan-200/60 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 backdrop-blur-sm p-6 sm:p-7 shadow-sm hover:shadow-lg hover:shadow-cyan-500/10 dark:hover:shadow-cyan-900/20 transition-all duration-300" data-aos="fade-up" data-aos-delay="80">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white mb-5 group-hover:scale-105 transition-transform">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
          </div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Guardian abilities</h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">Unlock ancient powers as Blu and turn the corruption’s tricks against your foes.</p>
        </article>

        <article class="group rounded-2xl border border-cyan-200/60 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 backdrop-blur-sm p-6 sm:p-7 shadow-sm hover:shadow-lg hover:shadow-cyan-500/10 dark:hover:shadow-cyan-900/20 transition-all duration-300 sm:col-span-2 lg:col-span-1" data-aos="fade-up" data-aos-delay="160">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white mb-5 group-hover:scale-105 transition-transform">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
          </div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Local co-op</h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">Team up on the couch—coordinate routes, abilities, and clutch saves with a friend.</p>
        </article>
      </div>

      <div id="requirements" class="mt-14 sm:mt-16 scroll-mt-28" data-aos="fade-up">
        <div class="rounded-2xl border border-slate-200 dark:border-slate-700 bg-gradient-to-br from-slate-50 to-cyan-50/40 dark:from-slate-900 dark:to-slate-800/80 p-6 sm:p-8 lg:p-10">
          <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div class="max-w-xl">
              <h3 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">System requirements</h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm sm:text-base">Aim for smooth 60 FPS at 1080p. Integrated graphics may need lower settings.</p>
            </div>
            <dl class="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 text-sm sm:text-base min-w-0 lg:min-w-[28rem]">
              <div>
                <dt class="font-semibold text-gray-800 dark:text-gray-200 mb-1">OS</dt>
                <dd class="text-gray-600 dark:text-gray-400">Windows 10 / 11 (64-bit)</dd>
              </div>
              <div>
                <dt class="font-semibold text-gray-800 dark:text-gray-200 mb-1">Processor</dt>
                <dd class="text-gray-600 dark:text-gray-400">Dual-core 2.4 GHz or better</dd>
              </div>
              <div>
                <dt class="font-semibold text-gray-800 dark:text-gray-200 mb-1">Memory</dt>
                <dd class="text-gray-600 dark:text-gray-400">4 GB RAM (8 GB recommended)</dd>
              </div>
              <div>
                <dt class="font-semibold text-gray-800 dark:text-gray-200 mb-1">Graphics</dt>
                <dd class="text-gray-600 dark:text-gray-400">DirectX 11 compatible GPU</dd>
              </div>
              <div class="sm:col-span-2">
                <dt class="font-semibold text-gray-800 dark:text-gray-200 mb-1">Storage</dt>
                <dd class="text-gray-600 dark:text-gray-400">~2 GB free space</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  `
}
