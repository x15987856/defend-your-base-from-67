import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { getGameConfig, getUpdates } from "@/lib/data";
import { buildBreadcrumbSchema, pageMetadata } from "@/lib/seo";

const config = getGameConfig();
const updates = getUpdates();

export const metadata: Metadata = pageMetadata(
  "Updates",
  "Defend your base from 67 update tracking for the live Roblox listing, guide demand, and code-status changes.",
  "/updates"
);

export default function UpdatesPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", item: config.seo.baseUrl },
    { name: "Updates", item: `${config.seo.baseUrl}/updates` }
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <PageHero
        eyebrow="Freshness layer"
        title="Defend your base from 67 updates"
        text="This page keeps the site current without pretending every rumor is a patch note. It tracks the safest facts we can anchor launch content around."
      />

      <section className="shell py-10 md:py-14">
        <div className="relative ml-3 border-l border-white/10 pl-8">
          {updates.map((item) => (
            <article key={item.title} className="relative mb-10 card p-6">
              <span className="absolute -left-[46px] top-8 h-4 w-4 rounded-full border-4 border-[#0b0d13] bg-[var(--accent)]" />
              <div className="text-xs font-black uppercase tracking-[0.22em] text-[var(--accent-soft)]">{item.date}</div>
              <h2 className="mt-3 font-display text-3xl font-black text-white">{item.title}</h2>
              <p className="mt-3 text-base leading-8 text-slate-300">{item.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
