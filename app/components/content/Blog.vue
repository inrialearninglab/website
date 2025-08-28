<script setup lang="ts">
import type { BlogPostProps } from "@nuxt/ui";
const props = defineProps<{
    preview?: boolean;
}>();

const { data: articles } = await useAsyncData(() =>
    queryCollection("blog")
        .where("path", "NOT LIKE", "/blog")
        .order("date", "DESC")
        .limit(props.preview ? 3 : 50)
        .all(),
);
</script>

<template>
    <UBlogPosts>
        <UBlogPost v-for="(post, index) in articles" :key="index" v-bind="post" :to="post.path" />
    </UBlogPosts>
</template>
