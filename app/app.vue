<script setup lang="ts">
import * as locales from "@nuxt/ui/locale";

const { locale } = useI18n();

const collection = computed(() => ("content_" + locale.value) as "content_fr" | "content_en");

const { data: navigation } = await useAsyncData(`navigation-${locale.value}`, () =>
    queryCollectionNavigation(collection.value),
);

const { data: rawFiles } = useLazyAsyncData(
    `search-${locale.value}`,
    () => queryCollectionSearchSections(collection.value, { extraFields: ["draft"] }),
    { server: false, watch: [collection] },
);

const files = computed(() => rawFiles.value?.filter((section) => !section.draft) ?? []);

const searchTerm = ref("");
</script>

<template>
    <UApp :locale="locales[locale]">
        <ClientOnly>
            <LazyUContentSearch
                :key="locale"
                v-model:search-term="searchTerm"
                shortcut="meta_k"
                :color-mode="false"
                :files="files"
                :navigation="navigation"
                :fuse="{ resultLimit: 3 }"
            />
        </ClientOnly>

        <div class="min-h-screen flex flex-col">
            <NuxtRouteAnnouncer />
            <LayoutHeader />
            <UMain>
                <NuxtLayout>
                    <NuxtPage class="w-full" />
                </NuxtLayout>
            </UMain>
            <LayoutFooter />
        </div>
    </UApp>
</template>
