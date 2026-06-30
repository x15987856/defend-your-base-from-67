import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { getGameConfig } from "@/lib/data";
import { buildBreadcrumbSchema, buildFAQSchema, pageMetadata } from "@/lib/seo";

const config = getGameConfig();

export const metadata: Metadata = pageMetadata(
  "Beginner Guide",
  "A fast beginner route for Defend your base from 67 focused on gate stability, turret placement, and cleaner early upgrade order.",
  "/beginner-guide"
);

const steps = [
  {
    title: "Stabilize the gate before you get greedy",
    text: "The easiest early mistake is assuming damage alone will save the run. If the gate is too fragile, one breach turns the whole defense into panic mode."
  },
  {
    title: "Build enough turret coverage to stop dead lanes",
    text: "A small number of turrets covering the right approach is better than spreading weak damage into useless angles."
  },
  {
    title: "Scale damage only after the base can survive contact",
    text: "Raw turret damage feels good, but it is much stronger once the gate can handle a leak instead of instantly losing the run."
  },
  {
    title: "Use economy to reach the next real breakpoint",
    text: "Income matters when it helps you hit the next meaningful defense spike. It is weaker when your current base still collapses too fast."
  }
];

const faqs = [
  {
    question: "What should beginners focus on first in Defend your base from 67?",
    answer: "Most players should protect the gate first, then build enough turret coverage to stop easy leaks before scaling greedier damage upgrades."
  },
  {
    question: "Is it better to spam more turrets or upgrade the ones I have?",
    answer: "That depends on coverage. If you have dead lanes, add coverage first. If placement is already solid, stronger damage usually pays more."
  }
];

export default function BeginnerGuidePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", item: config.seo.baseUrl },
    { name: "Beginner Guide", item: `${config.seo.baseUrl}/beginner-guide` }
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={buildFAQSchema(faqs)} />
      <PageHero
        eyebrow="Onboarding page"
        title="Defend your base from 67 beginner guide"
        text="This route is built to shorten the messy first sessions: stop early collapses, cover the approach to the base, and spend upgrades in a sane order."
      />

      <section className="shell py-10 md:py-14">
        <div className="grid gap-5">
          {steps.map((step, index) => (
            <article key={step.title} className="card grid gap-5 p-6 md:grid-cols-[96px_1fr] md:p-8">
              <div className="grid place-items-start">
                <div className="rounded-[24px] bg-[rgba(216,165,66,0.12)] px-5 py-4 text-3xl font-black text-[var(--accent-soft)]">
                  0{index + 1}
                </div>
              </div>
              <div>
                <h2 className="font-display text-3xl font-black text-white">{step.title}</h2>
                <p className="mt-3 text-base leading-8 text-slate-300">{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
