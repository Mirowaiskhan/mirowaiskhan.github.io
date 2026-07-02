import { profile, metrics } from "../data";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-32">
      {/* background layers */}
      <div className="cyber-grid pointer-events-none absolute inset-0 opacity-70" />
      <div className="radial-fade pointer-events-none absolute inset-0" />
      <div
        className="scan-line pointer-events-none absolute inset-x-0 top-0 h-24 opacity-40"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(47,187,168,0.10), transparent)",
        }}
      />

      <div className="mx-auto grid min-h-[calc(100svh-9rem)] max-w-7xl grid-cols-1 items-center gap-12 px-5 pb-28 md:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        {/* LEFT */}
        <div className="reveal">
          <div className="mb-6 inline-flex items-center gap-3 border border-[var(--line-strong)] bg-[rgba(47,187,168,0.05)] px-4 py-2">
            <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-[var(--teal-bright)]" />
            <span className="font-mono text-[0.7rem] tracking-widest text-teal">
              {profile.role.toUpperCase()} {"//"} {profile.version}
            </span>
          </div>

          <h1 className="font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl xl:text-8xl">
            <span className="block text-dim/60 text-2xl font-medium tracking-[0.2em] md:text-3xl">
              MIR OWAIS
            </span>
            <span
              className="glitch glow-teal block"
              data-text="ALI KHAN"
            >
              ALI KHAN
            </span>
          </h1>

          <p className="mt-6 max-w-xl font-mono text-sm leading-relaxed text-dim md:text-base">
            <span className="text-pink">&gt;</span> {profile.tagline}
          </p>

          <p className="mt-3 max-w-xl text-sm text-faint">
            {profile.status}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#experience" className="btn-cyber clip-notch">
              View_Experience
            </a>
            <a href="#contact" className="btn-cyber btn-pink clip-notch">
              Contact
            </a>
            
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download
              className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-dim transition-colors hover:text-teal-bright"
            >
              <span className="text-teal">↳</span> Get_CV
            </a>
          </div>

          {/* Metrics */}
          <div className="mt-12 grid max-w-xl grid-cols-2 gap-px border border-[var(--line)] bg-[var(--line)] sm:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.label} className="bg-[var(--bg)] px-4 py-4">
                <div className="font-display text-2xl font-bold text-teal-bright md:text-3xl">
                  {m.value}
                </div>
                <div className="mt-1 font-mono text-[0.6rem] tracking-widest text-faint">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — profile card */}
        <div className="reveal flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm">
            {/* rotating ring accent */}
            <div className="pointer-events-none absolute -inset-6 opacity-30">
              <div className="rotate-ring h-full w-full rounded-full border border-dashed border-[var(--line-strong)]" />
            </div>

            <div className="panel panel-corner clip-notch group relative overflow-hidden box-glow-teal">
              {/* top bar */}
              <div className="flex items-center justify-between border-b border-[var(--line)] bg-black/40 px-4 py-2 font-mono text-[0.62rem] tracking-widest text-dim">
                <span>USER_PROFILE.exe</span>
                <span className="text-teal">DEPLOYED</span>
              </div>

              {/* photo */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="h-full w-full object-cover object-[center_28%] transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 55%, rgba(11,11,11,0.85) 100%)",
                  }}
                />
                {/* scan */}
                <div
                  className="scan-line pointer-events-none absolute inset-x-0 top-0 h-16"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent, rgba(53,242,214,0.25), transparent)",
                  }}
                />
                {/* corner ticks */}
                <span className="absolute left-3 top-3 h-4 w-4 border-l-2 border-t-2 border-teal" />
                <span className="absolute right-3 top-3 h-4 w-4 border-r-2 border-t-2 border-teal" />

                <div className="absolute bottom-3 left-3 flex items-center gap-2 font-mono text-[0.6rem] tracking-widest">
                  <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-[var(--teal-bright)]" />
                  <span className="text-teal">CySA+ {"//"} CEH {"//"} VALID</span>
                </div>
              </div>

              {/* footer */}
              <div className="space-y-1 border-t border-[var(--line)] bg-black/40 px-4 py-3 font-mono text-[0.7rem]">
                <div className="flex justify-between">
                  <span className="text-faint">LOCATION:</span>
                  <span className="text-dim">{profile.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-faint">CLEARANCE:</span>
                  <span className="text-teal">U.S. AUTHORIZED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <div className="pointer-events-none absolute bottom-14 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="font-mono text-[0.6rem] tracking-[0.3em] text-faint">SCROLL</span>
        <span className="h-8 w-px animate-pulse bg-gradient-to-b from-[var(--teal)] to-transparent" />
      </div>
    </section>
  );
}
