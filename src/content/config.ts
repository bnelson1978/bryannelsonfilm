import { defineCollection, z } from "astro:content";

const films = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    year: z.number().optional(),
    category: z.enum([
      "Human Interest",
      "Space & Astronomy",
      "Health Sciences",
      "Arts & Culture",
      "Nature & Environment",
      "Education",
      "Innovation & Technology",
    ]),
    platform: z.enum(["youtube", "vimeo"]),
    videoId: z.string(),
    thumbnail: z.string(),
    logline: z.string().optional(),
  }),
});

export const collections = { films };
