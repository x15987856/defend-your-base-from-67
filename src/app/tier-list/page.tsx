import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { getGameConfig, getTierItems } from "@/lib/data";
import { buildBreadcrumbSchema, pageMetadata } from "@/lib/seo";

const config = getGameConfig();
const items = getTierItems();

export const metadata: Metadata = pageMetadata(
  "Tier List",
  "An editorial Defend your base from 67 tier list ranking gate upgrades, turret priorities, and common survival habits.",
  "/tier-list"
);

export default function TierListPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", item: config.seo.baseUrl },
    { name: "Tier List", item: `${config.seo.baseUrl}/tier-list` }
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <PageHero
        eyebrow="Editorial route"
        title="Defend your base from 67 tier list"
        text="This list ranks upgrade priorities and habits, not cosmetics. The goal is surviving longer and reaching cleaner defense breakpoints."
      />

      <section className="shell py-10 md:py-14">
        <div className="grid gap-5">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`/tier-list/${item.slug}`}
              className="card grid gap-4 p-6 transition hover:-translate-y-0.5 md:grid-cols-[140px_1fr_auto]"
            >
              <div>
                <div className="text-xs font-black uppercase tracking-[0.22em] text-[var(--accent-soft)]">{item.category}</div>
                <div className="mt-3 inline-flex rounded-full bg-[rgba(216,165,66,0.12)] px-3 py-1 text-xl font-black text-[var(--accent-soft)]">
                  {item.tier} Tier
                </div>
              </div>
              <div>
                <h2 className="font-display text-3xl font-black text-white">{item.name}</h2>
                <p className="mt-2 text-sm leading-7 text-slate-300">{item.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-sm font-bold text-[var(--accent-soft)]">{item.status}</div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
