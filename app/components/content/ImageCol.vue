<script setup lang="ts">
defineProps<{
    src: string;
    alt?: string;
    reverse?: boolean;
}>();
</script>

<template>
    <UPageSection :reverse="reverse" orientation="horizontal" variant="naked" :ui="{ container: 'p-0!' }">
        <template #header>
            <slot />
        </template>
        <NuxtImg :src="src" :alt="alt" />
    </UPageSection>
</template>
