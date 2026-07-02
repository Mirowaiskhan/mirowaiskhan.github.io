import SectionHeading from "./SectionHeading";
import { certifications } from "../data";

export default function Certifications() {
  return (
    <section id="certs" className="section-pad relative">
      <div className="cyber-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="04"
          kicker="Credentials // Verified Clearances"
          title="Certifications"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {certifications.map((cert, i) => (
            <div
              key={cert.title}
              className="reveal panel panel-corner clip-notch group relative overflow-hidden p-6 transition-all duration-300 hover:box-glow-teal"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* watermark seal */}
              <div className="pointer-events-none absolute -right-6 -top-6 opacity-[0.06] transition-opacity group-hover:opacity-[0.12]">
                <span className="font-display text-[8rem] font-bold text-teal">◈</span>
              </div>

              <div className="relative flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center border border-[var(--line-strong)] bg-[rgba(47,187,168,0.06)] font-display text-2xl font-bold text-teal-bright">
                  {cert.issuer.slice(0, 2).toUpperCase()}
                </div>
                <div className="flex items-center gap-2 border border-[var(--teal)] px-3 py-1 font-mono text-[0.6rem] tracking-widest text-teal">
                  <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-[var(--teal-bright)]" />
                  {cert.status}
                </div>
              </div>

              <h3 className="relative mt-6 font-display text-xl font-bold text-[var(--text)]">
                {cert.title}
              </h3>
              <div className="relative mt-1 font-mono text-sm text-teal-bright">
                {cert.issuer}
              </div>
              <p className="relative mt-3 font-mono text-xs text-dim">{cert.detail}</p>

              <div className="relative mt-6 flex items-center justify-between border-t border-dashed border-[var(--line)] pt-4 font-mono text-[0.62rem] tracking-widest text-faint">
                <span>CREDENTIAL_ID: •••• {(1000 + i * 337).toString(16).toUpperCase()}</span>
                <span className="text-teal">✓ AUTHENTICATED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
