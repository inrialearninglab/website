<script setup lang="ts">
const localePath = useLocalePath();
const { locale } = useI18n();

const statusOrder: Record<string, number> = { open: 0, archived: 1, closed: 2 };

const { data: moocs } = await useAsyncData(`moocs-combined-${locale.value}`, async () => {
    const [fr, en] = await Promise.all([
        queryCollection("moocs_fr").where("path", "NOT LIKE", "/moocs").all(),
        queryCollection("moocs_en").where("path", "NOT LIKE", "/moocs").all(),
    ]);

    const merged = [...fr, ...en];

    return merged.sort((a, b) => {
        const diff = (statusOrder[a.status] ?? 99) - (statusOrder[b.status] ?? 99);
        return diff !== 0 ? diff : new Date(b.date).getTime() - new Date(a.date).getTime();
    });
});

const moocsForDisplay = computed(() => {
    if (!moocs.value) return [];

    const grouped = new Map<string, any[]>();

    moocs.value.forEach((mooc) => {
        const baseId = mooc.id.split("/").slice(1).join("/");
        if (!grouped.has(baseId)) grouped.set(baseId, []);
        grouped.get(baseId)!.push(mooc);
    });

    return Array.from(grouped.values()).map((group) => {
        const currentPrefix = `moocs_${locale.value}`;

        const bestMatch = group.find((m) => m.id.startsWith(currentPrefix)) ?? group[0];

        return {
            ...bestMatch,
            selectedLocale: bestMatch.id.startsWith("moocs_fr") ? "fr" : "en",
        };
    });
});
</script>

<template>
    <UPageGrid class="gap-5">
        <UPageCard
            v-for="mooc of moocsForDisplay"
            :title="mooc.title"
            :description="mooc.description"
            orientation="vertical"
            reverse
            :to="localePath(mooc.path, mooc.selectedLocale)"
        >
            <template #leading>
                <div class="flex gap-2 items-center">
                    <MoocStatus :status="mooc.status" />
                    <span class="text-2xl">{{ getEmojiFlag(mooc.selectedLocale) }}</span>
                </div>
            </template>
            <NuxtImg v-if="mooc.image" :src="mooc.image" alt="Thumbnail" class="w-full rounded-md" />
        </UPageCard>
    </UPageGrid>
</template>
