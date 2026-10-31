export default function Watermark() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-10 grid grid-cols-2 content-around justify-items-center gap-8 overflow-hidden opacity-35 sm:grid-cols-3"
    >
      {Array.from({ length: 9 }, (_, index) => (
        <span
          key={index}
          className="-rotate-12 whitespace-nowrap text-[11px] font-black tracking-wide text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] sm:text-sm"
        >
          Sypuchka Доставка · 073 757 77 90
        </span>
      ))}
    </div>
  );
}
