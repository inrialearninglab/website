<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection("content").path("/").first());

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
