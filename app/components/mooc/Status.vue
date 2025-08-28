<script setup lang="ts">
defineProps<{
    status: "open" | "closed" | "archived";
}>();

const statusInfo = {
    open: {
        color: "success",
        label: "Ouvert",
    },
    closed: {
        color: "error",
        label: "Fermé",
    },
    archived: {
        color: "warning",
        label: "Archivé",
    },
};
</script>

<template>
    <UBadge variant="subtle" :color="statusInfo[status].color" :label="statusInfo[status].label" />
</template>
