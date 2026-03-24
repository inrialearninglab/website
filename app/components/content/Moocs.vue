<script setup lang="ts">
const localePath = useLocalePath();
const { locale, t } = useI18n();

const statusOrder: Record<string, number> = { open: 0, archived: 1, closed: 2 };

const { data: moocs } = await useAsyncData(`moocs-${locale.value}`, async () => {
    const collection = ("moocs_" + locale.value) as "moocs_fr" | "moocs_en";

    return queryCollection(collection)
        .where("path", "NOT LIKE", "/moocs")
        .where("draft", "=", false)
        .order("date", "DESC")
        .all()
        .then((items) =>
            items.sort((a, b) => {
                (statusOrder[a.status] ?? 99) - (statusOrder[b.status] ?? 99);
            }),
        );
});

const filters = reactive({
    ...DEFAULT_FILTERS,
});

const filteredMoocs = computed(() => {
    if (!moocs.value) return [];

    return moocs.value.filter((mooc) => {
        const titleMatch = filters.search ? mooc.title.toLowerCase().includes(filters.search.toLowerCase()) : true;
        const langMatch = filters.lang ? filters.lang.some((l) => mooc.lang.includes(l)) : true;
        const statusMatch = filters.status ? filters.status.includes(mooc.status) : true;
        return titleMatch && langMatch && statusMatch;
    });
});
</script>

<template>
    <div class="space-y-5">
        <MoocFilters v-model="filters" :results="filteredMoocs.length" />

        <UPageGrid class="gap-5">
            <template v-if="filteredMoocs.length">
                <UPageCard
                    v-for="mooc of filteredMoocs"
                    :title="mooc.title"
                    :description="mooc.description"
                    orientation="vertical"
                    reverse
                    :to="localePath(mooc.path)"
                >
                    <template #leading>
                        <div class="flex gap-2 items-center">
                            <MoocStatus :status="mooc.status" />
                            <span v-for="l of mooc.lang" class="text-2xl">{{ getEmojiFlag(l) }}</span>
                        </div>
                    </template>
                    <NuxtImg v-if="mooc.image" :src="mooc.image" alt="Thumbnail" class="w-full rounded-md" />
                </UPageCard>
            </template>

            <UEmpty
                v-else
                :title="t('not-found')"
                :description="t('not-found-description')"
                class="w-full col-span-1 md:col-span-2 xl:col-span-3"
                variant="naked"
                icon="lucide:file"
            />
        </UPageGrid>
    </div>
</template>

<i18n lang="json" scoped>
{
    "fr": {
        "not-found": "Aucun MOOC trouvé",
        "not-found-description": "Aucun MOOC ne correspond à votre recherche.",
        "filters": "Filtres"
    },
    "en": {
        "not-found": "No MOOC found",
        "not-found-description": "No MOOC matches your search.",
        "filters": "Filters"
    }
}
</i18n>
