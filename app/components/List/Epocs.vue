<script setup lang="ts">
import type { EpocsEnCollectionItem, EpocsFrCollectionItem } from "@nuxt/content";

defineProps<{
    epocs: (EpocsFrCollectionItem | EpocsEnCollectionItem)[];
}>();

const localePath = useLocalePath();
</script>

<template>
    <UPageGrid class="gap-5 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <UPageCard
            v-for="epoc of epocs"
            :title="epoc.title"
            :description="epoc.description"
            orientation="vertical"
            reverse
            :to="localePath(epoc.path)"
        >
            <NuxtImg v-if="epoc.image" :src="epoc.image" alt="Thumbnail" class="w-full rounded-md" />
        </UPageCard>
    </UPageGrid>
</template>
