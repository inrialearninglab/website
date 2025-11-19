import { defineContentConfig, defineCollection, z } from "@nuxt/content";

const epocSchema = z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    image: z.string(),
});

const moocSchema = z.object({
    title: z.string(),
    image: z.string(),
    date: z.string(),
    status: z.enum(["open", "closed", "archived"]),
    url: z.string().url(),
    investment: z.string(),
    type: z.enum(["self-paced", "session", "MAOI"]),
    assesment: z.string(),
    lang: z.array(z.string()),
    trailer: z.string().url(),
});

const blogSchema = z.object({
    date: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
});

const seriousGameSchema = z.object({
    title: z.string(),
    image: z.string(),
    date: z.string(),
});

export default defineContentConfig({
    collections: {
        epocs_fr: defineCollection({
            type: "page",
            source: {
                include: "fr/epocs/*.md",
                prefix: "epocs/",
            },
            schema: epocSchema,
        }),
        epocs_en: defineCollection({
            type: "page",
            source: {
                include: "en/epocs/*.md",
                prefix: "epocs/",
            },
            schema: epocSchema,
        }),
        moocs_fr: defineCollection({
            type: "page",
            source: {
                include: "fr/moocs/*.md",
                prefix: "moocs/",
            },
            schema: moocSchema,
        }),
        moocs_en: defineCollection({
            type: "page",
            source: {
                include: "en/moocs/*.md",
                prefix: "moocs/",
            },
            schema: moocSchema,
        }),
        blog_fr: defineCollection({
            type: "page",
            source: {
                include: "fr/blog/*.md",
                prefix: "blog/",
            },
            schema: blogSchema,
        }),
        blog_en: defineCollection({
            type: "page",
            source: {
                include: "en/blog/*.md",
                prefix: "blog/",
            },
            schema: blogSchema,
        }),
        seriousGames_fr: defineCollection({
            type: "page",
            source: {
                include: "fr/serious-games/*.md",
                prefix: "serious-games/",
            },
            schema: seriousGameSchema,
        }),
        seriousGames_en: defineCollection({
            type: "page",
            source: {
                include: "en/serious-games/*.md",
                prefix: "serious-games/",
            },
            schema: seriousGameSchema,
        }),
        tags: defineCollection({
            type: "data",
            source: "tags.yml",
            schema: z.object({
                tags: z.record(
                    z.string(),
                    z.object({
                        en: z.string(),
                        fr: z.string(),
                    }),
                ),
            }),
        }),
        // IMPORTANT : The catch all content HAVE to be defined at the end for the hot reload to work correctly
        content_fr: defineCollection({
            type: "page",
            source: {
                include: "fr/**",
                prefix: "",
            },
        }),
        content_en: defineCollection({
            type: "page",
            source: {
                include: "en/**",
                prefix: "",
            },
        }),
    },
});
