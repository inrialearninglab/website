<script setup lang="ts">
import { withLeadingSlash } from "ufo";
import type { Collections } from "@nuxt/content";

const { locale } = useI18n();
const route = useRoute();
const slug = computed(() => withLeadingSlash(String(route.params.slug)));

const { data: page } = await useAsyncData(
    "page-" + slug.value,
    async () => {
        const collection = ("content_" + locale.value) as keyof Collections;
        const content = await queryCollection(collection).path(slug.value).first();

        if (!content && locale.value !== "fr") {
            return await queryCollection("content_fr").path(slug.value).first();
        }

        return content;
    },
    {
        watch: [locale],
    },
);

useSeoMeta({
    title: page.value?.title,
    description: page.value?.description,
});
</script>

<template>
    <UPage v-if="page">
        <UPageHeader :title="page.title" :description="page.description" />
        <UPageBody>
            <ContentRenderer :value="page" />
        </UPageBody>
    </UPage>

    <UError
        v-else
        :error="{
            statusCode: 404,
            statusMessage: 'Page not found',
            message: 'The page you are looking for does not exist.',
        }"
    />
</template>
