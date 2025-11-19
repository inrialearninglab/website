<script setup lang="ts">
const localePath = useLocalePath();
const { locale } = useI18n();
const { data: epocs } = await useAsyncData(`epocs-${locale.value}`, async () => {
    const collection = ("epocs_" + locale.value) as "epocs_fr" | "epocs_en";

    return queryCollection(collection).where("path", "NOT LIKE", `/epocs`).order("date", "DESC").all();
});
</script>

<template>
    <UPageGrid class="gap-5">
        <UPageCard
            v-for="epoc of epocs"
            :title="epoc.title"
            :description="epoc.description"
            orientation="vertical"
            reverse
            :to="localePath(epoc.path)"
        >
            <NuxtImg v-if="epoc.image" :src="epoc.image" alt="Thumbnail" class="w-full rounded-md" />
        </UPageCard>
    </UPageGrid>
</template>
