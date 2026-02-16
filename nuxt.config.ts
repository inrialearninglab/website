// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-05-15",
    devtools: { enabled: true },
    modules: ["@nuxt/ui", "@nuxt/content", "@nuxt/icon", "@nuxtjs/color-mode", "@nuxt/image", "@nuxtjs/i18n"],
    css: ["~/assets/css/tailwind.css"],
    app: {
        head: {
            link: [{ rel: "icon", type: "image/x-icon", href: "/logo/favicon.ico" }],
        },
    },
    i18n: {
        locales: [
            { code: "en", name: "English", language: "en" },
            { code: "fr", name: "French", language: "fr-FR" },
        ],
        defaultLocale: "fr",
    },
    nitro: {
        static: true,
        prerender: {
            crawlLinks: true,
            routes: ["/", "/en"],
            failOnError: false,
        },
    },

    routeRules: {
        "/**": { prerender: true },
    },

    router: {
        options: {
            strict: false,
        },
    },
    image: {
        provider: import.meta.env.NODE_ENV === "development" ? "none" : "ipx",
    },
});
