<script setup lang="ts">
import { useDateFormat } from "@vueuse/core";

const route = useRoute();

const { data: article } = await useAsyncData(() => queryCollection("blog").path(route.path).first());
</script>

<template>
    <UPage v-if="article">
        <UPageHeader :title="article.title" :description="article.description">
            <template #links>
                <p class="flex items-center gap-2">
                    <UIcon name="lucide:calendar" class="size-5" />
                    {{ useDateFormat(article.date, "D MMMM YYYY", { locales: "fr-FR" }) }}
                </p>
            </template>
        </UPageHeader>
        <UPageBody>
            <ContentRenderer :value="article" />
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
