import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import bg from "@/assets/birches-bg.png.asset.json";
import { fireflyItems, isInfoPanel, isStanza } from "@/lib/birches";
import { InfoPanel } from "@/components/InfoPanel";
import { StanzaPanel } from "@/components/StanzaPanel";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Birches — An Interactive Reading of Robert Frost" },
      {
        name: "description",
        content:
          "Step into Robert Frost's memory: an interactive, firefly-lit reading of \"Birches\" with stanza analysis, symbolism and IB literary interpretation.",
      },
      { property: "og:title", content: "Birches — An Interactive Reading of Robert Frost" },
      {
        property: "og:description",
        content:
          "A calm, dreamlike exploration of Frost's \"Birches\" — six fireflies, six stanzas, and the literature beneath them.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Birches,
});

const particles = Array.from({ length: 26 }, (_, i) => ({
  left: (i * 37) % 100,
  top: (i * 61) % 100,
  size: 1 + ((i * 7) % 3),
  delay: (i % 9) * 1.4,
  duration: 12 + ((i * 5) % 11),
}));

function Birches() {
  const [active, setActive] = useState<number | string | null>(null);
  const [hint, setHint] = useState(true);
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 18;
      const y = (e.clientY / window.innerHeight - 0.5) * 12;
      sceneRef.current?.style.setProperty("--px", `${-x}px`);
      sceneRef.current?.style.setProperty("--py", `${-y}px`);
    };
    window.addEventListener("mousemove", onMove);
    const t = setTimeout(() => setHint(false), 7000);
    return () => {
      window.removeEventListener("mousemove", onMove);
      clearTimeout(t);
    };
  }, []);

  const activeItem = fireflyItems.find((item) => item.id === active) ?? null;

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-ink">
      <div
        ref={sceneRef}
        className="absolute inset-0 transition-transform duration-700 ease-out"
        style={{ transform: "translate3d(var(--px, 0), var(--py, 0), 0)" }}
      >
        <div
          className="scene-sway absolute -inset-8 bg-cover bg-center"
          style={{ backgroundImage: `url(${bg.url})` }}
          role="img"
          aria-label="A child on a rope swing beneath a birch tree, overlooking a valley at sunset"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/25 via-transparent to-ink/45" />

        {particles.map((p, i) => (
          <span
            key={i}
            className="firefly-drift pointer-events-none absolute rounded-full bg-glow/60 blur-[1px]"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      <h1 className="pointer-events-none absolute left-1/2 top-9 z-10 -translate-x-1/2 text-center font-display text-3xl tracking-[0.4em] text-cream/90 drop-shadow-[0_2px_18px_rgba(0,0,0,0.7)] sm:text-4xl">
        BIRCHES
      </h1>
      <p className="pointer-events-none absolute left-1/2 top-[4.9rem] z-10 -translate-x-1/2 text-center font-body text-[0.58rem] uppercase tracking-[0.42em] text-cream/60 sm:top-[5.4rem]">
        Robert Frost
      </p>

      {fireflyItems.map((item) => {
        const label = isStanza(item) ? `Stanza ${item.id}: ${item.label}` : item.label;
        return (
          <button
            key={item.id}
            onClick={() => {
              setActive(item.id);
              setHint(false);
            }}
            aria-label={label}
            className="group absolute z-10 h-12 w-12 -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${item.x}%`, top: `${item.y}%` }}
          >
            <span className="firefly-drift absolute inset-0 flex items-center justify-center">
              <span className="firefly-core absolute h-9 w-9 rounded-full bg-glow/25 blur-lg transition-all duration-500 group-hover:h-14 group-hover:w-14 group-hover:bg-glow/45" />
              <span className="relative h-[7px] w-[7px] rounded-full bg-cream shadow-[0_0_16px_6px_rgba(255,214,140,0.65)] transition-transform duration-500 group-hover:scale-150" />
            </span>
            <span className="pointer-events-none absolute left-1/2 top-full -translate-x-1/2 whitespace-nowrap font-body text-[0.55rem] uppercase tracking-[0.28em] text-cream/0 transition-all duration-500 group-hover:text-cream/80">
              {isStanza(item) ? `Stanza ${item.id}` : item.label}
            </span>
          </button>
        );
      })}

      {hint && !activeItem && (
        <p className="pointer-events-none absolute bottom-10 left-1/2 z-10 -translate-x-1/2 animate-fade-in font-body text-[0.6rem] uppercase tracking-[0.34em] text-cream/55">
          follow the fireflies
        </p>
      )}

      {activeItem && isStanza(activeItem) && (
        <StanzaPanel stanza={activeItem} onClose={() => setActive(null)} />
      )}
      {activeItem && isInfoPanel(activeItem) && (
        <InfoPanel panel={activeItem} onClose={() => setActive(null)} />
      )}
    </main>
  );
}

