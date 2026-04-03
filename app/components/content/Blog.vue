<script setup lang="ts">
const localePath = useLocalePath();

const { locale } = useI18n();
const { data: articles } = await useAsyncData(`blog-${locale.value}`, async () => {
    const collection = ("blog_" + locale.value) as "blog_en" | "blog_fr";

    return queryCollection(collection)
        .where("path", "NOT LIKE", "/blog")
        .where("draft", "=", false)
        .order("date", "DESC")
        .all();
});
</script>

<template>
    <div v-if="articles" class="flex flex-col gap-16">
        <UBlogPosts>
            <UBlogPost
                v-for="(post, index) in articles.slice(0, 3)"
                :key="index"
                v-bind="post"
                :to="localePath(post.path)"
            />
        </UBlogPosts>
        <UBlogPosts class="xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <UBlogPost
                v-for="(post, index) in articles.slice(3)"
                :key="index"
                v-bind="post"
                :to="localePath(post.path)"
            />
        </UBlogPosts>
    </div>
</template>
