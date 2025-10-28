<script setup lang="ts">
import type { Collections } from "@nuxt/content";

const { locale } = useI18n();
const { data: seriousGames } = await useAsyncData(`serious-games-${locale.value}`, () => {
    const collection = ("seriousGames_" + locale.value) as keyof Collections;

    return queryCollection(collection).where("path", "NOT LIKE", "/serious-games").all();
});
</script>

<template>
    <UPageGrid class="gap-5">
        <UPageCard
            v-for="seriousGame of seriousGames"
            :title="seriousGame.title"
            :description="seriousGame.description"
            orientation="vertical"
            reverse
            :to="seriousGame.path"
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
