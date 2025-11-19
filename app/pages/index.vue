<script setup lang="ts">
import type { Collections } from "@nuxt/content";

const { locale } = useI18n();
const localePath = useLocalePath();

const { data: home } = await useAsyncData(
    `home-${locale.value}`,
    async () => {
        const collection = ("home_" + locale.value) as "home_fr" | "home_en";
        const content = await queryCollection(collection).first();

        if (!content && locale.value !== "fr") {
            return await queryCollection("home_fr").first();
        }

        return content;
    },
    {
        watch: [locale],
    },
);

const { data: articles } = await useAsyncData(`blog-preview-${locale.value}`, async () => {
    const collection = ("blog_" + locale.value) as "blog_fr" | "blog_en";

    return queryCollection(collection).where("path", "NOT LIKE", "/blog").order("date", "DESC").limit(3).all();
});

useSeoMeta({
    title: home.value?.hero.title,
    description: home.value?.hero.description,
});

definePageMeta({
    layout: "fullpage",
});
</script>

<template>
    <UPage v-if="home">
        <UPageBody class="pb-0">
            <UPageHero v-bind="home.hero" />

            <HeroBackground />

            <UPageSection v-bind="home.moocs">
                <NuxtImg :src="home.moocs.image" />
            </UPageSection>

            <UPageSection v-bind="home.epocs">
                <NuxtImg :src="home.epocs.image" />
            </UPageSection>

            <UPageSection v-bind="home.seriousGames">
                <NuxtImg :src="home.seriousGames.image" />
            </UPageSection>

            <UPageSection v-bind="home.activity">
                <UBlogPosts>
                    <UBlogPost
                        v-for="(post, index) in articles"
                        :key="index"
                        v-bind="post"
                        :to="localePath(post.path)"
                    />
                </UBlogPosts>
            </UPageSection>

            <UContainer>
                <UPageSection
                    id="testimonials"
                    :headline="home.testimonials.headline"
                    :title="home.testimonials.title"
                    :description="home.testimonials.description"
                >
                    <UPageColumns class="xl:columns-4">
                        <UPageCard
                            v-for="(testimonial, index) in home.testimonials.items"
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
            </UContainer>

            <UContainer>
                <div class="relative w-full h-[400px] bg-muted overflow-hidden mb-0 rounded">
                    <UMarquee
                        reverse
                        orientation="vertical"
                        :overlay="false"
                        :ui="{
                            root: '[--duration:40s] absolute w-[460px] -left-[100px] -top-[300px] h-[940px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30',
                        }"
                    >
                        <NuxtImg
                            v-for="i in 4"
                            :key="i"
                            :src="home.marquee[i]"
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
                        <NuxtImg
                            v-for="i in [5, 6, 7, 8]"
                            :key="i"
                            :src="home.marquee[i]"
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
                        <NuxtImg
                            v-for="i in [9, 10, 11, 12]"
                            :key="i"
                            :src="home.marquee[i]"
                            width="460"
                            height="258"
                            :alt="`Image ${i}`"
                            class="aspect-video border border-default rounded-lg bg-white"
                        />
                    </UMarquee>
                </div>
            </UContainer>

            <USeparator class="mb-0" />

            <UPageCTA v-bind="home.cta" class="overflow-hidden">
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
