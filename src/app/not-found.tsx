import Link from "next/link";

export default function NotFound() {
  return (
    <section className="shell py-20">
      <div className="card p-10 text-center">
        <p className="eyebrow text-xs font-black text-[var(--accent-soft)]">404</p>
        <h1 className="mt-3 font-display text-5xl font-black text-white">That defense route does not exist.</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300">
          The page may have moved while the site expands around new Defend your base from 67 guides and survival routes.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-[var(--accent)] px-5 py-3 font-black text-slate-950 transition hover:brightness-110"
        >
          Return home
        </Link>
      </div>
    </section>
  );
}
