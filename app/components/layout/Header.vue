<script setup lang="ts">
import { fr, en } from "@nuxt/ui/locale";

const { header } = useAppConfig();
const { locale, setLocale, defaultLocale } = useI18n();
</script>

<template>
    <UHeader :to="locale === defaultLocale ? '/' : `/${locale}`">
        <template #title>
            <NuxtImg src="/logo/ill-logo.png" alt="" class="h-7" />
            <span class="text-lg font-semibold">Inria Learning Lab</span>
        </template>

        <UNavigationMenu :items="header.nav[locale]" />

        <template #right>
            <UContentSearchButton />
            <UColorModeButton />
            <ULocaleSelect
                variant="ghost"
                :locales="[fr, en]"
                v-model="locale"
                @update:model-value="setLocale($event)"
            />
        </template>

        <template #body>
            <UNavigationMenu :items="header.nav[locale]" orientation="vertical" class="-mx-2.5" />
        </template>
    </UHeader>
</template>
