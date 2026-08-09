import type { InfoPanel as InfoPanelData } from "@/lib/birches";

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1">
      <div className="font-body text-[0.6rem] uppercase tracking-[0.22em] text-glow/70">
        {label}
      </div>
      <p className="font-body text-[0.82rem] leading-relaxed text-cream/80">{value}</p>
    </div>
  );
}

function AtlasList({
  label,
  marker,
  items,
}: {
  label: string;
  marker: string;
  items: string[];
}) {
  return (
    <div className="space-y-1.5">
      <div className="font-body text-[0.55rem] uppercase tracking-[0.24em] text-glow/70">
        {label}
      </div>
      <ul className="space-y-1">
        {items.map((item) => (
          <li
            key={item}
            className="font-body text-[0.74rem] leading-snug text-cream/75"
          >
            <span className="mr-1.5 text-glow/60">{marker}</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function LiteraryAtlas({ panel }: { panel: InfoPanelData }) {
  const { atlas } = panel;
  return (
    <aside className="space-y-5 border-cream/10 md:border-r md:pr-7">
      <div className="font-body text-[0.58rem] uppercase tracking-[0.28em] text-cream/60">
        Literary Atlas
      </div>
      <AtlasList label="Main themes" marker="▸" items={atlas.themes} />
      <AtlasList label="Key symbols" marker="◉" items={atlas.symbols} />
      <AtlasList label="Key devices" marker="✦" items={atlas.devices} />
      <div className="space-y-1">
        <div className="font-body text-[0.55rem] uppercase tracking-[0.24em] text-glow/70">
          Authorial purpose
        </div>
        <p className="font-body text-[0.74rem] leading-relaxed text-cream/75">
          {atlas.purpose}
        </p>
      </div>
      <div className="space-y-1">
        <div className="font-body text-[0.55rem] uppercase tracking-[0.24em] text-glow/70">
          Big idea
        </div>
        <p className="font-display text-[0.86rem] italic leading-relaxed text-cream/85">
          {atlas.bigIdea}
        </p>
      </div>
    </aside>
  );
}

export function InfoPanel({
  panel,
  onClose,
}: {
  panel: InfoPanelData;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center p-4 sm:p-8">
      <div
        className="absolute inset-0 animate-fade-in bg-ink/40"
        onClick={onClose}
        aria-hidden
      />
      <div className="glass-panel relative max-h-[86vh] w-[min(64rem,100%)] animate-scale-in overflow-y-auto rounded-[2rem] p-7 sm:p-10">
        <button
          onClick={onClose}
          className="absolute right-6 top-6 font-body text-[0.62rem] uppercase tracking-[0.28em] text-cream/50 transition-colors hover:text-cream"
        >
          close
        </button>

        <div className="font-body text-[0.62rem] uppercase tracking-[0.32em] text-glow/80">
          {panel.label}
        </div>
        <h2 className="mt-2 font-display text-2xl text-cream sm:text-3xl">
          {panel.title}
        </h2>
        <p className="mt-1 font-body text-[0.75rem] italic tracking-wide text-cream/60">
          {panel.subtitle}
        </p>

        <div className="mt-6 grid gap-10 md:grid-cols-[0.62fr_1fr]">
          <LiteraryAtlas panel={panel} />

          <div className="space-y-5 border-cream/10 md:border-l md:pl-10">
            {panel.sections.map((section) => (
              <Row
                key={section.heading}
                label={section.heading}
                value={section.content}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
