export function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="/logo.png"
        alt="Haven M Construction logo"
        className="h-16 w-16 object-contain"
      />
      <div className="flex flex-col leading-tight">
        <span
          className={`text-lg font-bold tracking-tight ${
            light ? "text-white" : "text-charcoal"
          }`}
        >
          Haven M
        </span>
        <span
          className={`text-[10px] font-semibold tracking-[0.28em] uppercase ${
            light ? "text-white/60" : "text-gold-dark"
          }`}
        >
          Construction
        </span>
      </div>
    </div>
  );
}