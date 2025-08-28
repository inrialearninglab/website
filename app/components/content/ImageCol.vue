<script setup lang="ts">
withDefaults(
    defineProps<{
        src: string;
        alt?: string;
        side: "right" | "left";
    }>(),
    { side: "left" },
);
</script>

<template>
    <UPageCTA :reverse="side === 'left'" orientation="horizontal" variant="naked" :ui="{ container: 'p-0!' }">
        <template #header>
            <slot />
        </template>
        <NuxtImg :src="src" :alt="alt" />
    </UPageCTA>
</template>
