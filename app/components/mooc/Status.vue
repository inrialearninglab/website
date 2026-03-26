<script setup lang="ts">
import type { BadgeProps } from "@nuxt/ui";

defineProps<{
    status: (typeof statuses)[number];
}>();

const { t } = useI18n({
    useScope: "local",
});

const statusInfo: Record<(typeof statuses)[number], BadgeProps["color"]> = {
    open: {
        color: "success",
    },
    closed: {
        tooltip: t("closed-callout"),
        icon: "lucide:circle-alert",
        color: "error",
    },
    archived: {
        tooltip: t("archived-callout"),
        icon: "lucide:circle-alert",
        color: "warning",
    },
};
</script>

<template>
    <UTooltip :text="statusInfo[status]?.tooltip" :delay-duration="0">
        <UBadge variant="subtle" :color="statusInfo[status].color" :label="t(status)" :icon="statusInfo[status].icon" />
    </UTooltip>
</template>

<i18n lang="json">
{
    "fr": {
        "open": "Ouvert",
        "closed": "Fermé",
        "archived": "Archivé",
        "closed-callout": "Ce cours est fermé sur FUN et n'est plus accessible",
        "archived-callout": "Ce cours est archivé, son accès est limité en lecture seule"
    },
    "en": {
        "open": "Open",
        "closed": "Closed",
        "archived": "Archived",
        "closed-callout": "This course is closed on FUN and no longer accessible",
        "archived-callout": "This course is archived, access is limited to read-only"
    }
}
</i18n>
