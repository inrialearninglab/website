<script setup lang="ts">
defineProps<{
    items: string[];
}>();
</script>

<template>
    <UCarousel v-slot="{ item }" loop dots arrows :items="items" :ui="{ item: 'basis-1/3' }">
        <NuxtImg :src="item" class="rounded-lg" />
    </UCarousel>
</template>
