"use client";

import { useMemo, useState } from "react";

const presets = [
  { label: "Safe opener", gate: 35, turretDamage: 30, turretCount: 2, income: 15 },
  { label: "Balanced hold", gate: 55, turretDamage: 50, turretCount: 4, income: 25 },
  { label: "Damage-heavy push", gate: 40, turretDamage: 75, turretCount: 5, income: 20 }
] as const;

export default function ProfitCalculator() {
  const [gate, setGate] = useState(55);
  const [turretDamage, setTurretDamage] = useState(50);
  const [turretCount, setTurretCount] = useState(4);
  const [income, setIncome] = useState(25);

  const totals = useMemo(() => {
    const defenseScore = gate * 1.25 + turretDamage * 1.4 + turretCount * 12 + income * 0.8;
    const pressureScore = Math.max(0, 120 - defenseScore);
    const holdRating =
      defenseScore >= 140 ? "Stable" : defenseScore >= 110 ? "Mostly stable" : defenseScore >= 85 ? "Risky" : "Brittle";
    const suggestion =
      gate < turretDamage
        ? "Your damage is running ahead of your gate. If 67 reaches the door, this build may fold too fast."
        : turretCount < 3
          ? "You likely need better lane coverage before spending harder on raw damage."
          : income < 20
            ? "Your base can hold for a bit, but your economy may slow the next upgrade spike."
            : "This is a balanced setup for a longer hold. Tighten placement before chasing greedier upgrades.";
    return { defenseScore, pressureScore, holdRating, suggestion };
  }, [gate, turretDamage, turretCount, income]);

  const applyPreset = (index: number) => {
    const preset = presets[index];
    setGate(preset.gate);
    setTurretDamage(preset.turretDamage);
    setTurretCount(preset.turretCount);
    setIncome(preset.income);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="card p-7 md:p-8">
        <div className="flex flex-wrap gap-3">
          {presets.map((preset, index) => (
            <button
              key={preset.label}
              type="button"
              onClick={() => applyPreset(index)}
              className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm font-bold text-white transition hover:border-amber-300/40 hover:bg-white/12"
            >
              {preset.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5">
          {[
            ["Gate durability", gate, setGate, 0, 100],
            ["Turret damage", turretDamage, setTurretDamage, 0, 100],
            ["Turret count", turretCount, setTurretCount, 1, 8],
            ["Income flow", income, setIncome, 0, 100]
          ].map(([label, value, setter, min, max]) => (
            <label key={label as string} className="grid gap-3">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-bold text-white">{label as string}</span>
                <span className="rounded-full bg-white/8 px-3 py-1 text-sm font-black text-amber-200">{value as number}</span>
              </div>
              <input
                type="range"
                min={min as number}
                max={max as number}
                step={1}
                value={value as number}
                onChange={(event) => (setter as (next: number) => void)(Number(event.target.value))}
                className="accent-[var(--accent)]"
              />
            </label>
          ))}
        </div>
      </div>

      <div className="grid gap-6">
        <div className="card p-7 md:p-8">
          <p className="eyebrow text-xs font-black text-[var(--accent-soft)]">Defense readout</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="metric-panel">
              <span>Defense score</span>
              <strong>{totals.defenseScore.toFixed(0)}</strong>
            </div>
            <div className="metric-panel">
              <span>Pressure gap</span>
              <strong className={totals.pressureScore <= 20 ? "text-emerald-300" : "text-rose-300"}>
                {totals.pressureScore.toFixed(0)}
              </strong>
            </div>
            <div className="metric-panel">
              <span>Hold rating</span>
              <strong>{totals.holdRating}</strong>
            </div>
            <div className="metric-panel">
              <span>Turret lanes</span>
              <strong>{turretCount}</strong>
            </div>
          </div>
          <div className="mt-5 rounded-[22px] border border-white/10 bg-black/18 p-5">
            <div className="text-xs font-black uppercase tracking-[0.22em] text-slate-400">Planner note</div>
            <div className="mt-3 text-sm leading-7 text-slate-300">{totals.suggestion}</div>
          </div>
        </div>

        <div className="card p-7">
          <p className="eyebrow text-xs font-black text-[var(--accent-soft)]">How to use it</p>
          <div className="mt-4 grid gap-3 text-sm leading-7 text-slate-300">
            <p>Use this as a planning aid, not as a hidden official formula.</p>
            <p>Start by keeping the gate healthy enough to survive contact, then scale turret damage and coverage together.</p>
            <p>If a build looks shaky, fix the weak layer instead of panic-spending across everything.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
