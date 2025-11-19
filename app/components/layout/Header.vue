<script setup lang="ts">
import { fr, en } from "@nuxt/ui/locale";

const { header } = useAppConfig();
const { locale, setLocale } = useI18n();
const localePath = useLocalePath();
</script>

<template>
    <UHeader :to="localePath('/')">
        <template #title>
            <UColorModeImage light="/logo/ill-logo.svg" dark="/logo/ill-logo-dark.svg" class="h-8" />
        </template>

        <UNavigationMenu :items="header.nav[locale]" />

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
            <UNavigationMenu :items="header.nav[locale]" orientation="vertical" class="-mx-2.5" />
        </template>
    </UHeader>
</template>
