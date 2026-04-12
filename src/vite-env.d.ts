/// <reference types="vite/client" />

declare module 'aos' {
  const AOS: { init: (options?: Record<string, unknown>) => void }
  export default AOS
}
