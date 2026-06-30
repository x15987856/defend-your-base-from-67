import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "About",
  "About this Defend your base from 67 fan site and its launch-focused editorial approach.",
  "/about"
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Why this site exists"
        text="This project is built as a launch-ready Roblox companion site. It focuses on the questions players ask first: what to upgrade, what to protect, and what usually causes the base to fail."
      />
      <section className="shell py-10 md:py-14">
        <div className="card p-7 md:p-10">
          <p className="text-base leading-8 text-slate-300">
            Defend your base from 67 has a very direct survival loop, which makes clean information architecture more
            useful than bloated filler pages. The site uses verified Roblox listing details where possible and clearly
            labels editorial strategy pages where we are interpreting player needs.
          </p>
        </div>
      </section>
    </>
  );
}
