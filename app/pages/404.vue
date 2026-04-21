<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
    <UError
        :error="{
            statusCode: 404,
            statusMessage: t('error-title'),
            message: t('error-message'),
        }"
    />
</template>

<i18n lang="json" scoped>
{
    "fr": {
        "error-title": "Page introuvable",
        "error-message": "La page que vous cherchez n'existe pas"
    },
    "en": {
        "error-title": "Page not found",
        "error-message": "The page you are looking for does not exist"
    }
}
</i18n>
