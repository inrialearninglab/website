<script setup lang="ts">
import { withoutLeadingSlash } from "ufo";

const route = useRoute();
const { locale, t } = useI18n({
    useScope: "local",
});
const slug = computed(() => withoutLeadingSlash(String(route.params.slug)));

const { data: seriousGame } = await useAsyncData(
    `serious-game-${slug.value}-${locale.value}`,
    async () => {
        const collection = ("serious_games_" + locale.value) as "serious_games_fr" | "serious_games_en";

        const seriousGame = await queryCollection(collection).path(`/serious-games/${slug.value}`).first();

        if (!seriousGame && locale.value !== "fr") {
            return await queryCollection("serious_games_fr").path(`/serious-games/${slug.value}`).first();
        }

        return seriousGame;
    },
    { watch: [locale] },
);
</script>

<template>
    <UPage v-if="seriousGame">
        <UPageHeader :title="seriousGame.title" :headline="t('serious-game')" :description="seriousGame.description" />

        <UPageBody>
            <ContentRenderer :value="seriousGame" />
        </UPageBody>
    </UPage>
    <UError
        v-else
        :error="{
            statusCode: 404,
            statusMessage: t('error-title'),
            message: t('error-message'),
        }"
    />
</template>

<i18n lang="json">
{
    "fr": {
        "serious-game": "Jeu sérieux",
        "error-title": "Jeu sérieux introuvable",
        "error-message": "La page que vous recherchez n'existe pas."
    },
    "en": {
        "serious-game": "Serious game",
        "error-title": "Serious game not found",
        "error-message": "The page you are looking for does not exist."
    }
}
</i18n>
