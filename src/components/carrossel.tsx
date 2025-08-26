import { useCallback, useEffect, useRef, useState } from "react"; 

type Slide = { src: string; alt?: string };
type Props = {
  slides: Slide[];
  autoPlay?: boolean;
  interval?: number; // ms
  className?: string;
  slideClassName?: string;
};

export default function CarouselLite({
  slides,
  autoPlay = true,
  interval = 3500,
  className = "",
  slideClassName = "",
}: Props) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isHoveringRef = useRef(false);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // autoplay
  useEffect(() => {
    if (!autoPlay || slides.length <= 1) return;
    const play = () => {
      if (!isHoveringRef.current) next();
      timerRef.current = window.setTimeout(play, interval) as unknown as number;
    };
    timerRef.current = window.setTimeout(play, interval) as unknown as number;
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [autoPlay, interval, next, slides.length]);

  // pause on hover
  const onMouseEnter = () => (isHoveringRef.current = true);
  const onMouseLeave = () => (isHoveringRef.current = false);

  // keyboard arrows
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  // swipe (touch)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let startX = 0;
    let deltaX = 0;

    const onTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      deltaX = 0;
    };
    const onTouchMove = (e: TouchEvent) => {
      deltaX = e.touches[0].clientX - startX;
    };
    const onTouchEnd = () => {
      if (Math.abs(deltaX) > 50) {
        deltaX < 0 ? next() : prev();
      }
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: true });
    el.addEventListener("touchend", onTouchEnd);

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [next, prev]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden rounded-2xl shadow-5xl ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* trilho */}
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((s, i) => (
          <div key={i} className="min-w-full">
            <img
              src={s.src}
              alt={s.alt ?? `slide-${i}`}
              className={`w-full h-[600px] object-contain ${slideClassName}`}
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* setas */}
      {slides.length > 1 && (
        <>
          <button
            aria-label="Anterior"
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-white hover:bg-black/70"
          >
            ‹
          </button>
          <button
            aria-label="Próximo"
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-white hover:bg-black/70"
          >
            ›
          </button>
        </>
      )}

      {/* bolinhas */}
      {slides.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir para slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full border border-white/70 ${
                i === index ? "bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
