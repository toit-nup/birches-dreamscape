import { useState } from "react";
import type { Stanza, WordNote } from "@/lib/birches";
import { wordNotes } from "@/lib/birches";

const notesByWord = new Map(wordNotes.map((n) => [n.word.toLowerCase(), n]));
const pattern = new RegExp(
  `\\b(${wordNotes.map((n) => n.word).join("|")})\\b`,
  "gi",
);

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

function WordPopover({ note, onClose }: { note: WordNote; onClose: () => void }) {
  return (
    <div className="glass-panel absolute left-1/2 top-full z-30 mt-3 w-[min(20rem,70vw)] -translate-x-1/2 animate-scale-in space-y-3 rounded-2xl p-5 text-left">
      <div className="flex items-baseline justify-between gap-3">
        <span className="font-display text-lg italic text-glow">{note.word}</span>
        <button
          onClick={onClose}
          className="font-body text-[0.6rem] uppercase tracking-[0.2em] text-cream/50 transition-colors hover:text-cream"
        >
          close
        </button>
      </div>
      <Row label="Theme" value={note.theme} />
      <Row label="Symbolism" value={note.symbolism} />
      <Row label="Literary device" value={note.device} />
      <Row label="Authorial choice" value={note.choice} />
      <Row label="Reader effect" value={note.effect} />
      <Row label="IB interpretation" value={note.ib} />
    </div>
  );
}

function PoemLine({
  line,
  openWord,
  setOpenWord,
  lineIndex,
}: {
  line: string;
  openWord: string | null;
  setOpenWord: (v: string | null) => void;
  lineIndex: number;
}) {
  const parts = line.split(pattern);
  return (
    <span className="block">
      {parts.map((part, i) => {
        const note = notesByWord.get(part.toLowerCase());
        if (!note) return <span key={i}>{part}</span>;
        const key = `${lineIndex}-${i}`;
        return (
          <span key={i} className="relative inline-block">
            <button
              onClick={() => setOpenWord(openWord === key ? null : key)}
              className="glow-word"
            >
              {part}
            </button>
            {openWord === key && (
              <WordPopover note={note} onClose={() => setOpenWord(null)} />
            )}
          </span>
        );
      })}
    </span>
  );
}

export function StanzaPanel({
  stanza,
  onClose,
}: {
  stanza: Stanza;
  onClose: () => void;
}) {
  const [openWord, setOpenWord] = useState<string | null>(null);

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center p-4 sm:p-8">
      <div
        className="absolute inset-0 animate-fade-in bg-ink/40"
        onClick={onClose}
        aria-hidden
      />
      <div className="glass-panel relative max-h-[86vh] w-[min(56rem,100%)] animate-scale-in overflow-y-auto rounded-[2rem] p-7 sm:p-10">
        <button
          onClick={onClose}
          className="absolute right-6 top-6 font-body text-[0.62rem] uppercase tracking-[0.28em] text-cream/50 transition-colors hover:text-cream"
        >
          close
        </button>

        <div className="font-body text-[0.62rem] uppercase tracking-[0.32em] text-glow/80">
          Stanza {stanza.id} — {stanza.label}
        </div>

        <div className="mt-6 grid gap-10 md:grid-cols-[1.05fr_1fr]">
          <div className="font-display text-[1.12rem] leading-[2.1] tracking-wide text-cream">
            {stanza.text.split("\n").map((line, i) => (
              <PoemLine
                key={i}
                line={line}
                lineIndex={i}
                openWord={openWord}
                setOpenWord={setOpenWord}
              />
            ))}
          </div>

          <div className="space-y-5 border-cream/10 md:border-l md:pl-10">
            <Row label="Summary" value={stanza.summary} />
            <Row label="Themes" value={stanza.themes} />
            <Row label="Symbolism" value={stanza.symbolism} />
            <Row label="Literary devices" value={stanza.devices} />
            <Row label="Authorial choices" value={stanza.choices} />
            <Row label="Reader effect" value={stanza.effect} />
            <Row label="IB interpretation" value={stanza.ib} />
          </div>
        </div>
      </div>
    </div>
  );
}
