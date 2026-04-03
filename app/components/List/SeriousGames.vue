<script setup lang="ts">
import type { SeriousGamesEnCollectionItem, SeriousGamesFrCollectionItem } from "@nuxt/content";

defineProps<{
    seriousGames: (SeriousGamesEnCollectionItem | SeriousGamesFrCollectionItem)[];
}>();

const localePath = useLocalePath();
</script>

<template>
    <UPageGrid class="gap-5">
        <UPageCard
            v-for="seriousGame of seriousGames"
            :title="seriousGame.title"
            :description="seriousGame.description"
            orientation="vertical"
            reverse
            :to="localePath(seriousGame.path)"
        >
            <NuxtImg
                v-if="seriousGame.image"
                :src="seriousGame.image"
                alt="Thumbnail"
                class="w-full rounded-md aspect-video"
            />
        </UPageCard>
    </UPageGrid>
</template>
