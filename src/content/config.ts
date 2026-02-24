import { defineCollection, z } from "astro:content";

const CATEGORY = z.enum([
  "Human Interest",
  "Space & Astronomy",
  "Health Sciences",
  "Arts & Culture",
  "Nature & Environment",
  "Education",
  "Innovation & Technology",
  "New Frontiers",
]);

const HOME_SECTION = z.enum([
  "selected",
  "osiris-rex",
  "fred-fox",
  "new-frontiers",
  "independent-originals",
]);

const films = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    year: z.number().optional(),
    categories: z.array(CATEGORY).min(1),

    award: z.string().optional(),
    awards: z.array(z.string()).optional(),

    featured: z.boolean().optional(),
    home: z.boolean().optional(),

    // ordering on Selected Films grid
    homeOrder: z.number().optional(),

    homeSections: z.array(HOME_SECTION).optional(),

    // manual ordering within each homepage section
    homeSectionOrder: z.record(HOME_SECTION, z.number()).optional(),

    // optional category ordering (you said you’re not using it right now)
    categoryOrder: z.record(CATEGORY, z.number()).optional(),

    platform: z.enum(["youtube", "vimeo"]),
    videoId: z.string(),

    // ✅ CHANGE: allow films without thumbnails
    thumbnail: z.string().optional(),

    logline: z.string().optional(),
    // (body/description stays in markdown content)
  }),
});

export const collections = { films };