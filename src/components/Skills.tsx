import SectionHeading from "./SectionHeading";
import { skillGroups } from "../data";

const marqueeItems = [
  "SPLUNK",
  "IBM QRADAR",
  "TENABLE NESSUS",
  "RAPID7 INSIGHTVM",
  "PALO ALTO",
  "CISCO ASA",
  "AWS",
  "AZURE",
  "SAILPOINT",
  "CROWDSTRIKE",
  "BURP SUITE",
  "METASPLOIT",
  "NIST 800-53",
  "PCI DSS",
  "ISO 27001",
];

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="cyber-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading index="02" kicker="Arsenal // Weaponry Loadout" title="Skills" />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <div
              key={group.key}
              className="reveal panel clip-notch group flex flex-col transition-all duration-300 hover:box-glow-teal"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="flex items-center justify-between border-b border-[var(--line)] bg-black/40 px-4 py-2.5">
                <span className="font-mono text-[0.62rem] tracking-widest text-teal">
                  ./{group.key.toLowerCase()}
                </span>
                <span className="font-mono text-[0.6rem] text-faint">
                  {String(group.items.length).padStart(2, "0")} MODULES
                </span>
              </div>

              <div className="flex flex-1 flex-col p-4">
                <h3 className="mb-4 font-display text-lg font-semibold text-[var(--text)]">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 border-t border-[var(--line)] px-4 py-2 font-mono text-[0.6rem] tracking-widest">
                <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-[var(--teal-bright)]" />
                <span className="text-faint">LOADED {"//"} READY</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* marquee */}
      <div className="mt-16 overflow-hidden border-y border-[var(--line)] bg-black/40 py-4">
        <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: static duplicated marquee list
            <span key={`${item}-${i}`} className="flex items-center gap-8 font-display text-xl font-semibold uppercase tracking-wide text-faint">
              {item}
              <span className="text-teal">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
