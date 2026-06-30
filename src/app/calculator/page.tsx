import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import ProfitCalculator from "@/components/ProfitCalculator";
import { getGameConfig } from "@/lib/data";
import { buildBreadcrumbSchema, buildFAQSchema, pageMetadata } from "@/lib/seo";

const config = getGameConfig();

export const metadata: Metadata = pageMetadata(
  "Defense Planner",
  "A Defend your base from 67 defense planner for balancing gate durability, turret damage, turret coverage, and income flow.",
  "/calculator"
);

const faqs = [
  {
    question: "Is this an official Defend your base from 67 calculator?",
    answer: "No. It is a planning tool built around the game's visible defense loop so you can think through upgrade balance more clearly."
  },
  {
    question: "What should I improve first?",
    answer: "Most players should stabilize the gate first, then scale turret damage and coverage together instead of overcommitting to one weak layer."
  },
  {
    question: "Why include economy in the planner?",
    answer: "Because strong defense is not just about surviving one push. It is about reaching your next meaningful upgrade before 67 overwhelms the base."
  }
];

export default function CalculatorPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", item: config.seo.baseUrl },
    { name: "Planner", item: `${config.seo.baseUrl}/calculator` }
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={buildFAQSchema(faqs)} />
      <PageHero
        eyebrow="Planning tool"
        title="Defend your base from 67 defense planner"
        text="Use this to spot weak layers in your build before a run falls apart. The goal is balance: enough gate durability to hold contact, and enough turret pressure to keep 67 away from it."
      />

      <section className="shell py-10 md:py-14">
        <ProfitCalculator />
      </section>
    </>
  );
}
