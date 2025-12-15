<script setup lang="ts">
const { footer } = useAppConfig();

const { locale } = useI18n();
const localePath = useLocalePath();

const links = computed(() => {
    return footer.links[locale.value].map((item) => ({
        ...item,
        to: localePath(item.to),
    }));
});
</script>

<template>
    <USeparator icon="lucide:graduation-cap" class="mt-0 h-px" />

    <UFooter>
        <template #left>
            <p class="text-muted text-sm">{{ footer.copyright }}</p>
        </template>

        <UNavigationMenu :items="links" />

        <template #right>
            <UButton
                v-for="link of footer.right"
                :key="link.to"
                :icon="link.icon"
                :to="link.to"
                variant="ghost"
                color="neutral"
            />
        </template>
    </UFooter>
</template>
