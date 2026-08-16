export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#0a0a0f] px-6 py-10 text-sm text-gray-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 text-center">
        <p className="text-gray-300">
          © 2026 Arafat Sulaiman. All rights reserved.
        </p>

        <p className="flex items-center gap-1.5 font-medium text-gray-400">
          <span>Created by</span>
          <a
            href="#home"
            className="font-bold tracking-wide text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)] transition-all hover:text-red-400 hover:underline"
          >
            AlyyConnect
          </a>
        </p>

        <p className="pt-1 text-xs font-medium tracking-wide text-gray-400 sm:text-sm">
          Worldwide (Based in Dubai, UAE)
        </p>
      </div>
    </footer>
  );
}
