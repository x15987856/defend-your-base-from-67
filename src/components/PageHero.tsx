export default function PageHero({
  eyebrow,
  title,
  text
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(216,165,66,0.18),_transparent_24%),linear-gradient(180deg,_#10161e_0%,_#111924_54%,_#0a0d13_100%)]">
      <div className="shell py-16 md:py-20">
        <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-[var(--accent-soft)]">{eyebrow}</p>
        <h1 className="font-display max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">{text}</p>
      </div>
    </section>
  );
}
