<script setup lang="ts">
import { useVModel } from "@vueuse/core";
import type { CheckboxGroupItem } from "@nuxt/ui";

const props = defineProps<{
    modelValue: Filters;
    results: number;
}>();

const emit = defineEmits<{
    (e: "update:filters", value: Filters): void;
}>();

const data = useVModel(props, "modelValue", emit);
const { t } = useI18n();

const languages = ref([
    { label: "Français", value: "fr" },
    { label: "English", value: "en" },
] satisfies CheckboxGroupItem[]);

const status = ref([
    { label: "Open", value: "open" },
    { label: "Closed", value: "closed" },
    { label: "Archived", value: "archived" },
] satisfies CheckboxGroupItem[] & { value: (typeof statuses)[number] }[]);
</script>

<template>
    <div class="space-y-4">
        <UInput icon="lucide:search" v-model="data.search" :placeholder="t('search')" size="lg" class="w-full" />

        <UFormField :label="t('lang')" size="lg" orientation="horizontal">
            <UCheckboxGroup
                v-model="data.lang"
                :items="languages"
                orientation="horizontal"
                class="items-center justify-start"
            >
                <template #label="{ item }">
                    <div class="flex gap-1">
                        <span>{{ getEmojiFlag(item.value) }}</span>
                        <span>{{ item.label }}</span>
                    </div>
                </template>
            </UCheckboxGroup>
        </UFormField>

        <UFormField :label="t('status')" size="lg" orientation="horizontal">
            <UCheckboxGroup v-model="data.status" :items="status" orientation="horizontal">
                <template #label="{ item }">
                    <MoocStatus :status="item.value" />
                </template>
            </UCheckboxGroup>
        </UFormField>
        <p class="text-muted text-sm">{{ results }} {{ t("results") }}</p>
    </div>
</template>

<i18n lang="json" scoped>
{
    "fr": {
        "search": "Rechercher un MOOC...",
        "lang": "Langues",
        "status": "Statut",
        "results": "résultats"
    },
    "en": {
        "search": "Search a MOOC...",
        "lang": "Languages",
        "status": "Status",
        "results": "results"
    }
}
</i18n>
