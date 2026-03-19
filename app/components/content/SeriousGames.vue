<script setup lang="ts">
const localePath = useLocalePath();
const { locale } = useI18n();

const { data: seriousGames } = await useAsyncData(`serious-games-${locale.value}`, () => {
    const collection = ("serious_games_" + locale.value) as "serious_games_fr" | "serious_games_en";

    return queryCollection(collection).where("path", "NOT LIKE", "/serious-games").where("draft", "=", false).all();
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
