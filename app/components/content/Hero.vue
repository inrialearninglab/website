<script setup lang="ts">
defineProps<{
    title: string;
    description: string;
}>();
</script>

<template>
    <UPageHero :title="title" :description="description" :ui="{ title: 'text-3xl!', container: 'py-8!' }" />
</template>
