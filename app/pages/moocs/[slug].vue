<script setup lang="ts">
import { useDateFormat } from "@vueuse/core";
import { withoutLeadingSlash } from "ufo";
import * as locales from "@nuxt/ui/locale";

const route = useRoute();
const { locale, t } = useI18n({
    useScope: "local",
});
const slug = computed(() => withoutLeadingSlash(String(route.params.slug)));

const { data: mooc } = await useAsyncData(
    `mooc-${slug.value}-${locale.value}`,
    async () => {
        const collection = ("moocs_" + locale.value) as "moocs_fr" | "moocs_en";

        const mooc = await queryCollection(collection).path(`/moocs/${slug.value}`).first();

        if (!mooc && locale.value !== "fr") {
            return await queryCollection("moocs_fr").path(`/moocs/${slug.value}`).first();
        }

        return mooc;
    },
    {
        watch: [locale],
    },
);
</script>

<template>
    <UPage v-if="mooc">
        <UPageHeader :title="mooc.title" headline="MOOC">
            <template #links>
                <MoocStatus :status="mooc.status" />
            </template>

            <template #description>
                <p class="mb-4">{{ mooc.description }}</p>
                <div class="flex gap-5">
                    <p v-if="mooc.date" class="flex items-center gap-2">
                        <UIcon name="lucide:calendar" />
                        {{ useDateFormat(mooc.date, "D MMMM YYYY", { locales: locale }) }}
                    </p>
                    <p v-if="mooc.investment" class="flex items-center gap-2">
                        <UIcon name="lucide:clock" />{{ mooc.investment }}
                    </p>
                    <div v-if="mooc.lang" class="flex items-center gap-2">
                        <UIcon name="lucide:globe" />
                        <div class="flex gap-2">
                            <div v-for="(lang, index) of mooc.lang" class="flex items-center gap-1">
                                <span>{{ getEmojiFlag(lang) }} </span>
                                <p>{{ locales[lang].name }}{{ index !== mooc.lang.length - 1 ? ", " : "" }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </UPageHeader>

        <UPageBody>
            <UAlert
                v-if="mooc.status === 'closed'"
                :description="t('closed-callout')"
                variant="subtle"
                color="error"
                icon="lucide:circle-alert"
            />
            <UAlert
                v-if="mooc.status === 'archived'"
                :description="t('archived-callout')"
                variant="subtle"
                color="warning"
                icon="lucide:circle-alert"
            />

            <div class="max-w-2xl mx-auto">
                <iframe
                    v-if="mooc?.trailer"
                    :src="mooc.trailer"
                    title="Video player"
                    frameborder="0"
                    allow="
                        accelerometer;
                        autoplay;
                        clipboard-write;
                        encrypted-media;
                        gyroscope;
                        picture-in-picture;
                        web-share;
                    "
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                    class="w-full aspect-video rounded-md"
                />
                <NuxtImg v-else :src="mooc.image" alt="thumbnail" class="w-full aspect-video rounded-md" />
            </div>

            <div class="flex items-center justify-center">
                <UButton
                    trailing-icon="lucide:arrow-up-right"
                    size="xl"
                    :label="mooc.url ? t('see-course') : t('not-accessible')"
                    :to="mooc.url"
                    :disabled="!mooc.url"
                />
            </div>

            <ContentRenderer :value="mooc" />

            <UButton
                trailing-icon="lucide:arrow-up-right"
                size="xl"
                :label="mooc.url ? t('see-course') : t('not-accessible')"
                :to="mooc.url"
                :disabled="!mooc.url"
            />
        </UPageBody>
    </UPage>

    <UError
        v-else
        :error="{
            statusCode: 404,
            statusMessage: t('not-found'),
            message: t('not-accessible'),
        }"
    />
</template>

<i18n lang="json">
{
    "fr": {
        "opening": "Ouverture",
        "investment": "Investissement",
        "languages": "Langues",
        "not-found": "MOOC non trouvé",
        "error-message": "Le MOOC que vous cherchez n'existe pas",
        "see-course": "Voir le cours",
        "not-accessible": "Ce cours n'est plus accessible",
        "closed-callout": "Ce cours est fermé sur FUN et n'est plus accessible",
        "archived-callout": "Ce cours est archivé, son accès est limité en lecture seule"
    },
    "en": {
        "opening": "Opening",
        "investment": "Investment",
        "languages": "Languages",
        "not-found": "MOOC not found",
        "error-message": "The MOOC you are looking for does not exist.",
        "see-course": "Access the course",
        "not-accessible": "This course is no longer accessible",
        "closed-callout": "This course is closed on FUN and no longer accessible",
        "archived-callout": "This course is archived, access is limited to read-only"
    }
}
</i18n>
