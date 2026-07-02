import { useEffect, useRef, useState } from "react";
import SectionHeading from "./SectionHeading";
import { summary, summaryPoints, education, telemetry, profile } from "../data";

function TelemetryFeed() {
  const [lines, setLines] = useState<string[]>([]);
  const idx = useRef(0);
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const push = () => {
      const t = new Date().toLocaleTimeString("en-US", { hour12: true });
      const msg = telemetry[idx.current % telemetry.length];
      idx.current += 1;
      setLines((prev) => [...prev.slice(-14), `[${t}] ${msg}`]);
    };
    push();
    const id = setInterval(push, 2200);
    return () => clearInterval(id);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: re-run when a new log line arrives
  useEffect(() => {
    if (scroller.current) scroller.current.scrollTop = scroller.current.scrollHeight;
  }, [lines]);

  const colorFor = (l: string) => {
    if (l.includes("[security]")) return "text-pink";
    if (l.includes("[heartbeat]")) return "text-faint";
    if (l.includes("[DONE]") || l.includes("[OK]")) return "text-teal";
    return "text-dim";
  };

  return (
    <div className="panel clip-notch flex h-full flex-col">
      <div className="flex items-center justify-between border-b border-[var(--line)] bg-black/40 px-4 py-2.5 font-mono text-[0.62rem] tracking-widest">
        <span className="flex items-center gap-2 text-teal">
          <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-[var(--teal-bright)]" />
          LIVE_TELEMETRY_FEED
        </span>
        <span className="text-faint">tail -f /var/log/soc</span>
      </div>
      <div
        ref={scroller}
        className="h-56 overflow-y-auto px-4 py-3 font-mono text-[0.68rem] leading-relaxed"
      >
        {lines.map((l, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: append-only log feed
          <div key={i} className={colorFor(l)}>
            {l}
          </div>
        ))}
        <span className="inline-block h-3 w-1.5 translate-y-[2px] bg-[var(--teal-bright)] cursor-blink" />
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading index="01" kicker="USER_PROFILE: DEPLOYED" title="About.me" />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.3fr_1fr]">
          {/* whoami terminal */}
          <div className="reveal panel panel-corner clip-notch flex flex-col">
            <div className="flex items-center gap-2 border-b border-[var(--line)] bg-black/40 px-4 py-2.5">
              <span className="h-3 w-3 rounded-full bg-[var(--pink)]/70" />
              <span className="h-3 w-3 rounded-full bg-[var(--yellow)]/70" />
              <span className="h-3 w-3 rounded-full bg-[var(--teal)]/70" />
              <span className="ml-3 font-mono text-[0.62rem] tracking-widest text-dim">
                root@identity:~
              </span>
            </div>
            <div className="flex-1 px-6 py-6 font-mono text-sm">
              <p className="text-teal">
                <span className="text-faint">$</span> whoami --verbose
              </p>
              <p className="mt-4 leading-relaxed text-dim">{summary}</p>

              <ul className="mt-5 space-y-2.5">
                {summaryPoints.map((p) => (
                  <li key={p} className="flex gap-3 leading-relaxed text-[var(--text)]">
                    <span className="mt-0.5 shrink-0 text-teal">▹</span>
                    <span className="text-[0.82rem] text-dim">{p}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-teal">
                <span className="text-faint">$</span> _
                <span className="cursor-blink">▌</span>
              </p>
            </div>
          </div>

          {/* right column */}
          <div className="flex flex-col gap-6">
            {/* education */}
            <div className="reveal panel clip-notch">
              <div className="border-b border-[var(--line)] bg-black/40 px-4 py-2.5 font-mono text-[0.62rem] tracking-widest text-dim">
                ~ ls -la ./education/
              </div>
              <div className="divide-y divide-[var(--line)]">
                {education.map((e) => (
                  <div key={e.file} className="group flex items-start gap-3 px-5 py-4 transition-colors hover:bg-[rgba(47,187,168,0.05)]">
                    <span className="mt-1 text-teal">▤</span>
                    <div>
                      <div className="font-mono text-sm text-teal-bright">{e.file}</div>
                      <div className="mt-1 text-sm font-semibold text-[var(--text)]">{e.degree}</div>
                      <div className="text-xs text-dim">{e.school}</div>
                      <div className="mt-1 text-[0.7rem] text-faint">{e.detail}</div>
                    </div>
                  </div>
                ))}
                <div className="flex items-center justify-between px-5 py-3 font-mono text-[0.68rem]">
                  <span className="text-faint">SHELL:</span>
                  <span className="text-dim">ZSH {"//"} BASH {"//"} PS</span>
                </div>
              </div>
            </div>

            {/* telemetry */}
            <div className="reveal flex-1">
              <TelemetryFeed />
            </div>
          </div>
        </div>

        {/* contact strip */}
        <div className="reveal mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 border border-[var(--line)] bg-black/30 px-6 py-4 font-mono text-xs">
          <a href={`mailto:${profile.email}`} className="text-dim transition-colors hover:text-teal-bright">
            <span className="text-teal">✉</span> {profile.email}
          </a>
          <a href={`tel:${profile.phone}`} className="text-dim transition-colors hover:text-teal-bright">
            <span className="text-teal">☎</span> {profile.phone}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-dim transition-colors hover:text-teal-bright">
            <span className="text-teal">in</span> /{profile.linkedinHandle}
          </a>
          <span className="text-dim">
            <span className="text-teal">◎</span> {profile.location}
          </span>
        </div>
      </div>
    </section>
  );
}
