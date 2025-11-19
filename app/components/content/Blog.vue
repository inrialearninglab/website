<script setup lang="ts">
const localePath = useLocalePath();

const { locale } = useI18n();
const { data: articles } = await useAsyncData(`blog-${locale.value}`, async () => {
    const collection = ("blog_" + locale.value) as "blog_en" | "blog_fr";

    return queryCollection(collection).where("path", "NOT LIKE", "/blog").order("date", "DESC").all();
});
</script>

<template>
    <UBlogPosts>
        <UBlogPost
            v-for="(post, index) in articles"
            :orientation="index === 0 ? 'horizontal' : 'vertical'"
            :key="index"
            v-bind="post"
            :to="localePath(post.path)"
            :class="[index === 0 && 'col-span-full']"
        />
    </UBlogPosts>
</template>
