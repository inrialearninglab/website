<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
import { fr, en } from "@nuxt/ui/locale";

const { header } = useAppConfig();
</script>

<template>
    <UHeader>
        <template #title>
            <NuxtImg src="/logo/ill-logo.png" alt="" class="h-7" />
            <span class="text-lg font-semibold">Inria Learning Lab</span>
        </template>

        <UNavigationMenu :items="header.nav" />

        <template #right>
            <UColorModeButton />
            <ULocaleSelect variant="ghost" :locales="[fr, en]" />
        </template>

        <template #body>
            <UNavigationMenu :items="header.nav" orientation="vertical" class="-mx-2.5" />
        </template>
    </UHeader>
</template>
