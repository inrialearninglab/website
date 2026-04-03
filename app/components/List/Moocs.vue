<script setup lang="ts">
import type { MoocsEnCollectionItem, MoocsFrCollectionItem } from "@nuxt/content";
const localePath = useLocalePath();

defineProps<{
    moocs: (MoocsFrCollectionItem | MoocsEnCollectionItem)[];
}>();
</script>

<template>
    <UPageGrid class="gap-5">
        <UPageCard
            v-for="mooc of moocs"
            :title="mooc.title"
            :description="mooc.description"
            orientation="vertical"
            reverse
            :to="localePath(mooc.path)"
        >
            <template #leading>
                <div class="flex gap-2 items-center">
                    <MoocStatus :status="mooc.status" />
                    <span v-for="l of mooc.lang" class="text-2xl">{{ getEmojiFlag(l) }}</span>
                </div>
            </template>
            <NuxtImg v-if="mooc.image" :src="mooc.image" alt="Thumbnail" class="w-full rounded-md" />
        </UPageCard>
    </UPageGrid>
</template>
