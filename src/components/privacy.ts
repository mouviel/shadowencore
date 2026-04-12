export function Privacy(): string {
  return `
    <section id="privacy" class="max-w-3xl px-3 sm:px-4 md:px-6 lg:px-8 mx-auto w-full py-14 sm:py-20 scroll-mt-28 pb-8 sm:pb-12" data-aos="fade-up" aria-labelledby="privacy-heading">
      <div class="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
        <p class="text-sm font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">Legal</p>
        <h2 id="privacy-heading" class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">Privacy &amp; cookies</h2>
        <div class="w-12 sm:w-16 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 dark:from-cyan-400 dark:to-teal-400 mx-auto"></div>
        <p class="mt-4 text-xs text-gray-500 dark:text-gray-500">Last updated: April 12, 2026</p>
      </div>

      <div class="space-y-8 text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-400">
        <div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">Who we are</h3>
          <p>
            This website promotes <strong class="text-gray-800 dark:text-gray-200">Razor Shard</strong>, an independent game. The site is operated in connection with the Razor Shard team.
            Contact: <a class="text-cyan-600 dark:text-cyan-400 hover:underline font-medium" href="mailto:help@razorshard.com">help@razorshard.com</a>.
          </p>
        </div>

        <div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">What data we collect</h3>
          <p class="mb-3">We keep this site lightweight. Depending on your visit, the following may apply:</p>
          <ul class="list-disc pl-5 space-y-2">
            <li>
              <strong class="text-gray-800 dark:text-gray-200">Analytics (Vercel Web Analytics).</strong> When deployed on Vercel with analytics enabled, we may receive aggregated, privacy-oriented metrics such as page views—not used by us to sell personal profiles.
            </li>
            <li>
              <strong class="text-gray-800 dark:text-gray-200">Microsoft Clarity.</strong> If enabled on this site, Clarity may process session data under Microsoft’s policies to help us understand usability.
            </li>
            <li>
              <strong class="text-gray-800 dark:text-gray-200">Firebase / Google Analytics.</strong> If the Firebase snippet on this page is active, Google may process usage data under Google’s policies.
            </li>
            <li>
              <strong class="text-gray-800 dark:text-gray-200">Server and CDN logs.</strong> Our host (e.g. Vercel) may log IP address, user agent, and request metadata for security and operations.
            </li>
          </ul>
          <p class="mt-3">We do not run account registration on this landing page. We do not ask for your name or email unless you choose to contact us.</p>
        </div>

        <div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">Cookies &amp; similar technologies</h3>
          <p>
            Cookies are small files stored on your device. We and our providers may use cookies or local storage for analytics, session state, or preferences.
            You can control cookies in your browser (block or delete). Blocking some cookies may limit how certain features work.
          </p>
        </div>

        <div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">Legal bases &amp; retention</h3>
          <p>
            Where the GDPR applies, we rely on legitimate interests (site security, aggregated statistics) and, where required, your consent for non-essential cookies.
            Logs and analytics are retained only as long as needed for these purposes or as described by our processors.
          </p>
        </div>

        <div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">Your rights</h3>
          <p>
            Depending on where you live, you may have rights to access, correct, delete, or restrict processing of personal data, or to object to certain processing.
            Email <a class="text-cyan-600 dark:text-cyan-400 hover:underline font-medium" href="mailto:help@razorshard.com">help@razorshard.com</a>.
            You may also contact your local data protection authority.
          </p>
        </div>

        <div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">Children</h3>
          <p>This site is not directed at children under 13. We do not knowingly collect personal information from children.</p>
        </div>

        <div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">Changes</h3>
          <p>We may update this page. The “Last updated” date above will change when we do.</p>
        </div>
      </div>
    </section>
  `
}
