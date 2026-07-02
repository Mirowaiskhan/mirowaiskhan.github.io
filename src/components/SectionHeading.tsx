interface SectionHeadingProps {
  kicker: string;
  title: string;
  index: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  kicker,
  title,
  index,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`reveal mb-12 flex flex-col gap-3 ${
        align === "center" ? "items-center text-center" : "items-start"
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="text-teal font-mono text-xs">{index}</span>
        <span className="h-px w-10 bg-[var(--line-strong)]" />
        <span className="label text-pink">{kicker}</span>
      </div>
      <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-[var(--text)] md:text-5xl lg:text-6xl">
        {title}
      </h2>
    </div>
  );
}
