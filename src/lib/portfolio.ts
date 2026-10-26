import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { queryOptions } from "@tanstack/react-query";
import type { Database } from "@/integrations/supabase/types";

export interface Stat {
  value: string;
  label: string;
}

export interface SkillGroupData {
  title: string;
  icon: string;
  accent: string;
  skills: string[];
}

export interface ExperienceData {
  role: string;
  company: string;
  client: string;
  period: string;
  location: string;
  summary: string;
  points: string[];
}

export interface ProjectData {
  name: string;
  website: string | null;
  tag: string;
  tags: string[];
  icon: string;
  points: string[];
}

export interface AchievementData {
  icon: string;
  value: string;
  label: string;
  detail: string;
  accent: string;
}

export interface PortfolioData {
  stats: Stat[];
  skillGroups: SkillGroupData[];
  experience: ExperienceData[];
  projects: ProjectData[];
  achievements: AchievementData[];
}

// Public read-only fetch (anon SELECT policies allow this) for SSR and client.
export const fetchPortfolio = createServerFn({ method: "GET" }).handler(
  async (): Promise<PortfolioData | null> => {
    const url = process.env["SUPABASE_URL"];
    const key = process.env["SUPABASE_PUBLISHABLE_KEY"];
    if (!url || !key) return null;

    // sb_publishable_ keys are opaque, not JWTs: send only the apikey header.
    const supabasePublic = createClient<Database>(url, key, {
      auth: { persistSession: false, autoRefreshToken: false, storage: undefined },
      global: {
        fetch: (input, init) => {
          const headers = new Headers(init?.headers);
          if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`) {
            headers.delete("Authorization");
          }
          headers.set("apikey", key);
          return fetch(input, { ...init, headers });
        },
      },
    });

    try {
      const [stats, skillGroups, experience, projects, achievements] = await Promise.all([
        supabasePublic.from("portfolio_stats").select("*").order("sort_order"),
        supabasePublic.from("skill_groups").select("*").order("sort_order"),
        supabasePublic.from("experience").select("*").order("sort_order"),
        supabasePublic.from("projects").select("*").order("sort_order"),
        supabasePublic.from("achievements").select("*").order("sort_order"),
      ]);

      if (stats.error || skillGroups.error || experience.error || projects.error || achievements.error) {
        return null;
      }

      return {
        stats: stats.data.map((row) => ({ value: row.value, label: row.label })),
        skillGroups: skillGroups.data.map((row) => ({
          title: row.title,
          icon: row.icon,
          accent: row.accent,
          skills: (row.skills as unknown as string[]) ?? [],
        })),
        experience: experience.data.map((row) => ({
          role: row.role,
          company: row.company,
          client: row.client,
          period: row.period,
          location: row.location,
          summary: row.summary,
          points: (row.points as unknown as string[]) ?? [],
        })),
        projects: projects.data.map((row) => ({
          name: row.name,
          website: row.website,
          tag: row.tag,
          tags: (row.tags as unknown as string[]) ?? [],
          icon: row.icon,
          points: (row.points as unknown as string[]) ?? [],
        })),
        achievements: achievements.data.map((row) => ({
          icon: row.icon,
          value: row.value,
          label: row.label,
          detail: row.detail,
          accent: row.accent,
        })),
      };
    } catch {
      return null;
    }
  },
);

export const portfolioQueryOptions = () =>
  queryOptions({
    queryKey: ["portfolio"],
    queryFn: () => fetchPortfolio(),
  });
