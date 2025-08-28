import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
    collections: {
        content: defineCollection({
            type: "page",
            source: "**/*.md",
        }),
        epocs: defineCollection({
            type: "page",
            source: "epocs/*.md",
            schema: z.object({
                title: z.string(),
                description: z.string(),
                date: z.string(),
                image: z.string(),
            }),
        }),
        moocs: defineCollection({
            type: "page",
            source: "moocs/*.md",
            schema: z.object({
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
            }),
        }),
        blog: defineCollection({
            type: "page",
            source: "blog/*.md",
            schema: z.object({
                date: z.string(),
                image: z.string(),
            }),
        }),
        seriousGames: defineCollection({
            type: "page",
            source: "serious-games/*.md",
            schema: z.object({
                title: z.string(),
                image: z.string(),
                date: z.string(),
            }),
        }),
    },
});
