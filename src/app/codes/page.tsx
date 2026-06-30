import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { getCodes, getGameConfig } from "@/lib/data";
import { buildBreadcrumbSchema, buildFAQSchema, pageMetadata } from "@/lib/seo";

const config = getGameConfig();
const codes = getCodes();

export const metadata: Metadata = pageMetadata(
  "Codes",
  "Defend your base from 67 codes status page with confirmed-code tracking and no fake filler lists.",
  "/codes"
);

const faqs = [
  {
    question: "Are there any working Defend your base from 67 codes right now?",
    answer: "There is no reliable public code list confirmed right now, so this page stays in tracker mode instead of publishing guesses."
  },
  {
    question: "Why does this page show no codes?",
    answer: "Because an honest empty codes page is more useful than a low-trust list copied from random blogs."
  },
  {
    question: "What should I watch for if codes are added later?",
    answer: "Look for official Roblox description updates, in-game prompts, or direct developer announcements before trusting any code list."
  }
];

export default function CodesPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", item: config.seo.baseUrl },
    { name: "Codes", item: `${config.seo.baseUrl}/codes` }
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={buildFAQSchema(faqs)} />
      <PageHero
        eyebrow="Trust-first tracker"
        title="Defend your base from 67 codes"
        text="This page is ready for future redeem coverage, but it will not invent a code system that is not publicly confirmed."
      />

      <section className="shell py-10 md:py-14">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr]">
          <div className="card p-7 md:p-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="eyebrow text-xs font-black text-[var(--accent-soft)]">Current status</p>
                <h2 className="mt-2 font-display text-4xl font-black text-white">No confirmed public codes.</h2>
              </div>
              <p className="text-sm text-slate-400">Checked {codes.lastChecked}</p>
            </div>
            <div className="mt-6 rounded-[28px] border border-white/10 bg-white/5 p-6">
              <p className="text-base leading-8 text-slate-300">
                The Roblox listing currently gives the core gameplay loop, but not a reliable redeem-code flow. If that
                changes, this page will surface active and expired codes separately.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="card p-7">
              <p className="eyebrow text-xs font-black text-[var(--accent-soft)]">What we are watching</p>
              <div className="mt-4 grid gap-3">
                {codes.notes.map((note) => (
                  <p key={note} className="text-sm leading-7 text-slate-300">
                    {note}
                  </p>
                ))}
              </div>
            </div>

            <div className="card p-7">
              <p className="eyebrow text-xs font-black text-[var(--accent-soft)]">Best fallback</p>
              <h2 className="mt-2 text-2xl font-black text-white">Use the planner and guide pages instead.</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Until codes are real and public, the fastest progress comes from stronger gate timing, better turret
                coverage, and a safer upgrade order.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
