<script setup lang="ts">
const props = defineProps<{
    preview?: boolean;
}>();

const { data: epocs } = await useAsyncData(() =>
    queryCollection("epocs")
        .where("path", "NOT LIKE", "/epocs")
        .order("date", "DESC")
        .limit(props.preview ? 4 : 50)
        .all(),
);
</script>

<template>
    <UPageGrid class="gap-5">
        <UPageCard
            v-for="epoc of epocs"
            :title="epoc.title"
            :description="epoc.description"
            orientation="vertical"
            reverse
            :to="epoc.path"
        >
            <img v-if="epoc.image" :src="epoc.image" alt="Thumbnail" class="w-full rounded-md" />
        </UPageCard>
    </UPageGrid>
</template>
