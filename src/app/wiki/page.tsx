import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { getGameConfig } from "@/lib/data";
import { buildBreadcrumbSchema, pageMetadata } from "@/lib/seo";

const config = getGameConfig();

export const metadata: Metadata = pageMetadata(
  "Wiki",
  "A compact Defend your base from 67 wiki covering gates, turrets, wave pressure, economy timing, and common survival mistakes.",
  "/wiki"
);

const sections = [
  {
    title: "Gate durability",
    text: "The gate is the single most important failure point. Any wiki for this game should explain that defense planning starts with surviving contact, not just killing faster."
  },
  {
    title: "Turret damage and coverage",
    text: "Turrets do not just need better numbers. They need useful coverage so 67 cannot walk through a thin angle while your strongest damage points somewhere irrelevant."
  },
  {
    title: "Wave pressure and timing",
    text: "Survival games get harder when players spend without a timing plan. A good reference page helps players understand when they are stable and when they are only barely holding."
  },
  {
    title: "Economy and panic spending",
    text: "Income upgrades are strong when the base is stable. They are weak when players are spending them into a defense that still folds on contact."
  }
];

export default function WikiPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", item: config.seo.baseUrl },
    { name: "Wiki", item: `${config.seo.baseUrl}/wiki` }
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <PageHero
        eyebrow="Evergreen reference"
        title="Defend your base from 67 wiki"
        text="This wiki hub stays tight on purpose. It gives the site a stable reference layer now, while leaving room for deeper pages later if the game grows."
      />

      <section className="shell py-10 md:py-14">
        <div className="grid gap-5 md:grid-cols-2">
          {sections.map((section) => (
            <article key={section.title} className="card p-7">
              <h2 className="font-display text-3xl font-black text-white">{section.title}</h2>
              <p className="mt-3 text-base leading-8 text-slate-300">{section.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
