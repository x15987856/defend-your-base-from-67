import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("Terms", "Terms for this Defend your base from 67 companion site.", "/terms");

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms"
        title="Terms of use"
        text="This site is a fan-made reference and planning resource. Use in-game judgment and official sources before making account or purchase decisions."
      />
      <section className="shell py-10 md:py-14">
        <div className="card p-7 md:p-10">
          <p className="text-base leading-8 text-slate-300">
            Content is provided for general informational use. We do not guarantee every community interpretation, and
            we do not offer official support for the Roblox experience itself.
          </p>
        </div>
      </section>
    </>
  );
}
