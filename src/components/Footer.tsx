import Link from "next/link";
import { getGameConfig } from "@/lib/data";

const config = getGameConfig();

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[rgba(6,8,13,0.96)] py-10 text-sm text-slate-400">
      <div className="shell grid gap-8 md:grid-cols-[1.5fr_1fr]">
        <div>
          <p className="font-display text-lg font-black text-white">{config.seo.siteTitle}</p>
          <p className="mt-3 max-w-2xl leading-7">
            Fan-made companion site for Defend your base from 67. This project is not affiliated with Roblox Corporation
            or {config.game.developer}. Strategy pages are editorial and separate from verified Roblox listing details.
          </p>
        </div>
        <div className="grid gap-3">
          <Link href="/about" className="hover:text-white">
            About
          </Link>
          <Link href="/terms" className="hover:text-white">
            Terms
          </Link>
          <Link href="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </Link>
          <a href={config.links.roblox} target="_blank" rel="noreferrer" className="hover:text-white">
            Official Roblox Page
          </a>
        </div>
      </div>
    </footer>
  );
}
