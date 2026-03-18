<script setup lang="ts">
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
    <div v-if="home">
        <UPageHero v-bind="home.hero" :ui="{ description: 'sm:text-2xl' }">
            <template #links>
                <div class="grid gap-2">
                    <UPageFeature v-for="item of home.hero.list" :icon="item.icon" :title="item.text" />
                </div>
            </template>
        </UPageHero>

        <UPageSection
            v-bind="home.moocs"
            :ui="{
                root: 'bg-gradient-to-b border-t border-default from-muted dark:from-muted/40 to-20% to-default',
            }"
        >
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
        </UPageSection>

        <UPageSection
            v-bind="home.epocs"
            :ui="{
                root: 'bg-gradient-to-b border-t border-default from-muted dark:from-muted/40 to-20% to-default',
            }"
        >
            <NuxtImg :src="home.epocs.image" />
        </UPageSection>

        <UPageSection
            v-bind="home.seriousGames"
            :ui="{
                root: 'bg-gradient-to-b border-t border-default from-muted dark:from-muted/40 to-20% to-default',
            }"
        >
            <NuxtImg :src="home.seriousGames.image" />
        </UPageSection>

        <UPageSection
            v-bind="home.activity"
            :ui="{
                container: 'gap-0!',
                root: 'bg-gradient-to-b border-t border-default from-muted dark:from-muted/40 to-20% to-default',
            }"
        >
            <UBlogPosts>
                <UBlogPost v-for="(post, index) in articles" :key="index" v-bind="post" :to="localePath(post.path)" />
            </UBlogPosts>
        </UPageSection>

        <!-- <UPageSection
            id="testimonials"
            :headline="home.testimonials.headline"
            :title="home.testimonials.title"
            :description="home.testimonials.description"
            class="overflow-hidden border-x border-t border-default"
            :ui="{
                title: 'max-w-2xl mx-auto',
                container: 'relative',
            }"
        >
            <div
                aria-hidden="true"
                class="block absolute z-[-1] border-x border-default inset-0 mx-4 sm:mx-6 lg:mx-8"
            />
            <UContainer>
                <UPageColumns>
                    <UPageCard
                        v-for="(testimonial, index) in home.testimonials.items"
                        :key="index"
                        variant="soft"
                        :description="testimonial.quote"
                        :ui="{ description: 'before:content-[open-quote] after:content-[close-quote]' }"
                    >
                        <template #footer>
                            <UUser v-bind="testimonial.user" size="lg" />
                        </template>
                    </UPageCard>
                </UPageColumns>
            </UContainer>
        </UPageSection> -->

        <USeparator class="mb-0" />

        <UPageCTA v-bind="home.cta" class="overflow-hidden relative" />
    </div>

    <UError
        v-else
        :error="{
            statusCode: 404,
            statusMessage: 'Page not found',
            message: 'The page you are looking for does not exist.',
        }"
    />
</template>
