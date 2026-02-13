import { defineCollection, z } from "astro:content";

const CATEGORY = z.enum([
  "Human Interest",
  "Space & Astronomy",
  "Health Sciences",
  "Arts & Culture",
  "Nature & Environment",
  "Education",
  "Innovation & Technology",
  "New Frontiers", // NEW
]);

const HOME_SECTION = z.enum([
  "selected",
  "osiris-rex",
  "fred-fox",
  "new-frontiers",
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

    homeSections: z.array(HOME_SECTION).optional(),

    // manual ordering within each homepage section
    homeSectionOrder: z.record(HOME_SECTION, z.number()).optional(),

    categoryOrder: z.record(CATEGORY, z.number()).optional(),

    platform: z.enum(["youtube", "vimeo"]),
    videoId: z.string(),
    thumbnail: z.string(),

    logline: z.string().optional(),
  }),
});

export const collections = { films };
