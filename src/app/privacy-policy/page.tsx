import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Privacy Policy",
  "Privacy policy for this Defend your base from 67 companion site.",
  "/privacy-policy"
);

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy policy"
        text="This static fan site does not require logins and is designed to keep data collection minimal."
      />
      <section className="shell py-10 md:py-14">
        <div className="card p-7 md:p-10">
          <p className="text-base leading-8 text-slate-300">
            Standard hosting logs may record anonymous technical information such as IP address, browser type, and
            requested paths for security and analytics. No Roblox credentials or account secrets are ever requested on
            this site.
          </p>
        </div>
      </section>
    </>
  );
}
