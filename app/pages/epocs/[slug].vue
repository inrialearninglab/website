<script setup lang="ts">
import { withoutLeadingSlash } from "ufo";
import type { Collections } from "@nuxt/content";

const { locale } = useI18n();
const route = useRoute();
const slug = computed(() => withoutLeadingSlash(String(route.params.slug)));
const { data: epoc } = await useAsyncData(
    "epoc-" + slug.value,
    async () => {
        const collection = ("epocs_" + locale.value) as keyof Collections;

        const epoc = await queryCollection(collection).path(`/epocs/${slug.value}`).first();

        if (!epoc && locale.value !== "fr") {
            return await queryCollection("epocs_fr").path(`/epocs/${slug.value}`).first();
        }

        return epoc;
    },
    {
        watch: [locale],
    },
);

const links = ref([
    {
        label: "Découvrir sur Android",
        trailingIcon: "lucide:arrow-up-right",
    },
    {
        label: "Découvrir sur IOS",
        trailingIcon: "lucide:arrow-up-right",
    },
]);
</script>

<template>
    <UPage v-if="epoc">
        <UPageBody>
            <UPageCTA
                :title="epoc.title"
                :description="epoc.description"
                :links="links"
                orientation="horizontal"
                variant="naked"
            >
                <NuxtImg :src="epoc.image" alt="" />
            </UPageCTA>
            <ContentRenderer :value="epoc" />
        </UPageBody>
    </UPage>

    <UError
        v-else
        :error="{
            statusCode: 404,
            statusMessage: 'ePoc not found',
            message: 'The ePoc you are looking for does not exist.',
        }"
    />
</template>
