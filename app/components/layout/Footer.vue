<script setup lang="ts">
const { footer } = useAppConfig();

const { locale } = useI18n();
</script>

<template>
    <USeparator icon="lucide:graduation-cap" class="mt-0 h-px" />

    <UFooter>
        <template #left>
            <img src="/logo/inria.svg" class="max-w-40 mx-auto" />
        </template>

        <UNavigationMenu :items="footer.links[locale]" />

        <template #right>
            <UButton
                v-for="link of footer.right"
                :key="link.to"
                :icon="link.icon"
                :to="link.to"
                variant="ghost"
                color="neutral"
                :aria-label="link.label"
            />
        </template>
    </UFooter>
</template>
