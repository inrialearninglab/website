<script setup lang="ts">
import { withoutLeadingSlash } from "ufo";
import * as locales from "@nuxt/ui/locale";

const { locale, t } = useI18n({
    useScope: "local",
});

const route = useRoute();
const slug = computed(() => withoutLeadingSlash(String(route.params.slug)));
const { data: epoc } = await useAsyncData(
    `epoc-${slug.value}-${locale.value}`,
    async () => {
        const collection = ("epocs_" + locale.value) as "epocs_fr" | "epocs_en";

        const epoc = await queryCollection(collection).path(`/epocs/${slug.value}`).first();

        if (!epoc && locale.value !== "fr") {
            return await queryCollection("epocs_fr").path(`/epocs/${slug.value}`).first();
        }

        return epoc;
    },
    {
        watch: [locale],
    },
);

const links = ref([
    {
        label: t("discover-android"),
        to: "https://play.google.com/store/apps/details?id=fr.inria.epoc",
        trailingIcon: "lucide:arrow-up-right",
        icon: "simple-icons:googleplay",
    },
    {
        label: t("discover-ios"),
        to: "https://apps.apple.com/app/epoc/id1596317383",
        trailingIcon: "lucide:arrow-up-right",
        icon: "simple-icons:apple",
    },
]);
</script>

<template>
    <UPage v-if="epoc">
        <UPageBody>
            <UPageSection
                :title="epoc.title"
                :description="epoc.description"
                :links="links"
                orientation="horizontal"
                variant="naked"
                :ui="{
                    container: 'p-0!',
                }"
            >
                <template #headline>
                    <div class="flex gap-2 items-center">
                        <UBadge variant="soft" color="neutral" icon="lucide:copyright">
                            {{ epoc.licence }}
                        </UBadge>
                        <UBadge v-if="epoc.duration" variant="soft" color="neutral" icon="lucide:clock">
                            {{ epoc.duration }}
                        </UBadge>
                        <UBadge v-if="epoc.lang?.length" variant="soft" color="neutral" icon="lucide:earth">
                            <div v-for="(lang, index) of epoc.lang" class="flex items-center gap-1">
                                <span>{{ getEmojiFlag(lang) }} </span>
                                <p>{{ locales[lang].name }}{{ index !== epoc.lang.length - 1 ? ", " : "" }}</p>
                            </div>
                        </UBadge>
                    </div>
                </template>
                <NuxtImg :src="epoc.image" alt="" class="w-full" />
            </UPageSection>
            <ContentRenderer :value="epoc" />
            <div class="flex gap-6">
                <UButton v-for="link of links" v-bind="link" />
            </div>
        </UPageBody>
    </UPage>

    <UError
        v-else
        :error="{
            statusCode: 404,
            statusMessage: t('error-title'),
            message: t('error-message'),
        }"
    />
</template>

<i18n lang="json">
{
    "fr": {
        "discover-ios": "Découvrir sur iOS",
        "discover-android": "Découvrir sur Android",
        "error-title": "ePoc introuvable",
        "error-message": "L'ePoc que vous recherchez n'existe pas."
    },
    "en": {
        "discover-ios": "Discover on iOS",
        "discover-android": "Discover on Android",
        "error-title": "ePoc not found",
        "error-message": "The ePoc you are looking for does not exist."
    }
}
</i18n>
