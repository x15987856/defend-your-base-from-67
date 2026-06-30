import codesData from "@/data/codes.json";
import configData from "@/data/game.config.json";
import tierData from "@/data/tier-items.json";
import updatesData from "@/data/updates.json";

export interface TierItem {
  id: string;
  slug: string;
  name: string;
  category: string;
  tier: "S" | "A" | "B" | "C";
  status: string;
  description: string;
  tags: string[];
}

export interface UpdateItem {
  title: string;
  date: string;
  summary: string;
}

export interface GameConfig {
  game: {
    name: string;
    slug: string;
    robloxId: string;
    developer: string;
    genre: string;
    currentVersion: string;
    lastVerified: string;
    platforms: string[];
  };
  stats: Record<string, string | boolean>;
  research: Record<string, string>;
  seo: {
    siteTitle: string;
    siteDescription: string;
    baseUrl: string;
    primaryKeywords: string[];
    secondaryKeywords: string[];
    defaultOgImage: string;
  };
  links: Record<string, string>;
  routes: { path: string; title: string; priority: string }[];
}

export interface CodeEntry {
  code: string;
  reward: string;
  source: string;
}

export interface CodesData {
  lastChecked: string;
  active: CodeEntry[];
  expired: string[];
  notes: string[];
}

const config = configData as GameConfig;
const codes = codesData as CodesData;
const tierItems = (tierData as { items: TierItem[] }).items;
const updates = (updatesData as { items: UpdateItem[] }).items;

export function getGameConfig() {
  return config;
}

export function getCodes() {
  return codes;
}

export function getTierItems() {
  return tierItems;
}

export function getTierItemBySlug(slug: string) {
  return tierItems.find((item) => item.slug === slug);
}

export function getUpdates() {
  return updates;
}
