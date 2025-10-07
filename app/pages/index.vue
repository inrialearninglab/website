<script setup lang="ts">
import type { Collections } from "@nuxt/content";

const { locale } = useI18n();

const { data: home } = await useAsyncData(
    `home-${locale.value}`,
    async () => {
        const collection = ("content_" + locale.value) as keyof Collections;
        const content = await queryCollection(collection).path("/").first();

        if (!content && locale.value !== "fr") {
            return await queryCollection("content_fr").path("/").first();
        }

        return content;
    },
    {
        watch: [locale],
    },
);

useSeoMeta({
    title: home.value?.title,
    description: home.value?.description,
});
</script>

<template>
    <UPage v-if="home">
        <UPageBody>
            <ContentRenderer :value="home" />
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
