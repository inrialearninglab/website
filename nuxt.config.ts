// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-05-15",
    devtools: { enabled: true },
    modules: ["@nuxt/ui", "@nuxt/content", "@nuxt/icon", "@nuxtjs/color-mode", "@nuxt/image", "@nuxtjs/i18n"],
    css: ["~/assets/css/tailwind.css"],
    i18n: {
        locales: [
            { code: "en", name: "English", language: "en-US" },
            { code: "fr", name: "French", language: "fr-FR" },
        ],
        defaultLocale: "fr",
    },
    nitro: {
        static: true,
        prerender: {
            crawlLinks: true,
            routes: ["/", "/fr"],
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
});
