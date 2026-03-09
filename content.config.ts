import { defineContentConfig, defineCollection, z } from "@nuxt/content";

const epocSchema = z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    image: z.string(),
    link: z.string(),
    licence: z.string().default("CC BY 4.0"),
    lang: z.array(z.string()),
    duration: z.string().optional(),
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
    licence: z.string().default("CC BY 4.0"),
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

const linkSchema = z.object({
    label: z.string(),
    to: z.string(),
    trailingIcon: z.string().optional(),
    icon: z.string().optional(),
});

const sectionSchema = z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    orientation: z.enum(["horizontal", "vertical"]).optional(),
    reverse: z.boolean().optional(),
    links: z.array(linkSchema),
    image: z.string().optional(),
    headline: z.string().optional(),
});

const userSchema = z.object({
    name: z.string(),
    description: z.string().optional(),
    avatar: z.object({
        src: z.string().optional(),
        icon: z.string().optional(),
        text: z.string().optional(),
    }),
});

const homeSchema = z.object({
    hero: sectionSchema,
    activity: sectionSchema,
    moocs: sectionSchema,
    epocs: sectionSchema,
    seriousGames: sectionSchema,
    testimonials: z.object({
        title: z.string(),
        headline: z.string().optional(),
        description: z.string().optional(),
        items: z.array(
            z.object({
                quote: z.string(),
                user: userSchema,
            }),
        ),
    }),
    marquee: z.array(z.string()),
    cta: sectionSchema.extend({
        variant: z.enum(["outline", "solid", "soft", "subtle", "naked"]).optional(),
    }),
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
        serious_games_fr: defineCollection({
            type: "page",
            source: {
                include: "fr/serious-games/*.md",
                prefix: "serious-games/",
            },
            schema: seriousGameSchema,
        }),
        serious_games_en: defineCollection({
            type: "page",
            source: {
                include: "en/serious-games/*.md",
                prefix: "serious-games/",
            },
            schema: seriousGameSchema,
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
        home_fr: defineCollection({
            type: "data",
            source: "fr/index.yml",
            schema: homeSchema,
        }),
        home_en: defineCollection({
            type: "data",
            source: "en/index.yml",
            schema: homeSchema,
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
