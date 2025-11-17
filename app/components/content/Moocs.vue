<script setup lang="ts">
import type { Collections } from "@nuxt/content";

const { locale, defaultLocale } = useI18n();
const { data: moocs } = await useAsyncData(`moocs-${locale.value}`, async () => {
    const collection = ("moocs_" + locale.value) as keyof Collections;

    const results = await queryCollection(collection).where("path", "NOT LIKE", "/moocs").order("date", "DESC").all();
    const statusOrder = { open: 0, archived: 1, closed: 2 };

    return results.sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);
});
</script>

<template>
    <UPageGrid class="gap-5">
        <UPageCard
            v-for="mooc of moocs"
            :title="mooc.title"
            :description="mooc.description"
            orientation="vertical"
            reverse
            :to="(locale === defaultLocale ? '' : `/${locale}`) + mooc.path"
        >
            <template #leading>
                <MoocStatus :status="mooc.status" />
            </template>
            <NuxtImg v-if="mooc.image" :src="mooc.image" alt="Thumbnail" class="w-full rounded-md" />
        </UPageCard>
    </UPageGrid>
</template>
