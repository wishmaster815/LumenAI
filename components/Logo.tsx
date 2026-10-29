export function Logo({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <span
      className={`grid place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-2 shadow-lg shadow-brand/30 ${className}`}
      aria-hidden
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-[60%] w-[60%]">
        <path
          d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1m0-12.8-2.1 2.1M7.7 16.3l-2.1 2.1"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="3.2" fill="white" />
      </svg>
    </span>
  );
}

export function Wordmark() {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <Logo />
      <span className="text-lg font-semibold tracking-tight">Lumen</span>
    </a>
  );
}
