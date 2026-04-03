<script setup lang="ts">
const { locale } = useI18n();
const { data: epocs } = await useAsyncData(`epocs-${locale.value}`, async () => {
    const collection = ("epocs_" + locale.value) as "epocs_fr" | "epocs_en";

    return queryCollection(collection)
        .where("path", "NOT LIKE", `/epocs`)
        .where("draft", "=", false)
        .order("date", "DESC")
        .all();
});
</script>

<template>
    <ListEpocs v-if="epocs" :epocs="epocs" />
</template>
