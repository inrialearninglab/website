<script setup lang="ts">
import { fr, en } from "@nuxt/ui/locale";

const { header } = useAppConfig();
const { locale, setLocale } = useI18n();
const localePath = useLocalePath();

const navItems = computed(() => {
    return header.nav[locale.value].map((item) => {
        if (item.children) {
            return {
                ...item,
                children: item.children.map((child) => ({
                    ...child,
                    to: localePath(child.to),
                })),
            };
        } else {
            return {
                ...item,
                to: item.to ? localePath(item.to) : undefined,
            };
        }
    });
});
</script>

<template>
    <UHeader :to="localePath('/')">
        <template #title>
            <UColorModeImage light="/logo/ill-logo.svg" dark="/logo/ill-logo-dark.svg" class="h-8" />
        </template>

        <UNavigationMenu :items="navItems" />

        <template #right>
            <UContentSearchButton />
            <UColorModeButton />
            <ULocaleSelect
                variant="ghost"
                :locales="[fr, en]"
                v-model="locale"
                @update:model-value="setLocale($event as 'fr' | 'en')"
            />
        </template>

        <template #body>
            <UNavigationMenu :items="navItems" orientation="vertical" class="-mx-2.5" />
        </template>
    </UHeader>
</template>
