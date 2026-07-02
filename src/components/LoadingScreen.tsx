import { useEffect, useRef, useState } from "react";

const BOOT_LINES = [
  "> INITIALIZING SECURE BOOT SEQUENCE [KERNEL V9.2.1]...",
  "> VERIFYING CRYPTOGRAPHIC SIGNATURES: [OK]",
  "> ALLOCATING MEMORY RESOURCES [16TB HBM3]...",
  "> LOADING ENCRYPTION MODULES [AES-256-GCM]...",
  "> MOUNTING SECURE DRIVE VOLUMES [ZFS/ENCRYPTED]...",
  "> INITIATING HYPER-THREADED NETWORK PROTOCOLS...",
  "> RUNNING ZERO-DAY VULNERABILITY SCANNERS...",
  "> ESTABLISHING SECURE CHANNEL [0x8F9A]... [OK]",
];

export default function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [lines, setLines] = useState<string[]>([]);
  const doneRef = useRef(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 2600;
    let raf = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else if (!doneRef.current) {
        doneRef.current = true;
        setTimeout(onDone, 450);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setLines((prev) => (i < BOOT_LINES.length ? [...prev, BOOT_LINES[i++]] : prev));
      if (i >= BOOT_LINES.length) clearInterval(id);
    }, 300);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--bg)] cyber-grid">
      <div className="radial-fade pointer-events-none absolute inset-0" />

      {/* Logo */}
      <div className="relative mb-14 flex items-center gap-2 md:gap-4">
        <span className="glitch font-display text-6xl font-bold text-white glow-pink md:text-8xl" data-text="CYBER">
          CYBER
        </span>
        <span className="h-12 w-[3px] bg-[var(--pink)] md:h-20" />
        <span className="font-display text-6xl font-bold text-white glow-teal md:text-8xl">
          LINK
        </span>
      </div>

      {/* Progress */}
      <div className="w-[min(90vw,780px)] px-2">
        <div className="flex items-center gap-4">
          <span className="text-teal font-mono text-lg">[</span>
          <div className="relative h-2.5 flex-1 overflow-hidden border border-[var(--line-strong)] bg-black/60">
            <div
              className="h-full transition-[width] duration-75"
              style={{
                width: `${progress}%`,
                background:
                  "linear-gradient(90deg, var(--magenta), var(--pink), #ff9a3c, var(--teal-bright))",
              }}
            />
          </div>
          <span className="text-teal font-mono text-lg">]</span>
          <span className="text-yellow font-mono text-xl font-bold tabular-nums">{progress}%</span>
        </div>

        <div className="mt-4 flex items-center justify-between border-b border-dashed border-[var(--line)] pb-3 font-mono text-[0.7rem] tracking-widest">
          <span className="text-dim">SYS_OPS {"//"} AUTHENTICATING</span>
          <span className="text-teal">SECURE_CHANNEL: 0x8F9A</span>
        </div>

        {/* Boot log */}
        <div className="mt-8 min-h-[180px] border-l-2 border-[var(--line-strong)] pl-4 font-mono text-[0.72rem] leading-relaxed text-dim md:text-sm">
          {lines.map((l, idx) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: static ordered boot log
            <div key={idx} className="opacity-90">
              {l}
            </div>
          ))}
          <span className="inline-block h-4 w-2 translate-y-[3px] bg-[var(--teal-bright)] cursor-blink" />
        </div>
      </div>
    </div>
  );
}
