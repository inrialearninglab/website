<script setup lang="ts">
import type { PageCTAProps } from "@nuxt/ui";

const props = defineProps({}) as PageCTAProps;
</script>

<template>
    <UPageCTA v-bind="props" />
</template>
