<script setup lang="ts">
import { fr, en } from "@nuxt/ui/locale";

const { header } = useAppConfig();
const { locale, setLocale } = useI18n();
const localePath = useLocalePath();
</script>

<template>
    <UHeader :to="localePath('/')" :ui="{ center: 'flex-1', left: 'flex-none!', right: 'flex-none!' }">
        <template #title>
            <UColorModeImage light="/logo/ill-logo.svg" dark="/logo/ill-logo-dark.svg" class="h-8" alt="Logo" />
        </template>

        <UNavigationMenu :items="header.nav[locale]" class="w-full justify-center" :ui="{ viewport: 'max-w-2xl' }" />

        <template #right>
            <UContentSearchButton />

            <ULocaleSelect
                variant="ghost"
                :locales="[fr, en]"
                v-model="locale"
                @update:model-value="setLocale($event as 'fr' | 'en')"
            />
        </template>

        <template #body>
            <UNavigationMenu :items="header.nav[locale]" orientation="vertical" class="-mx-2.5" />
        </template>
    </UHeader>
</template>
