import { routes } from '../routes.ts'

export function Footer(): string {
  return `
    <footer id="footer" class="relative z-20 mt-auto w-full py-12 sm:py-14 px-4 sm:px-6 lg:px-8 mx-auto bg-gradient-to-b from-slate-900 to-slate-950 text-gray-300 pointer-events-auto" data-aos="fade-up">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
        <div>
          <a class="relative z-10 inline-flex text-xl font-bold text-white hover:text-cyan-300 transition-colors" href="${routes.home}" aria-label="Razor Shard home">Razor Shard</a>
          <p class="mt-3 text-sm text-gray-400 leading-relaxed max-w-xs">
            Side-scrolling action-adventure: play as Blu, reclaim Talpa from the Corrupted, alone or in local co-op.
          </p>
        </div>
        <div>
          <h3 class="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">Explore</h3>
          <ul class="space-y-2 text-sm">
            <li><a class="relative z-10 inline-block py-1 text-gray-300 hover:text-cyan-400 transition-colors" href="${routes.about}">About</a></li>
            <li><a class="relative z-10 inline-block py-1 text-gray-300 hover:text-cyan-400 transition-colors" href="${routes.features}">Features</a></li>
            <li><a class="relative z-10 inline-block py-1 text-gray-300 hover:text-cyan-400 transition-colors" href="${routes.screenshots}">Screenshots</a></li>
            <li><a class="relative z-10 inline-block py-1 text-gray-300 hover:text-cyan-400 transition-colors" href="${routes.faq}">FAQ</a></li>
            <li><a class="relative z-10 inline-block py-1 text-gray-300 hover:text-cyan-400 transition-colors" href="${routes.changelog}">Changelog</a></li>
            <li><a class="relative z-10 inline-block py-1 text-gray-300 hover:text-cyan-400 transition-colors" href="${routes.privacy}">Privacy &amp; cookies</a></li>
            <li><button type="button" class="relative z-10 text-left py-1 text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer bg-transparent border-0 p-0 font-inherit" onclick="downloadGame()">Download</button></li>
          </ul>
        </div>
        <div>
          <h3 class="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">Support</h3>
          <ul class="space-y-2 text-sm">
            <li><a class="relative z-10 inline-block py-1 text-cyan-400 hover:text-cyan-300 transition-colors" href="mailto:help@razorshard.com">help@razorshard.com</a></li>
          </ul>
        </div>
      </div>
      <div class="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-gray-500">
        <p>Developed by <span class="text-gray-400">Harlow Robinet</span>.</p>
        <p>© ${new Date().getFullYear()} Razor Shard. All rights reserved.</p>
      </div>
    </footer>
  `
}
