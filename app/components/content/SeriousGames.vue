<script setup lang="ts">
const { locale } = useI18n();

const { data: seriousGames } = await useAsyncData(`serious-games-${locale.value}`, () => {
    const collection = ("serious_games_" + locale.value) as "serious_games_fr" | "serious_games_en";

    return queryCollection(collection).where("path", "NOT LIKE", "/serious-games").where("draft", "=", false).all();
});
</script>

<template>
    <ListSeriousGames v-if="seriousGames" :serious-games="seriousGames" />
</template>
