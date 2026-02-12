import { defineCollection, z } from "astro:content";

const CATEGORY = z.enum([
  "Human Interest",
  "Space & Astronomy",
  "Health Sciences",
  "Arts & Culture",
  "Nature & Environment",
  "Education",
  "Innovation & Technology",
]);

const films = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    year: z.number().optional(),
    categories: z.array(CATEGORY).min(1),
    platform: z.enum(["youtube", "vimeo"]),
    videoId: z.string(),
    thumbnail: z.string(),
    logline: z.string().optional(),
  }),
});

export const collections = { films };
