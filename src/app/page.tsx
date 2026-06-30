import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { getCodes, getGameConfig, getTierItems, getUpdates } from "@/lib/data";
import { buildBreadcrumbSchema } from "@/lib/seo";

const config = getGameConfig();
const codes = getCodes();
const priorities = getTierItems().slice(0, 4);
const updates = getUpdates().slice(0, 3);

const pillars = [
  {
    title: "Gate-first survival",
    text: "This game is brutally simple at first glance: if the gate breaks, your run breaks. The site centers that reality instead of burying it in fluff."
  },
  {
    title: "Turret scaling that makes sense",
    text: "Damage matters, but only when placement and coverage keep 67 under control before the base gets touched."
  },
  {
    title: "Launch-ready structure",
    text: "The first pages players need are already here: planner, upgrade tier list, beginner route, and a code page that stays honest."
  }
];

const quickFacts = [
  ["Developer", config.game.developer],
  ["Genre", config.game.genre],
  ["Roblox ID", config.game.robloxId],
  ["Verified", config.game.lastVerified]
];

export default function HomePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ name: "Home", item: config.seo.baseUrl }]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <PageHero
        eyebrow="Launch-ready Roblox companion"
        title="Defend your base from 67 guide, planner, and upgrade priorities."
        text="Built around the core loop the Roblox page actually describes: upgrade your gate, scale your turrets, and survive 67 before the defense buckles."
      />

      <section className="shell py-10 md:py-14">
        <div className="grid gap-4 md:grid-cols-4">
          {quickFacts.map(([label, value]) => (
            <div key={label} className="card p-5">
              <div className="text-xs font-black uppercase tracking-[0.2em] text-[var(--accent-soft)]">{label}</div>
              <div className="mt-3 text-lg font-black text-white">{value}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="shell pb-8 md:pb-12">
        <div className="card hero-panel grid gap-8 p-7 md:grid-cols-[1.15fr_0.85fr] md:p-10">
          <div>
            <p className="eyebrow text-xs font-black text-[var(--accent-soft)]">What ships first</p>
            <h2 className="section-title mt-3 text-white">A defense stack that matches the game instead of forcing generic simulator pages.</h2>
            <p className="prose-copy mt-4 max-w-3xl">
              The site starts with the routes that help immediately: a defense planner, a tier list for upgrade order,
              a beginner guide for surviving early pressure, and a wiki hub for gate, turret, and wave concepts.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/calculator" className="rounded-full bg-[var(--accent)] px-5 py-3 font-black text-slate-950">
                Open Defense Planner
              </Link>
              <Link href="/beginner-guide" className="rounded-full border border-white/15 px-5 py-3 font-semibold text-white">
                Beginner Guide
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-[26px] border border-white/10 bg-white/5 p-5">
                <h3 className="font-display text-2xl font-black text-white">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="shell py-8 md:py-12">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="card p-7">
            <p className="eyebrow text-xs font-black text-[var(--accent-soft)]">Code status</p>
            <h2 className="mt-3 font-display text-4xl font-black text-white">No fake redeem spam.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              If there are no confirmed public codes, the site says that plainly. Trust is more useful than padding the
              page with nonsense.
            </p>
            <div className="mt-6 rounded-[24px] border border-white/10 bg-black/20 p-5">
              <div className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">Checked</div>
              <div className="mt-2 text-xl font-black text-white">{codes.lastChecked}</div>
              <div className="mt-3 text-sm text-slate-300">{codes.notes[0]}</div>
            </div>
          </div>

          <div className="card p-7">
            <p className="eyebrow text-xs font-black text-[var(--accent-soft)]">Priority pages</p>
            <h2 className="mt-3 font-display text-4xl font-black text-white">The best upgrade decisions are already mapped.</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {priorities.map((item) => (
                <Link
                  key={item.slug}
                  href={`/tier-list/${item.slug}`}
                  className="rounded-[26px] border border-white/10 bg-white/5 p-5 transition hover:-translate-y-0.5 hover:border-[var(--accent-soft)]/40"
                >
                  <div className="text-xs font-black uppercase tracking-[0.2em] text-[var(--accent-soft)]">{item.tier} Tier</div>
                  <h3 className="mt-3 text-xl font-black text-white">{item.name}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="shell py-8 md:py-12">
        <div className="card p-7 md:p-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow text-xs font-black text-[var(--accent-soft)]">Update watch</p>
              <h2 className="mt-3 font-display text-4xl font-black text-white">Freshness anchored to the live Roblox listing.</h2>
            </div>
            <Link href="/updates" className="text-sm font-bold text-[var(--accent-soft)]">
              View all updates
            </Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {updates.map((item) => (
              <article key={item.title} className="rounded-[26px] border border-white/10 bg-white/5 p-5">
                <div className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">{item.date}</div>
                <h3 className="mt-3 text-xl font-black text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
