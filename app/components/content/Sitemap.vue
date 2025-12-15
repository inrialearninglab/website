<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui/runtime/components/NavigationMenu.vue.js";

const { locale } = useI18n();
const localePath = useLocalePath();

const { data: navigation } = await useAsyncData(`sitemap-${locale.value}`, async () => {
    const nav = await queryCollectionNavigation(`content_${locale.value}`);

    return transformNavigationItems(nav);
});

function transformNavigationItems(items: any[]): NavigationMenuItem[] {
    return items.map((item) => ({
        label: item.title,
        to: localePath(item.path),
        children: item.children ? transformNavigationItems(item.children) : undefined,
        open: true,
        icon: item.children ? "lucide:folder" : "lucide:file",
    }));
}
</script>

<template>
    <UNavigationMenu orientation="vertical" :items="navigation" />
</template>
