<script setup lang="ts">
const props = defineProps<{
    preview?: boolean;
}>();

const { data: moocs } = await useAsyncData(() =>
    queryCollection("moocs")
        .where("path", "NOT LIKE", "/moocs")
        .order("date", "DESC")
        .limit(props.preview ? 3 : 50)
        .all(),
);
</script>

<template>
    <UPageGrid class="gap-5">
        <UPageCard
            v-for="mooc of moocs"
            :title="mooc.title"
            :description="mooc.description"
            orientation="vertical"
            reverse
            :to="mooc.path"
        >
            <template #leading>
                <MoocStatus :status="mooc.status" />
            </template>
            <img v-if="mooc.image" :src="mooc.image" alt="Thumbnail" class="w-full rounded-md" />
        </UPageCard>
    </UPageGrid>
</template>
