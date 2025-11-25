<script setup lang="ts">
const { data: navigation } = await useAsyncData("navigation", () => queryCollectionNavigation("content_fr"));
const { data: files } = useLazyAsyncData("search", () => queryCollectionSearchSections("content_fr"), {
    server: false,
});

const searchTerm = ref("");
</script>

<template>
    <UApp>
        <ClientOnly>
            <LazyUContentSearch
                v-model:search-term="searchTerm"
                shortcut="meta_k"
                :files="files"
                :navigation="navigation"
                :fuse="{ resultLimit: 42 }"
            />
        </ClientOnly>
        <div class="min-h-screen flex flex-col">
            <NuxtRouteAnnouncer />
            <LayoutHeader />
            <NuxtLayout>
                <NuxtPage class="w-full" />
            </NuxtLayout>
            <LayoutFooter />
        </div>
    </UApp>
</template>
