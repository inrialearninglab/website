<script setup lang="ts">
const route = useRoute();
const { data: epoc } = await useAsyncData(() => queryCollection("epocs").path(route.path).first());

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
            statusMessage: 'Page not found',
            message: 'The page you are looking for does not exist.',
        }"
    />
</template>
