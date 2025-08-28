<script setup lang="ts">
const { data: seriousGames } = await useAsyncData(() =>
    queryCollection("seriousGames").where("path", "NOT LIKE", "/serious-games").all(),
);
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
            <img
                v-if="seriousGame.image"
                :src="seriousGame.image"
                alt="Thumbnail"
                class="w-full rounded-md aspect-video"
            />
        </UPageCard>
    </UPageGrid>
</template>
