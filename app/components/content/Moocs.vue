<script setup lang="ts">
import type { Collections } from "@nuxt/content";

const { locale, defaultLocale } = useI18n();
const { data: moocs } = await useAsyncData("moocs", async () => {
    const collection = ("moocs_" + locale.value) as keyof Collections;

    return queryCollection(collection).where("path", "NOT LIKE", "/moocs").order("date", "DESC").all();
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
