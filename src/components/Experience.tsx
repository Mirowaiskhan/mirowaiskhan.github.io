import SectionHeading from "./SectionHeading";
import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="03"
          kicker="Field Deployment // Mission Log"
          title="Experience"
        />

        <div className="relative">
          {/* timeline spine */}
          <div className="absolute left-3 top-2 hidden h-full w-px bg-gradient-to-b from-[var(--teal)] via-[var(--line-strong)] to-transparent md:block" />

          <div className="space-y-8">
            {experience.map((job, i) => (
              <div key={job.company} className="reveal relative md:pl-14">
                {/* node */}
                <div className="absolute left-0 top-6 hidden md:block">
                  <span className="relative flex h-6 w-6 items-center justify-center">
                    <span className="absolute inline-flex h-full w-full rounded-full border border-[var(--line-strong)]" />
                    <span
                      className={`inline-block h-2.5 w-2.5 rounded-full ${
                        job.status === "ACTIVE"
                          ? "bg-[var(--teal-bright)] pulse-dot"
                          : "bg-[var(--text-faint)]"
                      }`}
                    />
                  </span>
                </div>

                <div className="panel panel-corner clip-notch overflow-hidden transition-all duration-300 hover:box-glow-teal">
                  {/* header */}
                  <div className="flex flex-col gap-3 border-b border-[var(--line)] bg-black/40 px-6 py-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="font-display text-xl font-bold text-[var(--text)] md:text-2xl">
                          {job.role}
                        </h3>
                        <span
                          className={`border px-2 py-0.5 font-mono text-[0.58rem] tracking-widest ${
                            job.status === "ACTIVE"
                              ? "border-[var(--teal)] text-teal"
                              : "border-[var(--line)] text-faint"
                          }`}
                        >
                          {job.status}
                        </span>
                      </div>
                      <div className="mt-1 font-mono text-sm text-teal-bright">
                        @ {job.company}
                        <span className="text-faint"> {"//"} {job.location}</span>
                      </div>
                    </div>
                    <div className="shrink-0 font-mono text-xs tracking-widest text-dim">
                      <span className="text-teal">◷</span> {job.period}
                    </div>
                  </div>

                  {/* highlights */}
                  <div className="px-6 py-5">
                    <ul className="space-y-3">
                      {job.highlights.map((h) => (
                        <li key={h} className="flex gap-3 text-sm leading-relaxed">
                          <span className="mt-1 shrink-0 font-mono text-teal">▸</span>
                          <span className="text-dim">{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* stack */}
                    <div className="mt-6 border-t border-dashed border-[var(--line)] pt-4">
                      <div className="mb-3 font-mono text-[0.6rem] tracking-widest text-faint">
                        ENVIRONMENT {"//"}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {job.stack.map((s) => (
                          <span key={s} className="chip">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
