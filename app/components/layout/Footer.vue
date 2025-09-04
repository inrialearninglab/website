<script setup lang="ts">
const { footer } = useAppConfig();

const { locale } = useI18n();
</script>

<template>
    <UFooter>
        <template #left>
            <p class="text-muted text-sm">{{ footer.copyright }}</p>
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
            />
        </template>
    </UFooter>
</template>
