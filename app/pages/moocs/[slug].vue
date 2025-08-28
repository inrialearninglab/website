<script setup lang="ts">
import { useDateFormat, useNow } from "@vueuse/core";

const route = useRoute();
const { data: mooc } = await useAsyncData(() => queryCollection("moocs").path(route.path).first());
</script>

<template>
    <UPage v-if="mooc">
        <UPageHeader :title="mooc.title">
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
            <img v-else :src="mooc.image" alt="thumbnail" class="w-full aspect-video rounded-md" />

            <UButton
                block
                size="lg"
                :label="mooc.url ? 'Voir le cours' : 'Ce cours n\'est plus accessible'"
                :to="mooc.url"
                :disabled="!mooc.url"
            />

            <ContentRenderer :value="mooc" />
        </UPageBody>
    </UPage>

    <UError
        v-else
        :error="{
            statusCode: 404,
            statusMessage: 'Page not found',
            message: 'The page you are looking for does not exist.',
        }"
    />
</template>
