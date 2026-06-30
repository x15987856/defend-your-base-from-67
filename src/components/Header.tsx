import Link from "next/link";
import { getGameConfig } from "@/lib/data";

const config = getGameConfig();

const nav = [
  ["Planner", "/calculator"],
  ["Codes", "/codes"],
  ["Tier List", "/tier-list"],
  ["Guide", "/beginner-guide"],
  ["Wiki", "/wiki"],
  ["Updates", "/updates"]
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(8,12,19,0.82)] backdrop-blur">
      <div className="shell flex min-h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 text-white">
          <span className="brand-mark">
            <span>67</span>
          </span>
          <div>
            <div className="text-xs font-black uppercase tracking-[0.24em] text-[var(--accent-soft)]">Defense Hub</div>
            <div className="font-display text-lg font-black">{config.game.name}</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 text-sm font-semibold text-slate-200 xl:flex">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white">
              {label}
            </Link>
          ))}
        </nav>
        <a
          href={config.links.roblox}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-black text-slate-950 transition hover:brightness-110"
        >
          Play on Roblox
        </a>
      </div>
    </header>
  );
}
