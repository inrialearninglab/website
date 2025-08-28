<script setup lang="ts">
const { footer } = useAppConfig();
</script>

<template>
    <UFooter>
        <template #left>
            <p class="text-muted text-sm">{{ footer.copyright }}</p>
        </template>

        <template #right>
            <UNavigationMenu :items="footer.right" />
        </template>
    </UFooter>
</template>
