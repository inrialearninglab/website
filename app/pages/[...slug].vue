<script setup lang="ts">
const route = useRoute();
const { data: page } = await useAsyncData(`${route.path}`, () => queryCollection("content").path(route.path).first());

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
