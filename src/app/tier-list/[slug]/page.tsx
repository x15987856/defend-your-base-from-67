import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { getGameConfig, getTierItemBySlug, getTierItems } from "@/lib/data";
import { buildBreadcrumbSchema, pageMetadata } from "@/lib/seo";

const config = getGameConfig();

export function generateStaticParams() {
  return getTierItems().map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> | Metadata {
  return params.then(({ slug }) => {
    const item = getTierItemBySlug(slug);
    if (!item) {
      return pageMetadata("Tier List", "Defend your base from 67 strategy tier list.", "/tier-list");
    }

    return pageMetadata(
      item.name,
      `${item.name} lands in ${item.tier} tier for Defend your base from 67 because ${item.description.toLowerCase()}`,
      `/tier-list/${item.slug}`
    );
  });
}

export default async function TierItemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getTierItemBySlug(slug);

  if (!item) {
    notFound();
  }

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", item: config.seo.baseUrl },
    { name: "Tier List", item: `${config.seo.baseUrl}/tier-list` },
    { name: item.name, item: `${config.seo.baseUrl}/tier-list/${item.slug}` }
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <PageHero eyebrow={item.category} title={item.name} text={item.description} />

      <section className="shell py-10 md:py-14">
        <div className="card p-7 md:p-10">
          <div className="grid gap-8 md:grid-cols-[160px_1fr]">
            <div>
              <div className="rounded-[26px] bg-[rgba(216,165,66,0.12)] px-5 py-6 text-center">
                <div className="text-xs font-black uppercase tracking-[0.22em] text-[var(--accent-soft)]">Tier</div>
                <div className="mt-2 text-5xl font-black text-white">{item.tier}</div>
              </div>
            </div>
            <div>
              <h2 className="font-display text-4xl font-black text-white">Why it lands here</h2>
              <p className="mt-4 text-base leading-8 text-slate-300">
                {item.name} matters because it changes how often your base survives the moment things go wrong. In a
                defense game, the best priorities either stabilize the gate or make every turret cycle matter more.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-300">
                Recommended use: push this sooner if it fixes a real weakness in your current setup, delay it if a more
                basic defensive layer is still missing, and avoid panic-spending into it just because a run feels shaky.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
