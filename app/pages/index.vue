<script setup lang="ts">
import type { Collections } from "@nuxt/content";

const { locale } = useI18n();

const { data: home } = await useAsyncData(
    `home-${locale.value}`,
    async () => {
        const collection = ("content_" + locale.value) as keyof Collections;
        const content = await queryCollection(collection).path("/").first();

        if (!content && locale.value !== "fr") {
            return await queryCollection("content_fr").path("/").first();
        }

        return content;
    },
    {
        watch: [locale],
    },
);

useSeoMeta({
    title: home.value?.title,
    description: home.value?.description,
});

definePageMeta({
    layout: "fullpage",
});
</script>

<template>
    <UPage v-if="home">
        <UPageBody class="pb-0">
            <UPageHero v-bind="home.body.hero" />

            <HeroBackground />

            <UPageSection v-bind="home.body.activity"> </UPageSection>

            <UPageSection v-bind="home.body.moocs">
                <NuxtImg :src="home.body.moocs.image" />
            </UPageSection>

            <UPageSection v-bind="home.body.epocs">
                <NuxtImg :src="home.body.epocs.image" />
            </UPageSection>

            <UPageSection v-bind="home.body.seriousGames">
                <NuxtImg :src="home.body.seriousGames.image" />
            </UPageSection>

            <UPageSection
                id="testimonials"
                :headline="home.body.testimonials.headline"
                :title="home.body.testimonials.title"
                :description="home.body.testimonials.description"
            >
                <UPageColumns class="xl:columns-4">
                    <UPageCard
                        v-for="(testimonial, index) in home.body.testimonials.items"
                        :key="index"
                        variant="subtle"
                        :description="testimonial.quote"
                        :ui="{ description: 'before:content-[open-quote] after:content-[close-quote]' }"
                    >
                        <template #footer>
                            <UUser v-bind="testimonial.user" size="lg" />
                        </template>
                    </UPageCard>
                </UPageColumns>
            </UPageSection>

            <div class="relative w-full h-[400px] bg-muted overflow-hidden mb-0">
                <UMarquee
                    reverse
                    orientation="vertical"
                    :overlay="false"
                    :ui="{
                        root: '[--duration:40s] absolute w-[460px] -left-[100px] -top-[300px] h-[940px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30',
                    }"
                >
                    <img
                        v-for="i in 4"
                        :key="i"
                        :src="home.body.marquee[i]"
                        width="460"
                        height="258"
                        :alt="`Image ${i}`"
                        class="aspect-video border border-default rounded-lg bg-white"
                    />
                </UMarquee>
                <UMarquee
                    orientation="vertical"
                    :overlay="false"
                    :ui="{
                        root: '[--duration:40s] absolute w-[460px] -top-[400px] left-[480px] h-[1160px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30',
                    }"
                >
                    <img
                        v-for="i in [5, 6, 7, 8]"
                        :key="i"
                        :src="home.body.marquee[i]"
                        width="460"
                        height="258"
                        :alt="`Image ${i}`"
                        class="aspect-video border border-default rounded-lg bg-white"
                    />
                </UMarquee>
                <UMarquee
                    reverse
                    orientation="vertical"
                    :overlay="false"
                    :ui="{
                        root: 'hidden md:flex [--duration:40s] absolute w-[460px] -top-[300px] left-[1020px] h-[1060px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30',
                    }"
                >
                    <img
                        v-for="i in [9, 10, 11, 12]"
                        :key="i"
                        :src="home.body.marquee[i]"
                        width="460"
                        height="258"
                        :alt="`Image ${i}`"
                        class="aspect-video border border-default rounded-lg bg-white"
                    />
                </UMarquee>
            </div>

            <USeparator class="mb-0" />

            <UPageCTA v-bind="home.body.cta" class="overflow-hidden">
                <StarsBg />
            </UPageCTA>
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
