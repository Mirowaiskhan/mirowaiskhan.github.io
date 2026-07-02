import SectionHeading from "./SectionHeading";
import { profile } from "../data";

const nodes = [
  {
    label: "EMAIL PROTOCOL",
    value: profile.email,
    href: `mailto:${profile.email}`,
    glyph: "✉",
  },
  {
    label: "LINKED_IN NODE",
    value: `/${profile.linkedinHandle}`,
    href: profile.linkedin,
    glyph: "in",
  },
  {
    label: "VOICE CHANNEL",
    value: profile.phone,
    href: `tel:${profile.phone}`,
    glyph: "☎",
  },
  {
    label: "PHYSICAL NODE",
    value: profile.location,
    href: "#top",
    glyph: "◎",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-pad relative pb-32">
      <div className="radial-fade pointer-events-none absolute inset-0" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="05"
          kicker="Communication Protocol"
          title="Secure Transmission"
          align="center"
        />

        <div className="reveal mx-auto mb-12 flex max-w-md items-center justify-center gap-3 border border-[var(--line)] bg-black/30 px-5 py-3 font-mono text-[0.7rem] tracking-widest text-dim">
          <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-[var(--teal-bright)]" />
          INITIALIZE CONNECTION {"//"} WAITING FOR INPUT
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {nodes.map((n, i) => (
            <a
              key={n.label}
              href={n.href}
              target={n.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="reveal panel panel-corner clip-notch group flex flex-col items-center gap-3 p-6 text-center transition-all duration-300 hover:box-glow-teal"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <span className="flex h-12 w-12 items-center justify-center border border-[var(--line-strong)] font-display text-lg font-bold text-teal-bright transition-colors group-hover:bg-[rgba(47,187,168,0.12)]">
                {n.glyph}
              </span>
              <div className="label text-pink">{n.label}</div>
              <div className="break-words font-mono text-[0.78rem] leading-snug text-[var(--text)] transition-colors group-hover:text-teal-bright">
                {n.value}
              </div>
            </a>
          ))}
        </div>

        {/* big CTA */}
        <div className="reveal mx-auto mt-14 max-w-2xl text-center">
          <a
            href={`mailto:${profile.email}`}
            className="btn-cyber clip-notch inline-block px-10 py-4 text-sm"
          >
            &gt;_ Establish_Secure_Channel
          </a>
        </div>
      </div>

      {/* footer terminal */}
      <footer className="mx-auto mt-20 max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-center justify-between gap-3 border-t border-[var(--line)] pt-6 font-mono text-[0.68rem] tracking-widest text-faint md:flex-row">
          <span>
            © {new Date().getFullYear()} {profile.name.toUpperCase()} {"//"} ALL_SYSTEMS_NOMINAL
          </span>
          <span className="flex items-center gap-2">
            <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-[var(--teal-bright)]" />
            ENCRYPTED · AES-256-GCM
          </span>
        </div>
      </footer>
    </section>
  );
}
