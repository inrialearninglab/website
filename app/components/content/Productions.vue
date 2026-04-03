<script setup lang="ts">
const { locale, t } = useI18n();
const localePath = useLocalePath();

const { data: epocs } = await useAsyncData(`epocs-preview-${locale.value}`, async () => {
    const collection = ("epocs_" + locale.value) as "epocs_fr" | "epocs_en";

    return queryCollection(collection)
        .where("path", "NOT LIKE", "/epocs")
        .where("draft", "=", false)
        .order("date", "DESC")
        .limit(4)
        .all();
});

const { data: moocs } = await useAsyncData(`moocs-preview-${locale.value}`, async () => {
    const collection = ("moocs_" + locale.value) as "moocs_fr" | "moocs_en";

    return queryCollection(collection)
        .where("path", "NOT LIKE", "/moocs")
        .where("draft", "=", false)
        .where("status", "LIKE", "open")
        .order("date", "DESC")
        .limit(3)
        .all();
});

const { data: seriousGames } = await useAsyncData(`serious-games-preview-${locale.value}`, () => {
    const collection = ("serious_games_" + locale.value) as "serious_games_fr" | "serious_games_en";

    return queryCollection(collection)
        .where("path", "NOT LIKE", "/serious-games")
        .where("draft", "=", false)
        .limit(3)
        .all();
});
</script>

<template>
    <div class="space-y-10">
        <div class="flex flex-col gap-5">
            <h2 class="text-2xl font-semibold">ePocs</h2>

            <ListEpocs v-if="epocs" :epocs="epocs" />

            <UButton
                :label="t('see-more')"
                trailing-icon="lucide:arrow-right"
                size="lg"
                class="mx-auto"
                :to="localePath('/epocs')"
            />
        </div>

        <div class="flex flex-col gap-5">
            <h2 class="text-2xl font-semibold">MOOCs</h2>

            <ListMoocs v-if="moocs" :moocs="moocs" />

            <UButton
                :label="t('see-more')"
                trailing-icon="lucide:arrow-right"
                size="lg"
                class="mx-auto"
                :to="localePath('/moocs')"
            />
        </div>

        <div class="flex flex-col gap-5">
            <h2 class="text-2xl font-semibold">{{ t("serious-games") }}</h2>

            <ListSeriousGames v-if="seriousGames" :serious-games="seriousGames" />

            <UButton
                :label="t('see-more')"
                trailing-icon="lucide:arrow-right"
                size="lg"
                class="mx-auto"
                :to="localePath('/serious-games')"
            />
        </div>
    </div>
</template>

<i18n lang="json">
{
    "fr": {
        "serious-games": "Jeux sérieux",
        "see-more": "Voir plus"
    },
    "en": {
        "serious-games": "Serious games",
        "see-more": "See more"
    }
}
</i18n>
