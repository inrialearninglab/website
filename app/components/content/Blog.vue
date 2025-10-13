<script setup lang="ts">
import type { BlogPostProps } from "@nuxt/ui";
import type { Collections } from "@nuxt/content";

const { locale, defaultLocale } = useI18n();
const { data: articles } = await useAsyncData(`blog-${locale.value}`, async () => {
    const collection = ("blog_" + locale.value) as keyof Collections;

    return queryCollection(collection).where("path", "NOT LIKE", "/blog").order("date", "DESC").all();
});
</script>

<template>
    <UBlogPosts>
        <UBlogPost
            v-for="(post, index) in articles"
            :key="index"
            v-bind="post"
            :to="(locale === defaultLocale ? '' : `/${locale}`) + post.path"
        />
    </UBlogPosts>
</template>
