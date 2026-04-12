export function Footer(): string {
  return `
    <footer id="footer" class="mt-auto w-full py-12 sm:py-14 px-4 sm:px-6 lg:px-8 mx-auto bg-gradient-to-b from-slate-900 to-slate-950 text-gray-300" data-aos="fade-up">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
        <div>
          <a class="inline-flex text-xl font-bold text-white hover:text-cyan-300 transition-colors" href="#top" aria-label="Razor Shard home">Razor Shard</a>
          <p class="mt-3 text-sm text-gray-400 leading-relaxed max-w-xs">
            Side-scrolling action-adventure: play as Blu, reclaim Talpa from the Corrupted, alone or in local co-op.
          </p>
        </div>
        <div>
          <h3 class="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">Explore</h3>
          <ul class="space-y-2 text-sm">
            <li><a class="text-gray-300 hover:text-cyan-400 transition-colors" href="#about">About</a></li>
            <li><a class="text-gray-300 hover:text-cyan-400 transition-colors" href="#features">Features</a></li>
            <li><a class="text-gray-300 hover:text-cyan-400 transition-colors" href="#screenshots">Screenshots</a></li>
            <li><button type="button" class="text-left text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer bg-transparent border-0 p-0 font-inherit" onclick="downloadGame()">Download</button></li>
          </ul>
        </div>
        <div>
          <h3 class="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">Support &amp; press</h3>
          <ul class="space-y-2 text-sm">
            <li><a class="text-cyan-400 hover:text-cyan-300 transition-colors" href="mailto:help@razorshard.com">help@razorshard.com</a></li>
            <li><a class="text-gray-300 hover:text-cyan-400 transition-colors" href="https://github.com/tolgazorlu/presskit" target="_blank" rel="noopener noreferrer">Press kit (GitHub)</a></li>
            <li><button type="button" class="text-left text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer bg-transparent border-0 p-0 font-inherit" onclick="downloadLogo()">Download logo</button></li>
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
