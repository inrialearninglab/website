// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-05-15",
    devtools: { enabled: true },
    modules: ["@nuxt/ui", "@nuxt/content", "@nuxt/icon", "@nuxtjs/color-mode"],
    css: ["~/assets/css/tailwind.css"],
    colorMode: {
        classSuffix: "",
    },
});
