export function BackgroundHero(): string {
  return `
    <section class="fixed bg-gradient-to-br from-cyan-50/30 via-white to-teal-50/30 dark:from-gray-950 dark:via-slate-950 dark:to-gray-900 h-screen w-full flex items-center justify-center -z-10">
        <img src="/assets/images/hereoimage.jpg" alt="Hero Background" class="top-0 left-0 w-full h-full object-cover object-center opacity-10 sm:opacity-15" loading="lazy">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cyan-50/20 dark:to-purple-900/20 sm:hidden"></div>
    </section>
  `
}