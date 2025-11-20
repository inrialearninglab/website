<script setup lang="ts">
import type { BadgeProps } from "@nuxt/ui";

defineProps<{
    status: "open" | "closed" | "archived";
}>();

const { t } = useI18n({
    useScope: "local",
});

const statusInfo: Record<string, BadgeProps["color"]> = {
    open: "success",
    closed: "error",
    archived: "warning",
};
</script>

<template>
    <UBadge variant="subtle" :color="statusInfo[status]" :label="t(status)" />
</template>

<i18n lang="json">
{
    "fr": {
        "open": "Ouvert",
        "closed": "Fermé",
        "archived": "Archivé"
    },
    "en": {
        "open": "Open",
        "closed": "Closed",
        "archived": "Archived"
    }
}
</i18n>
