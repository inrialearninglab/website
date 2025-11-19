<script setup lang="ts">
import { useDateFormat } from "@vueuse/core";
import { withoutLeadingSlash } from "ufo";

const route = useRoute();
const { locale } = useI18n();
const slug = computed(() => withoutLeadingSlash(String(route.params.slug)));

const { data: article } = await useAsyncData(
    `article-${slug.value}-${locale.value}`,
    async () => {
        const collection = ("blog_" + locale.value) as "blog_fr" | "blog_en";

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
const { tags } = useTags();
</script>

<template>
    <UPage v-if="article">
        <UPageHeader :title="article.title" :description="article.description" :headline="$t('article')">
            <template #links>
                <p class="flex items-center gap-2">
                    <UIcon name="lucide:calendar" class="size-5" />
                    {{ useDateFormat(article.date, "D MMMM YYYY", { locales: "fr-FR" }) }}
                </p>
            </template>

            <div class="flex gap-2 flex-wrap mt-4">
                <template v-for="tag of article.tags">
                    <UBadge v-if="tags?.[tag]" variant="soft" color="neutral">
                        {{ tags[tag][locale] }}
                    </UBadge>
                </template>
            </div>
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

<i18n lang="yaml" global>
en:
    article: Article
fr:
    article: Article
</i18n>
