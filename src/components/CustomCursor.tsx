
import React, { useEffect, useRef, useState } from 'react';
import { Burst } from '@/components/comic/ComicArt';

interface Shot {
  id: number;
  x: number;
  y: number;
  originX: number;
  originY: number;
}

const INTERACTIVE = 'a, button, input, textarea, select, label, [role="button"]';
const SHOT_MS = 650;

/** A small web reticle in place of the pointer. Clicking fires a web-line from the nearest bottom corner. */
const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [shots, setShots] = useState<Shot[]>([]);
  const [enabled] = useState(() => window.matchMedia('(hover: hover) and (pointer: fine)').matches);

  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (event: MouseEvent) => {
      const cursor = cursorRef.current;
      if (!cursor) return;
      cursor.style.opacity = '1';
      cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
      const target = event.target instanceof Element ? event.target : null;
      cursor.classList.toggle('is-active', !!target?.closest(INTERACTIVE));
    };

    let nextId = 0;
    const timers = new Set<number>();
    const handleClick = (event: MouseEvent) => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      if (event.target instanceof Element && event.target.closest('input, textarea, select')) return;

      const id = nextId++;
      setShots((current) => [
        ...current,
        {
          id,
          x: event.clientX,
          y: event.clientY,
          originX: event.clientX < window.innerWidth / 2 ? 0 : window.innerWidth,
          originY: window.innerHeight,
        },
      ]);
      const timer = window.setTimeout(() => {
        timers.delete(timer);
        setShots((current) => current.filter((shot) => shot.id !== id));
      }, SHOT_MS);
      timers.add(timer);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden" aria-hidden="true">
      {shots.map((shot) => (
        <React.Fragment key={shot.id}>
          <svg className="absolute inset-0 h-full w-full">
            <line
              className="comic-web-shot"
              pathLength={1}
              x1={shot.originX}
              y1={shot.originY}
              x2={shot.x}
              y2={shot.y}
            />
          </svg>
          {/* Offset so the reticle doesn't sit on the word; drops below the click near the top edge. */}
          <div
            className="comic-shot-burst absolute w-36"
            style={{ left: shot.x - 72, top: shot.y < 130 ? shot.y + 18 : shot.y - 118 }}
          >
            <Burst word="THWIP!" fill="#fff" />
          </div>
        </React.Fragment>
      ))}
      <div ref={cursorRef} className="comic-cursor absolute left-0 top-0" style={{ opacity: 0 }}>
        <svg viewBox="-20 -20 40 40" className="comic-cursor-web h-9 w-9 -translate-x-1/2 -translate-y-1/2 overflow-visible">
          <path
            d="M0-18V18M-18 0H18M-12.7-12.7L12.7 12.7M-12.7 12.7L12.7-12.7M0-9L6.4-6.4L9 0L6.4 6.4L0 9L-6.4 6.4L-9 0L-6.4-6.4ZM0-15L10.6-10.6L15 0L10.6 10.6L0 15L-10.6 10.6L-15 0L-10.6-10.6Z"
            fill="none"
            strokeLinejoin="round"
          />
          <circle r="2.6" />
        </svg>
      </div>
    </div>
  );
};

export default CustomCursor;
