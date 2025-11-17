<script setup lang="ts">
import { useDateFormat } from "@vueuse/core";
import { withoutLeadingSlash } from "ufo";
import type { Collections } from "@nuxt/content";

const route = useRoute();
const { locale } = useI18n();
const slug = computed(() => withoutLeadingSlash(String(route.params.slug)));

const { data: mooc } = await useAsyncData(
    `mooc-${slug.value}-${locale.value}`,
    async () => {
        const collection = ("moocs_" + locale.value) as keyof Collections;

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
                <div class="flex gap-4">
                    <p class="flex items-center gap-1">
                        <UIcon name="lucide:calendar" />
                        Ouverture : {{ useDateFormat(mooc.date, "D MMMM YYYY", { locales: "fr-FR" }) }}
                    </p>
                    <p class="flex items-center gap-1">
                        <UIcon name="lucide:clock" />Investissement : {{ mooc.investment }}
                    </p>
                    <p class="flex items-center gap-1">
                        <UIcon name="lucide:globe" />Langues : {{ mooc.lang.join(", ") }}
                    </p>
                </div>
            </template>
        </UPageHeader>

        <UPageBody>
            <iframe
                v-if="mooc.trailer"
                :src="mooc.trailer"
                title="Video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                class="w-full aspect-video rounded-md"
            />
            <NuxtImg v-else :src="mooc.image" alt="thumbnail" class="w-full aspect-video rounded-md" />

            <div class="flex items-center justify-center">
                <UButton
                    trailing-icon="lucide:arrow-up-right"
                    size="xl"
                    :label="mooc.url ? 'Voir le cours' : 'Ce cours n\'est plus accessible'"
                    :to="mooc.url"
                    :disabled="!mooc.url"
                />
            </div>

            <ContentRenderer :value="mooc" />

            <UButton
                trailing-icon="lucide:arrow-up-right"
                size="xl"
                :label="mooc.url ? 'Voir le cours' : 'Ce cours n\'est plus accessible'"
                :to="mooc.url"
                :disabled="!mooc.url"
            />
        </UPageBody>
    </UPage>

    <UError
        v-else
        :error="{
            statusCode: 404,
            statusMessage: 'MOOC not found',
            message: 'The MOOC you are looking for does not exist.',
        }"
    />
</template>
