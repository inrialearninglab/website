<script setup lang="ts">
import { useDateFormat } from "@vueuse/core";
import { withoutLeadingSlash } from "ufo";
import type { Collections } from "@nuxt/content";

const route = useRoute();
const { locale } = useI18n();
const slug = computed(() => withoutLeadingSlash(String(route.params.slug)));

const { data: article } = await useAsyncData(
    `article-${slug.value}-${locale.value}`,
    async () => {
        const collection = ("blog_" + locale.value) as keyof Collections;

        const article = await queryCollection(collection).path(`/blog/${slug.value}`).first();

        if (!article && locale.value === "fr") {
            return await queryCollection("blog_fr").path(`/blog/${slug.value}`).first();
        }

        return article;
    },
    {
        watch: [locale],
    },
);
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
            statusMessage: 'Article not found',
            message: 'The article you are looking for does not exist.',
        }"
    />
</template>
