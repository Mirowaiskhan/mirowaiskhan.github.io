import { useEffect, useState } from "react";

function useClock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return now;
}

function useUptime() {
  const [secs, setSecs] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setSecs((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, []);
  const hh = String(Math.floor(secs / 3600)).padStart(2, "0");
  const mm = String(Math.floor((secs % 3600) / 60)).padStart(2, "0");
  const ss = String(secs % 60).padStart(2, "0");
  return `${hh}:${mm}:${ss}`;
}

export default function StatusBar() {
  const now = useClock();
  const uptime = useUptime();
  const [latency, setLatency] = useState(18);
  const pid = 2991;

  useEffect(() => {
    const id = setInterval(() => setLatency(10 + Math.floor(Math.random() * 22)), 2400);
    return () => clearInterval(id);
  }, []);

  const time = now.toLocaleTimeString("en-US", { hour12: false });

  const Cell = ({
    icon,
    label,
    value,
    highlight,
  }: {
    icon: string;
    label?: string;
    value: string;
    highlight?: boolean;
  }) => (
    <div className="flex items-center gap-2 whitespace-nowrap px-3 md:px-4">
      <span className={`text-[0.65rem] ${highlight ? "text-teal" : "text-faint"}`}>{icon}</span>
      {label && <span className="hidden text-faint sm:inline">{label}</span>}
      <span className={highlight ? "text-teal" : "text-dim"}>{value}</span>
    </div>
  );

  return (
    <div className="fixed bottom-0 left-0 z-40 w-full border-t border-[var(--line-strong)] bg-black/85 backdrop-blur-md">
      <div className="flex items-center justify-between overflow-x-auto font-mono text-[0.68rem] tracking-wider">
        <div className="flex items-center divide-x divide-[var(--line)]">
          <Cell icon="◈" value="AES-256" highlight />
          <Cell icon="⛁" value={`${latency}MS`} />
          <Cell icon="◷" label="SYS_TIME:" value={time} />
        </div>
        <div className="flex items-center divide-x divide-[var(--line)]">
          <div className="flex items-center gap-2 px-3 md:px-4">
            <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-[var(--teal-bright)]" />
            <span className="text-teal">STATUS: OPERATIONAL</span>
          </div>
          <div className="hidden items-center gap-2 bg-[rgba(47,187,168,0.08)] px-4 py-2 md:flex">
            <span className="text-faint">UPTIME:</span>
            <span className="text-teal tabular-nums">{uptime}</span>
          </div>
          <Cell icon="❋" label="KERNEL_PID:" value={String(pid)} />
        </div>
      </div>
    </div>
  );
}
